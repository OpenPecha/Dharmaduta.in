
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden font-inter"
      style={{
        backgroundImage: `url('/lovable-uploads/b64271e6-c63c-4747-b600-13b6e388cbad.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        minHeight: '100vh'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-indigo-50/30 z-10"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-20">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-indigo-200"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full border border-purple-200"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full border border-blue-200"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 rounded-full border border-indigo-200"></div>
      </div>

      {/* Content Container - Centered */}
      <div className="container mx-auto px-6 relative z-30 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
            Multiply Your Buddhist Activity
            <br />
            in the Age of AI
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl font-roboto text-white mb-12 font-normal leading-relaxed max-w-4xl mx-auto tracking-normal drop-shadow-lg">
            You have a vision to spread the Dharma. We have the team to make it a reality in the digital age.
          </h2>
          
          <div className="flex justify-center">
            <Button 
              onClick={scrollToServices}
              size="lg" 
              className="bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-700/80 hover:to-purple-700/80 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              What we can offer
              <ArrowDown className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse z-30"></div>
      <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000 z-30"></div>
      <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500 z-30"></div>
    </section>
  );
};

export default HeroSection;
