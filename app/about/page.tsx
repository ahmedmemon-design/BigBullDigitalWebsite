import SimpleAboutUs from "@/components/AboutProvideSection";
import SimpleFAQSection from "@/components/FrequentlyAskQuestions";
import ServicesSection from "@/components/OurServicesInAbout";
import { GridScan } from "@/components/PrismaticBurst";
import Testimonials from "@/components/Testinomials";
import CircularGallery from "@/components/TrustedPartners";

export default function About() {
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

            <CircularGallery/>
            </div>
   </>
  );
}