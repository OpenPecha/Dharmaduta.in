import AboutSection from "@/components/AboutSection";
import FoundersSection from "@/components/FoundersSection";
import VisionSection from "@/components/VisionSection";
import MissionSection from "@/components/MissionSection";
import TrustedBySection from "@/components/TrustedBySection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <AboutSection />
      <FoundersSection />
      <VisionSection />
      <MissionSection />
      <TrustedBySection />
      <Footer />
    </div>
  );
};

export default About;
