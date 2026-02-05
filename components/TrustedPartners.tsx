'use client'
import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';

type GL = Renderer['gl'];

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: number;
  return function (this: any, ...args: Parameters<T>) {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1: number, p2: number, t: number): number {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance: any): void {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach(key => {
    if (key !== 'constructor' && typeof instance[key] === 'function') {
      instance[key] = instance[key].bind(instance);
    }
  });
}

function getFontSize(font: string): number {
  const match = font.match(/(\d+)px/);
  return match ? parseInt(match[1], 10) : 30;
}

function createTextTexture(
  gl: GL,
  text: string,
  font: string = 'bold 30px monospace',
  color: string = 'black'
): { texture: Texture; width: number; height: number } {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Could not get 2d context');

  context.font = font;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const fontSize = getFontSize(font);
  const textHeight = Math.ceil(fontSize * 1.2);

  canvas.width = textWidth + 20;
  canvas.height = textHeight + 20;

  context.font = font;
  context.fillStyle = color;
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
}

interface TitleProps {
  gl: GL;
  plane: Mesh;
  renderer: Renderer;
  text: string;
  textColor?: string;
  font?: string;
}

class Title {
  gl: GL;
  plane: Mesh;
  renderer: Renderer;
  text: string;
  textColor: string;
  font: string;
  mesh!: Mesh;

  constructor({ gl, plane, renderer, text, textColor = '#545050', font = '30px sans-serif' }: TitleProps) {
    autoBind(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.text = text;
    this.textColor = textColor;
    this.font = font;
    this.createMesh();
  }

  createMesh() {
    const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true
    });
    this.mesh = new Mesh(this.gl, { geometry, program });
    const aspect = width / height;
    const textHeightScaled = this.plane.scale.y * 0.15;
    const textWidthScaled = textHeightScaled * aspect;
    this.mesh.scale.set(textWidthScaled, textHeightScaled, 1);
    this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeightScaled * 0.5 - 0.05;
    this.mesh.setParent(this.plane);
  }
}

interface ScreenSize {
  width: number;
  height: number;
}

interface Viewport {
  width: number;
  height: number;
}

interface MediaProps {
  geometry: Plane;
  gl: GL;
  image: string;
  index: number;
  length: number;
  renderer: Renderer;
  scene: Transform;
  screen: ScreenSize;
  text: string;
  viewport: Viewport;
  bend: number;
  textColor: string;
  borderRadius?: number;
  font?: string;
}

class Media {
  extra: number = 0;
  geometry: Plane;
  gl: GL;
  image: string;
  index: number;
  length: number;
  renderer: Renderer;
  scene: Transform;
  screen: ScreenSize;
  text: string;
  viewport: Viewport;
  bend: number;
  textColor: string;
  borderRadius: number;
  font?: string;
  program!: Program;
  plane!: Mesh;
  title!: Title;
  scale!: number;
  padding!: number;
  width!: number;
  widthTotal!: number;
  x!: number;
  speed: number = 0;
  isBefore: boolean = false;
  isAfter: boolean = false;

  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    renderer,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font
  }: MediaProps) {
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.length = length;
    this.renderer = renderer;
    this.scene = scene;
    this.screen = screen;
    this.text = text;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, {
      generateMipmaps: true
    });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: this.borderRadius }
      },
      transparent: true
    });
    
    if (typeof window !== 'undefined') {
      const img = window.Image ? new window.Image() : document.createElement('img');
      img.crossOrigin = 'anonymous';
      img.src = this.image;
      img.onload = () => {
        texture.image = img;
        this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
      };
    }
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.plane.setParent(this.scene);
  }

  createTitle() {
    this.title = new Title({
      gl: this.gl,
      plane: this.plane,
      renderer: this.renderer,
      text: this.text,
      textColor: this.textColor,
      font: this.font
    });
  }

  update(scroll: { current: number; last: number }, direction: 'right' | 'left') {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.speed = scroll.current - scroll.last;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = this.speed;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }

  onResize({ screen, viewport }: { screen?: ScreenSize; viewport?: Viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
      if (this.plane.program.uniforms.uViewportSizes) {
        this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height];
      }
    }
    this.scale = this.screen.height / 1500;
    this.plane.scale.y = (this.viewport.height * (900 * this.scale)) / this.screen.height;
    this.plane.scale.x = (this.viewport.width * (700 * this.scale)) / this.screen.width;
    this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
    this.padding = 2;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

interface AppConfig {
  items?: { image: string; text: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
}

class App {
  container: HTMLElement;
  scrollSpeed: number;
  scroll: {
    ease: number;
    current: number;
    target: number;
    last: number;
    position?: number;
  };
  onCheckDebounce: (...args: any[]) => void;
  renderer!: Renderer;
  gl!: GL;
  camera!: Camera;
  scene!: Transform;
  planeGeometry!: Plane;
  medias: Media[] = [];
  mediasImages: { image: string; text: string }[] = [];
  screen!: { width: number; height: number };
  viewport!: { width: number; height: number };
  raf: number = 0;

  boundOnResize!: () => void;
  boundOnWheel!: (e: Event) => void;
  boundOnTouchDown!: (e: MouseEvent | TouchEvent) => void;
  boundOnTouchMove!: (e: MouseEvent | TouchEvent) => void;
  boundOnTouchUp!: () => void;

  isDown: boolean = false;
  start: number = 0;

  constructor(
    container: HTMLElement,
    {
      items,
      bend = 1,
      textColor = '#ffffff',
      borderRadius = 0,
      font = 'bold 30px Figtree',
      scrollSpeed = 2,
      scrollEase = 0.05
    }: AppConfig
  ) {
    document.documentElement.classList.remove('no-js');
    this.container = container;
    this.scrollSpeed = scrollSpeed;
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.update();
    this.addEventListeners();
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.renderer.gl.canvas as HTMLCanvasElement);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 50,
      widthSegments: 100
    });
  }

  createMedias(
    items: { image: string; text: string }[] | undefined,
    bend: number = 1,
    textColor: string,
    borderRadius: number,
    font: string
  ) {
    const defaultItems = [
      {
        image: `https://images.unsplash.com/photo-1636114673156-052a83459fc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWV0YXxlbnwwfHwwfHx8MA%3D%3D`,
        text: 'Meta'
      },
      {
        image: `data:image/png;base64,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`,
        text: 'Shopify'
      },
      {
        image: `https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D`,
        text: 'Instagram'
      },
      {
        image: `https://images.unsplash.com/photo-1683201681334-f25eb7658958?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGlua2VkaW4lMjBsb2dvfGVufDB8fDB8fHww`,
        text: 'LinkedIN'
      },
      {
        image: `data:image/png;base64,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`,
        text: 'AWS'
      },
      {
        image: `data:image/png;base64,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`,
        text: 'WordPress'
      },
      {
        image: `data:image/png;base64,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`,
        text: 'Microsoft'
      },
      {
        image: `data:image/png;base64,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`,
        text: 'Tiktok'
      },
      {
        image: `data:image/jpeg;base64,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`,
        text: 'Google'
      },
    ];
    const galleryItems = items && items.length ? items : defaultItems;
    this.mediasImages = galleryItems.concat(galleryItems);
    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        text: data.text,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font
      });
    });
  }

  onTouchDown(e: MouseEvent | TouchEvent) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = 'touches' in e ? e.touches[0].clientX : e.clientX;
  }

  onTouchMove(e: MouseEvent | TouchEvent) {
    if (!this.isDown) return;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * (this.scrollSpeed * 0.025);
    this.scroll.target = (this.scroll.position ?? 0) + distance;
  }

  onTouchUp() {
    this.isDown = false;
    this.onCheck();
  }

  onWheel(e: Event) {
    const wheelEvent = e as WheelEvent;
    const delta = wheelEvent.deltaY || (wheelEvent as any).wheelDelta || (wheelEvent as any).detail;
    this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
    this.onCheckDebounce();
  }

  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }

  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height
    });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    if (this.medias) {
      this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport }));
    }
  }

  update() {
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
    if (this.medias) {
      this.medias.forEach(media => media.update(this.scroll, direction));
    }
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }

  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);
    window.addEventListener('resize', this.boundOnResize);
    window.addEventListener('mousewheel', this.boundOnWheel);
    window.addEventListener('wheel', this.boundOnWheel);
    window.addEventListener('mousedown', this.boundOnTouchDown);
    window.addEventListener('mousemove', this.boundOnTouchMove);
    window.addEventListener('mouseup', this.boundOnTouchUp);
    window.addEventListener('touchstart', this.boundOnTouchDown);
    window.addEventListener('touchmove', this.boundOnTouchMove);
    window.addEventListener('touchend', this.boundOnTouchUp);
  }

  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.boundOnResize);
    window.removeEventListener('mousewheel', this.boundOnWheel);
    window.removeEventListener('wheel', this.boundOnWheel);
    window.removeEventListener('mousedown', this.boundOnTouchDown);
    window.removeEventListener('mousemove', this.boundOnTouchMove);
    window.removeEventListener('mouseup', this.boundOnTouchUp);
    window.removeEventListener('touchstart', this.boundOnTouchDown);
    window.removeEventListener('touchmove', this.boundOnTouchMove);
    window.removeEventListener('touchend', this.boundOnTouchUp);
    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas as HTMLCanvasElement);
    }
  }
}

interface CircularGalleryProps {
  items?: { image: string; text: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  font = 'bold 30px Figtree',
  scrollSpeed = 2,
  scrollEase = 0.05
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
 
  
  useEffect(() => {
    if (!containerRef.current) return;
    const app = new App(containerRef.current, {
      items,
      bend,
      textColor,
      borderRadius,
      font,
      scrollSpeed,
      scrollEase
    });
    return () => {
      app.destroy();
    };
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);
  
  return (
    <div className="w-full bg-black">
      {/* Heading Section */}
      <div className="text-center py-12 md:py-16 lg:py-20 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
          More than <span className="text-red-500">4k+</span> Trusted Partners
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Join thousands of companies that trust us with their digital transformation
        </p>
      </div>

      {/* Gallery Section */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] -mt-20 overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef} />

          </div>
  );
}