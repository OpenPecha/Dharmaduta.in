
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
    <div className="min-h-screen bg-background relative">
      {/* Background image for everything except hero */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/12c37c36-07f6-494f-89f1-9ae14b5920f3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        
        {/* All sections after hero will have the background */}
        <div className="relative">
          <HowWeHelpSection />
          <ServicesSection />
          <ModelSection />
          <AboutSection />
          <CaseStudiesSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
