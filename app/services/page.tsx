import ServicesGrid from "@/components/ServiceCard";
import SkillsComponent from "@/components/Skills";
import Testimonials from "@/components/Testinomials";
import LogoLoop from "@/components/TrustedPartners";
import Beams from "@/components/ui/HeroSectionService";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFacebook, SiInstagram, SiShopify, SiLinkedin, SiAwslambda, SiAmazon, SiWordpress, SiTiktok, SiGoogle } from 'react-icons/si';

export default function PageService() {
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
        <div className="overflow-hidden">  
            {/* Hero Section with Gradient Background */}
<div className="w-full h-[650px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px] relative mb-12 sm:mb-16 md:mb-20 lg:mb-24">        
   <Beams
    beamWidth={3}
    beamHeight={30}
    beamNumber={20}
    lightColor="#FD0000"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
                {/* Hero Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl text-center">
                        Our Services
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg text-center">
                        We provide cutting-edge solutions to help your business thrive in the digital world
                    </p>
                </div>
            </div>

            <ServicesGrid />
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
<SkillsComponent/>
<Testimonials />
        </div>
        </div>

    )
}