import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const OurModel = () => {
  const { ref: mainRef, isVisible: mainVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background font-roboto">
      <Header />
      
      {/* Main Section - Our Model */}
      <section 
        ref={mainRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{
          backgroundImage: `url(/lovable-uploads/7e541528-117e-49bb-865c-5faa21266735.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* Title */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-foreground leading-tight mb-16 transition-all duration-1000 ${mainVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
              Our Model
            </h1>

            {/* Three Card Sections */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pecha Apps */}
              <Card className={`bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-95 ${mainVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-roboto font-bold text-gray-900 tracking-tight">
                    Pecha Apps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-center justify-center">
                    <div className="text-gray-600 font-roboto text-lg">
                      Digital Applications
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pecha Data */}
              <Card className={`bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-95 ${mainVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '200ms' }}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-roboto font-bold text-gray-900 tracking-tight">
                    Pecha Data
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-center justify-center">
                    <div className="text-gray-600 font-roboto text-lg">
                      Data Management
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pecha Tool */}
              <Card className={`bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-95 ${mainVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '400ms' }}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-roboto font-bold text-gray-900 tracking-tight">
                    Pecha Tool
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-center justify-center">
                    <div className="text-gray-600 font-roboto text-lg">
                      Development Tools
                    </div>
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

export default OurModel;