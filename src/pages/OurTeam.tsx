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
      
      {/* Hero Section with Team Photos */}
      <section 
        ref={heroRef}
        className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 relative overflow-hidden flex items-center justify-center"
      >
        {/* Scattered Team Photos */}
        <div className="absolute inset-0">
          {/* Photo 1 - Top Left */}
          <div className="absolute top-20 left-16 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-300 border-4 border-white/20 overflow-hidden transform -rotate-12">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
          </div>
          
          {/* Photo 2 - Top Right with Name */}
          <div className="absolute top-32 right-20 flex flex-col items-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gray-300 border-4 border-white/20 overflow-hidden transform rotate-6">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
            </div>
            <span className="text-white/80 text-sm font-roboto mt-2">Emma</span>
          </div>
          
          {/* Photo 3 - Center Left */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 flex flex-col items-center">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gray-300 border-4 border-white/20 overflow-hidden transform -rotate-6">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
            </div>
            <span className="text-white/80 text-sm font-roboto mt-2">Marcus</span>
          </div>
          
          {/* Photo 4 - Center Right */}
          <div className="absolute bottom-40 right-12 w-26 h-26 md:w-32 md:h-32 rounded-full bg-gray-300 border-4 border-white/20 overflow-hidden transform rotate-12">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
          </div>
          
          {/* Photo 5 - Bottom Left with Name */}
          <div className="absolute bottom-24 left-20 flex flex-col items-center">
            <div className="w-22 h-22 md:w-30 md:h-30 rounded-full bg-gray-300 border-4 border-white/20 overflow-hidden transform rotate-3">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
            </div>
            <span className="text-white/80 text-sm font-roboto mt-2">Sophia</span>
          </div>
          
          {/* Photo 6 - Right Side with Name */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-300 border-4 border-white/20 overflow-hidden transform -rotate-9">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
            </div>
            <span className="text-white/80 text-sm font-roboto mt-2">Ethan</span>
          </div>
          
          {/* Photo 7 - Bottom Center */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gray-300 border-4 border-white/20 overflow-hidden transform rotate-8">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
          </div>
        </div>
        
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

      {/* Our Leadership Section */}
      <section 
        ref={teamRef}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 ${teamVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
              <h2 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mb-8">
                Our Leadership
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Leadership Team Members */}
              <Card className={`bg-white border-0 shadow-lg transition-all duration-1000 delay-200 hover:shadow-2xl transform hover:scale-105 ${teamVisible ? 'animate-slide-up opacity-100 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden filter grayscale">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500"></div>
                  </div>
                  <h3 className="text-xl font-roboto font-bold text-gray-900 mb-2">Md Shahjahan</h3>
                  <p className="text-sm font-roboto text-gray-600 mb-3 italic">Founder & Managing Director</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A passionate technology enthusiast, spent the last decade shaping business ideas to life.
                  </p>
                </CardContent>
              </Card>

              <Card className={`bg-white border-0 shadow-lg transition-all duration-1000 delay-400 hover:shadow-2xl transform hover:scale-105 ${teamVisible ? 'animate-slide-up opacity-100 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden filter grayscale">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500"></div>
                  </div>
                  <h3 className="text-xl font-roboto font-bold text-gray-900 mb-2">Sheikh Heera</h3>
                  <p className="text-sm font-roboto text-gray-600 mb-3 italic">CTO & Platform Architect</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Being in the top 0.09% overall in StackOverflow, you can trust this programmer.
                  </p>
                </CardContent>
              </Card>

              <Card className={`bg-white border-0 shadow-lg transition-all duration-1000 delay-600 hover:shadow-2xl transform hover:scale-105 ${teamVisible ? 'animate-slide-up opacity-100 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden filter grayscale">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500"></div>
                  </div>
                  <h3 className="text-xl font-roboto font-bold text-gray-900 mb-2">Faizus Saleheen</h3>
                  <p className="text-sm font-roboto text-gray-600 mb-3 italic">Chief Marketing Officer</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Add value to the users' lives, they'll do the marketing for you—he lives by this code wholeheartedly.
                  </p>
                </CardContent>
              </Card>

              <Card className={`bg-white border-0 shadow-lg transition-all duration-1000 delay-800 hover:shadow-2xl transform hover:scale-105 ${teamVisible ? 'animate-slide-up opacity-100 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden filter grayscale">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500"></div>
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
            <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${teamVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 font-roboto">
                Dharmaduta Services was founded on our "Virtuous Cycle" principle—that technology and media should sustainably serve the Dharma. We are a unique blend of practitioners, technologists, and storytellers committed to this vision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Buddhist Tech Specialists */}
              <Card className={`bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-1000 delay-500 transform ${teamVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground font-roboto">Buddhist Tech Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed font-roboto">
                    A dynamic team of experienced Buddhist tech specialists who are core contributors to the OpenPecha open-source and open data community.
                  </p>
                </CardContent>
              </Card>

              {/* Network of Scholars */}
              <Card className={`bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-1000 delay-700 transform ${teamVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground font-roboto">Network of Scholars</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed font-roboto">
                    Native Buddhist specialists who have graduated from various monasteries, nunneries, and colleges, and who have direct experience preparing data for AI.
                  </p>
                </CardContent>
              </Card>

              {/* Marketing & Influencer Coaches */}
              <Card className={`bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-1000 delay-900 transform ${teamVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground font-roboto">Marketing & Influencer Coaches</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed font-roboto">
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