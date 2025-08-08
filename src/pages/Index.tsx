
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import InfographicSection from "@/components/InfographicSection";
import CorePillarsSection from "@/components/CorePillarsSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ModelSection from "@/components/ModelSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowWeHelpSection />
      <ModelSection />
      <InfographicSection />
      <CaseStudiesSection />
      <CorePillarsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
