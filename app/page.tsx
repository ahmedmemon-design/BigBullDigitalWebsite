import Hero from "@/components/sections/Hero";
import ClientSlider from "@/components/sections/ClientSlider";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientSlider />
      <Services />
      <Stats />
      <Testimonials />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
