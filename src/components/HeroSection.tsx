
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigateToServices = () => {
    window.location.href = '/our-services';
  };

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Multiply Your Buddhist Activity 
          in the Age of AI.
          </h1>
          
          <h2 className="text-xl lg:text-2xl text-gray-600 mb-12 font-normal leading-relaxed max-w-3xl mx-auto">
            Bridging ancient wisdom and modern technology to multiply your Buddhist impact in the digital age.
          </h2>
          
          <Button 
            onClick={navigateToServices}
            size="lg" 
            className="bg-[#bf9c2e] hover:bg-[#a6872a] text-white font-medium px-8 py-4 text-lg"
          >
            What we can offer
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
