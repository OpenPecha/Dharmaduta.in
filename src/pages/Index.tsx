
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import InfographicSection from "@/components/InfographicSection";
import CorePillarsSection from "@/components/CorePillarsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowWeHelpSection />
      <InfographicSection />
      <CorePillarsSection />
      <Footer />
    </div>
  );
};

export default Index;
