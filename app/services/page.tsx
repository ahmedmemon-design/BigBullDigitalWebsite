import ServicesGrid from "@/components/ServiceCard";
import SkillsComponent from "@/components/Skills";
import Testimonials from "@/components/Testinomials";
import CircularGallery from "@/components/TrustedPartners";
import GlassSurface from "@/components/TrustedPartners";
import Beams from "@/components/ui/HeroSectionService";
import Lightning from "@/components/ui/HeroSectionService";
import ScrollReveal, { ScrollVelocity } from "@/components/ui/Loop";

export default function PageService() {
   
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
<div className="w-full h-[400px] sm:h-[400px] md:h-[600px] lg:h-[650px] xl:h-[650px] relative mb-12 sm:mb-16 md:mb-20 lg:mb-24">        
  <CircularGallery textColor="#ffffff" 
  bend={1}
  borderRadius={0.05}
  scrollSpeed={2}
  scrollEase={0.05}
/>
</div>
<SkillsComponent/>
<Testimonials />
        </div>
    )
}