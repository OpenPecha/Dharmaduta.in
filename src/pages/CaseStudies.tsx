import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Users, TrendingUp, Zap } from "lucide-react";

const CaseStudies = () => {
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
        className="pt-24 pb-16 bg-gradient-to-br from-emerald-600 to-teal-600 relative overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/b64271e6-c63c-4747-b600-13b6e388cbad.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-emerald-600/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-left">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-white mb-6 transition-all duration-700 ${heroVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              Case Studies
            </h1>
            <p className={`text-xl md:text-2xl text-white/90 leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
              See How We're Making an Impact
            </p>
          </div>
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

export default CaseStudies;