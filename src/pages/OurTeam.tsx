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
        className="pt-24 pb-16 bg-gradient-to-br from-purple-600 to-indigo-700 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-roboto font-bold text-white mb-6 transition-all duration-700 ${heroVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              Meet The Team
            </h1>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section 
        ref={teamRef}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-700 ${teamVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mb-8">
                Our Leadership
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Leadership Team Members */}
              <Card className={`bg-white border-0 shadow-lg transition-all duration-700 delay-200 hover:shadow-xl ${teamVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                  </div>
                  <h3 className="text-xl font-roboto font-bold text-gray-900 mb-2">Md Shahjahan</h3>
                  <p className="text-sm font-roboto text-gray-600 mb-3 italic">Founder & Managing Director</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A passionate technology enthusiast, spent the last decade shaping business ideas to life.
                  </p>
                </CardContent>
              </Card>

              <Card className={`bg-white border-0 shadow-lg transition-all duration-700 delay-300 hover:shadow-xl ${teamVisible ? 'animate-slide-up-delay-2' : 'opacity-0 translate-y-10'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                  </div>
                  <h3 className="text-xl font-roboto font-bold text-gray-900 mb-2">Sheikh Heera</h3>
                  <p className="text-sm font-roboto text-gray-600 mb-3 italic">CTO & Platform Architect</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Being in the top 0.09% overall in StackOverflow, you can trust this programmer.
                  </p>
                </CardContent>
              </Card>

              <Card className={`bg-white border-0 shadow-lg transition-all duration-700 delay-400 hover:shadow-xl ${teamVisible ? 'animate-slide-up-delay-3' : 'opacity-0 translate-y-10'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                  </div>
                  <h3 className="text-xl font-roboto font-bold text-gray-900 mb-2">Faizus Saleheen</h3>
                  <p className="text-sm font-roboto text-gray-600 mb-3 italic">Chief Marketing Officer</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Add value to the users' lives, they'll do the marketing for you—he lives by this code wholeheartedly.
                  </p>
                </CardContent>
              </Card>

              <Card className={`bg-white border-0 shadow-lg transition-all duration-700 delay-500 hover:shadow-xl ${teamVisible ? 'animate-slide-up-delay-4' : 'opacity-0 translate-y-10'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                  </div>
                  <h3 className="text-xl font-roboto font-bold text-gray-900 mb-2">Mahmudul Hasan</h3>
                  <p className="text-sm font-roboto text-gray-600 mb-3 italic">Vice President of Engineering</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Every problem can be solved—the mindset that makes him the go-to-guy for the engineering team.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Dharmaduta Services was founded on our "Virtuous Cycle" principle—that technology and media should sustainably serve the Dharma. We are a unique blend of practitioners, technologists, and storytellers committed to this vision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Buddhist Tech Specialists */}
              <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
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
              <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
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
              <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
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