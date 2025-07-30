import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Users, TrendingUp, Zap } from "lucide-react";

const Projects = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: studiesRef, isVisible: studiesVisible } = useScrollAnimation();

  const caseStudies = [
    {
      icon: Building2,
      title: "Custom Transcription Tool for Monastery",
      category: "Institution Focus",
      description: "We partnered with a monastery to create an AI-powered tool that accurately transcribes their archive of oral teachings. This project involved training a model on specialized terminology and has made decades of wisdom searchable and accessible to their global student base for the first time.",
      metrics: ["10,000+ hours transcribed", "95% accuracy rate", "50+ languages supported"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "Growing Buddhist Influencer Reach",
      category: "Influencer Focus",
      description: "Through our coaching program, we helped a Buddhist teacher refine their content strategy and double their audience in six months. We provided strategic guidance on platform use and helped them launch a new online course, creating a sustainable model for their teaching activities.",
      metrics: ["200% audience growth", "6-month timeline", "New revenue stream"],
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-roboto">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0">
          {/* Laptop mockup */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 scale-75 md:scale-100">
            <div className="relative">
              {/* Laptop screen */}
              <div className="bg-gray-800 rounded-lg p-2 shadow-2xl">
                <div className="bg-white rounded aspect-[16/10] w-80 md:w-96 overflow-hidden">
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full mx-auto mb-4"></div>
                      <div className="h-3 bg-gray-200 rounded mb-2 w-32 mx-auto"></div>
                      <div className="h-2 bg-gray-100 rounded w-24 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop base */}
              <div className="bg-gray-700 h-4 rounded-b-lg"></div>
            </div>
          </div>

          {/* Floating project cards */}
          <div className="absolute top-20 left-10 md:left-20 bg-white rounded-lg shadow-lg p-4 w-32 md:w-40 transform rotate-6 opacity-80">
            <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded mb-2"></div>
            <div className="h-2 bg-gray-200 rounded mb-1"></div>
            <div className="h-2 bg-gray-100 rounded w-3/4"></div>
          </div>

          <div className="absolute bottom-32 right-10 md:right-20 bg-white rounded-lg shadow-lg p-4 w-32 md:w-40 transform -rotate-12 opacity-80">
            <div className="h-20 bg-gradient-to-br from-green-100 to-green-200 rounded mb-2"></div>
            <div className="h-2 bg-gray-200 rounded mb-1"></div>
            <div className="h-2 bg-gray-100 rounded w-2/3"></div>
          </div>

          <div className="absolute top-1/3 right-4 md:right-12 bg-white rounded-lg shadow-lg p-3 w-28 md:w-36 transform rotate-3 opacity-70">
            <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded mb-2"></div>
            <div className="h-2 bg-gray-200 rounded mb-1"></div>
            <div className="h-2 bg-gray-100 rounded w-1/2"></div>
          </div>

          <div className="absolute bottom-20 left-4 md:left-16 bg-white rounded-lg shadow-lg p-3 w-28 md:w-36 transform -rotate-6 opacity-70">
            <div className="h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded mb-2"></div>
            <div className="h-2 bg-gray-200 rounded mb-1"></div>
            <div className="h-2 bg-gray-100 rounded w-3/5"></div>
          </div>
        </div>

        {/* Title */}
        <div className="relative z-10 text-center">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-roboto font-bold text-white mb-4 transition-all duration-700 ${heroVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            Projects
          </h1>
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        ref={studiesRef}
        className="py-16 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-12">
              {caseStudies.map((study, index) => {
                const IconComponent = study.icon;
                return (
                  <Card 
                    key={index}
                    className={`bg-white/70 backdrop-blur-sm border-0 shadow-xl transition-all duration-700 ${studiesVisible ? `animate-slide-up-delay-${index + 1}` : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`bg-gradient-to-br ${study.gradient} w-16 h-16 rounded-full flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {study.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-foreground">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {study.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                          Key Metrics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.metrics.map((metric, metricIndex) => (
                            <Badge 
                              key={metricIndex}
                              variant="outline" 
                              className="bg-white/50 border-primary/20 text-foreground"
                            >
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;