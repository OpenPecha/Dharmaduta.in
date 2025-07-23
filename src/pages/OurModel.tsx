import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { RefreshCw, Users } from "lucide-react";

const OurModel = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: modelRef, isVisible: modelVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background font-roboto">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-24 pb-16 bg-gradient-to-br from-teal-600 to-cyan-600 relative overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/e10f0ab5-bf16-4e27-bb26-fadb48bc0f04.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-teal-600/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-left">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-white mb-6 transition-all duration-700 ${heroVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              Our Model
            </h1>
            <p className={`text-xl md:text-2xl text-white/90 leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
              A Bridge Between Commerce and Community
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section 
        ref={modelRef}
        className="py-16 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${modelVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">How We Work</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We operate at the intersection of a non-profit mission and a sustainable business. Inspired by leaders in open source and social enterprise, our model is built on two core principles:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* The Virtuous Cycle */}
              <Card className={`bg-white/70 backdrop-blur-sm border-0 shadow-xl transition-all duration-700 delay-200 ${modelVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RefreshCw className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">The Virtuous Cycle</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Our commercial projects directly fund and contribute to the open-source Buddhist technology that benefits everyone.
                  </p>
                </CardContent>
              </Card>

              {/* Sangha Sourcing */}
              <Card className={`bg-white/70 backdrop-blur-sm border-0 shadow-xl transition-all duration-700 delay-400 ${modelVisible ? 'animate-slide-up-delay-2' : 'opacity-0 translate-y-10'}`}>
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-violet-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Sangha Sourcing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Our data services create opportunities for dedicated Buddhist practitioners to earn a livelihood through their specialized knowledge.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className={`text-center mt-12 transition-all duration-700 delay-600 ${modelVisible ? 'animate-slide-up-delay-3' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                This ensures that every project we undertake not only serves our client's mission but also strengthens the entire Dharma community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurModel;