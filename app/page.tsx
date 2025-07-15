import AboutSection from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import DivisiSection from "@/components/sections/divisi-section";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <>
    <div>
      <HeroSection/>
      <AboutSection/>
      <DivisiSection/>
      <ContactSection/>
    </div>
    </>
  );
}
