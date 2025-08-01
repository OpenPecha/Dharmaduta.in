
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, []);

  const navigateToServices = () => {
    window.location.href = '/our-services';
  };

  return (
    <section 
      className="relative w-full h-screen flex items-center overflow-hidden font-roboto"
      style={{
        backgroundImage: `url('/lovable-uploads/b64271e6-c63c-4747-b600-13b6e388cbad.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        minHeight: '100vh'
      }}
    >
      {/* Background overlay - slightly darker */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-indigo-900/20 z-10"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-20">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-indigo-200"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full border border-purple-200"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full border border-blue-200"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 rounded-full border border-indigo-200"></div>
      </div>

      {/* Content Container - Left Aligned */}
      <div className="container mx-auto px-6 lg:px-16 xl:px-20 relative z-30 flex items-center h-full">
        <div className="max-w-4xl">
          <h1 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight tracking-tight bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent opacity-0 translate-y-10 font-roboto"
          >
            Multiply Your Buddhist Activity
            <br />
            in the Age of AI
          </h1>
          
          <h2 
            ref={subtitleRef}
            className="text-sm md:text-base lg:text-lg font-roboto text-white mb-12 font-normal leading-relaxed max-w-4xl tracking-normal drop-shadow-lg opacity-0 translate-y-10 whitespace-nowrap"
          >
            You have a vision to spread the Dharma. We have the team to make it a reality in the digital age.
          </h2>
          
          <div 
            ref={buttonRef}
            className="opacity-0 translate-y-10"
          >
            <Button 
              onClick={navigateToServices}
              size="default" 
              className="bg-white border border-white hover:bg-gray-50 px-6 py-3 text-base font-medium rounded-sm font-roboto transition-colors duration-200 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              What we can offer
              <ArrowDown className="ml-2 h-4 w-4" />
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
