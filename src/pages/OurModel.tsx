import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const OurModel = () => {
  const { ref: mainRef, isVisible: mainVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background font-roboto">
      <Header />
      
      {/* Main Section - Mac Desktop Mockup Style */}
      <section 
        ref={mainRef}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Title */}
            <div className="text-left lg:pr-8">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-foreground leading-tight transition-all duration-1000 ${mainVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
                Digital Dharma Platform That{' '}
                <span className="text-red-500">Solves</span>{' '}
                Your Problems
              </h1>
            </div>

            {/* Right Side - Mac Desktop Mockup */}
            <div className={`relative transition-all duration-1000 delay-300 ${mainVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
              {/* Mac Monitor Base */}
              <div className="relative">
                {/* Monitor Stand */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full"></div>
                
                {/* Monitor Screen */}
                <div className="relative bg-gray-900 rounded-2xl p-3 shadow-2xl">
                  <div className="bg-white rounded-lg overflow-hidden relative aspect-[16/10]">
                    {/* Main Screen Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 p-8 flex flex-col justify-center">
                      <div className="bg-white rounded-lg shadow-lg p-6 mb-4 transform rotate-1">
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-100 rounded mb-1"></div>
                        <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-lg p-6 transform -rotate-1">
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-100 rounded mb-1"></div>
                        <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 transform rotate-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded"></div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 transform -rotate-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Screen Reflection */}
                  <div className="absolute inset-3 bg-gradient-to-br from-white/20 to-transparent rounded-lg pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurModel;