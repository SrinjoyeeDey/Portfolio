'use  client'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import SkillsSection from "@/components/SkillsSection";
import Work from "@/components/Work";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Timeline />
      <SkillsSection />
      <Work />
      <ContactSection />
      <Footer />
    </>
  );
}
