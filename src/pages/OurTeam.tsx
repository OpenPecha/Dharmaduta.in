import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, GraduationCap, TrendingUp } from "lucide-react";

const OurTeam = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background font-roboto">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-24 pb-16 bg-gradient-to-br from-indigo-600 to-purple-600 relative overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/c8894c1c-109d-4d1c-9711-30359c95e577.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-indigo-600/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-left">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-white mb-6 transition-all duration-700 ${heroVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              About Us
            </h1>
            <p className={`text-xl md:text-2xl text-white/90 leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
              Your Dedicated Team of Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className="py-16 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${teamVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Dharmaduta Services was founded on our "Virtuous Cycle" principle—that technology and media should sustainably serve the Dharma. We are a unique blend of practitioners, technologists, and storytellers committed to this vision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Buddhist Tech Specialists */}
              <Card className={`bg-white/70 backdrop-blur-sm border-0 shadow-xl transition-all duration-700 delay-200 ${teamVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Buddhist Tech Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    A dynamic team of experienced Buddhist tech specialists who are core contributors to the OpenPecha open-source and open data community.
                  </p>
                </CardContent>
              </Card>

              {/* Network of Scholars */}
              <Card className={`bg-white/70 backdrop-blur-sm border-0 shadow-xl transition-all duration-700 delay-400 ${teamVisible ? 'animate-slide-up-delay-2' : 'opacity-0 translate-y-10'}`}>
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Network of Scholars</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Native Buddhist specialists who have graduated from various monasteries, nunneries, and colleges, and who have direct experience preparing data for AI.
                  </p>
                </CardContent>
              </Card>

              {/* Marketing & Influencer Coaches */}
              <Card className={`bg-white/70 backdrop-blur-sm border-0 shadow-xl transition-all duration-700 delay-600 ${teamVisible ? 'animate-slide-up-delay-3' : 'opacity-0 translate-y-10'}`}>
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Marketing & Influencer Coaches</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    A blend of project managers and influencers from the Buddhist world, working in collaboration with professional market coaches to bring you the best of both worlds.
                  </p>
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