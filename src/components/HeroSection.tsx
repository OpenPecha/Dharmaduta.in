
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-end justify-start overflow-hidden font-inter pt-0 -mt-16"
      style={{
        backgroundImage: `url('/lovable-uploads/b64271e6-c63c-4747-b600-13b6e388cbad.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        paddingTop: '0'
      }}
    >
      {/* Background overlay - reduced darkness */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-indigo-50/20 z-0"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-indigo-200"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full border border-purple-200"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full border border-blue-200"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 rounded-full border border-indigo-200"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 pb-32">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight text-left bg-gradient-to-r from-red-700 via-red-600 to-red-800 bg-clip-text text-transparent drop-shadow-2xl shadow-red-900/50" style={{ textShadow: '0 4px 8px rgba(153, 27, 27, 0.5), 0 8px 16px rgba(127, 29, 29, 0.3)' }}>
            Multiply Your Buddhist Activity
            <br />
            in the Age of AI
          </h1>
          
          <h2 className="text-sm md:text-base font-roboto text-white mb-12 font-normal leading-relaxed max-w-4xl tracking-normal text-left drop-shadow-lg">
            You have a vision to spread the Dharma. We have the team to make it a reality in the digital age.
          </h2>
          
          <div className="flex justify-start">
            <Button 
              onClick={scrollToServices}
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              Explore Our Services
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse z-20"></div>
      <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000 z-20"></div>
      <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500 z-20"></div>
    </section>
  );
};

export default HeroSection;
