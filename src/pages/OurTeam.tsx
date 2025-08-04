import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Github, Mail } from "lucide-react";

const OurTeam = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();

  return (
    <div 
      className="min-h-screen font-roboto"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/409a37dd-ace9-4849-870a-c694c88c507f.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen relative overflow-hidden flex items-center justify-center"
      >
        {/* Central Title */}
        <div className="relative z-10 text-center px-6">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-roboto font-bold text-white transition-all duration-1000 ${heroVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
            Meet
          </h1>
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-roboto font-bold text-white transition-all duration-1000 delay-200 ${heroVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
            The Team
          </h1>
        </div>
      </section>

      {/* Team Members Section */}
      <section 
        ref={teamRef}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              
              {/* Team Member 1 */}
              <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-lg transition-all duration-700 ${teamVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500"></div>
                  </div>
                  <h3 className="text-lg font-roboto font-bold text-gray-900 mb-1">Md Shahjahan</h3>
                  <p className="text-sm font-roboto text-gray-600 mb-4">Founder & Managing Director</p>
                  <div className="border-t border-gray-200 mb-4"></div>
                  <div className="flex justify-center space-x-4">
                    <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Github className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                    <Mail className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>

              {/* Team Member 2 */}
              <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-lg transition-all duration-700 delay-200 ${teamVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500"></div>
                  </div>
                  <h3 className="text-lg font-roboto font-bold text-gray-900 mb-1">Sheikh Heera</h3>
                  <p className="text-sm font-roboto text-gray-600 mb-4">CTO & Platform Architect</p>
                  <div className="border-t border-gray-200 mb-4"></div>
                  <div className="flex justify-center space-x-4">
                    <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Github className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                    <Mail className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>

              {/* Team Member 3 */}
              <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-lg transition-all duration-700 delay-400 ${teamVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500"></div>
                  </div>
                  <h3 className="text-lg font-roboto font-bold text-gray-900 mb-1">Faizus Saleheen</h3>
                  <p className="text-sm font-roboto text-gray-600 mb-4">Chief Marketing Officer</p>
                  <div className="border-t border-gray-200 mb-4"></div>
                  <div className="flex justify-center space-x-4">
                    <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Github className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                    <Mail className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>

              {/* Team Member 4 */}
              <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-lg transition-all duration-700 delay-600 ${teamVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500"></div>
                  </div>
                  <h3 className="text-lg font-roboto font-bold text-gray-900 mb-1">Mahmudul Hasan</h3>
                  <p className="text-sm font-roboto text-gray-600 mb-4">VP of Engineering</p>
                  <div className="border-t border-gray-200 mb-4"></div>
                  <div className="flex justify-center space-x-4">
                    <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Github className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                    <Mail className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;