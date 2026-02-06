import SimpleAboutUs from "@/components/AboutProvideSection";
import SimpleFAQSection from "@/components/FrequentlyAskQuestions";
import ServicesSection from "@/components/OurServicesInAbout";
import { GridScan } from "@/components/PrismaticBurst";
import Testimonials from "@/components/Testinomials";
import CircularGallery, { LogoLoop } from "@/components/TrustedPartners";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFacebook, SiInstagram, SiShopify, SiLinkedin, SiAwslambda, SiAmazon, SiWordpress, SiTiktok, SiGoogle } from 'react-icons/si';

export default function About() {

  
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
   <>
<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <GridScan
    sensitivity={0.55}
    lineThickness={1}
    linesColor="#FF0000"
    gridScale={0.1}
    scanColor="#FF0000"
    scanOpacity={0.4}
    enablePost
    bloomIntensity={0.6}
    chromaticAberration={0.002}
    noiseIntensity={0.01}
  />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl text-center">
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg text-center">
                        Learn more about Big Bull Digital, our mission, values, and the team dedicated to delivering exceptional digital solutions.
                    </p>
                </div>

            </div>
            <SimpleAboutUs/>
            <ServicesSection/>
            <SimpleFAQSection/>
            <Testimonials/>
            <div className="mb-20">

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
      
    
    </div>
</div>
   </>
  );
}