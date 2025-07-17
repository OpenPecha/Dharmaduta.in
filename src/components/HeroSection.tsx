
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-16 font-inter">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-indigo-200"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full border border-purple-200"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full border border-blue-200"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 rounded-full border border-indigo-200"></div>
      </div>
      
      {/* Lotus Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10h5M15 10h5M10 0v5M10 15v5" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400"/>
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-indigo-400"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            Multiply Your Buddhist Activity
            <br />
            in the <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Age of AI</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-12 font-normal leading-relaxed max-w-4xl mx-auto tracking-wide">
            You have a vision to spread the Dharma. We have the team to make it a reality in the digital age.
          </h2>
          
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
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
