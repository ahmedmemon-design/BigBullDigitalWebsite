import Hero from "@/components/sections/Hero";
import ClientSlider from "@/components/sections/ClientSlider";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Contact from "@/components/sections/Contact";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFacebook, SiInstagram, SiShopify, SiLinkedin, SiAwslambda, SiAmazon, SiWordpress, SiTiktok, SiGoogle } from 'react-icons/si';
import LogoLoop from "@/components/TrustedPartners";

export default function Home() {
  const techLogos = [
    { node: <SiFacebook />, title: "Meta", href: "/" },
    { node: <SiInstagram />, title: "Instagram", href: "/" },
    { node: <SiShopify/>, title: "Shopify", href: "/" },
    { node: <SiLinkedin/>, title: "LinkedIN", href: "/" },
    { node: <SiAmazon/>, title: "AWS", href: "/" },
    { node: <SiWordpress/>, title: "Wordpress", href: "/" },
    { node: <SiTiktok/>, title: "Tiktok", href: "/" },
    { node: <SiGoogle/>, title: "Google", href: "/" },
  ];
  return (
    <main>
      <Hero />
               <div className="text-center py-12 md:py-16 lg:py-20 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
          More than <span className="text-red-500">4k+</span> Trusted Partners
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Join thousands of companies that trust us with their digital transformation
        </p>
      </div>


    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#FB2C29"
        ariaLabel="Technology partners"
      />
            <Services />
      <Stats />
      <Testimonials />
      <FeaturedProjects />
      <Contact />
     </div>
    </main>
  );
}
