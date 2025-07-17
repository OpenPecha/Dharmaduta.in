
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import ServicesSection from "@/components/ServicesSection";
import ModelSection from "@/components/ModelSection";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowWeHelpSection />
      <ServicesSection />
      <ModelSection />
      <AboutSection />
      <CaseStudiesSection />
      <Footer />
    </div>
  );
};

export default Index;
