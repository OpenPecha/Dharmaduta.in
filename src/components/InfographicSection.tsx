
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Target, Cog, Layers, Database, Users, BookOpen } from "lucide-react";

const InfographicSection = () => {
  const steps = [
    {
      icon: Eye,
      title: "Strategic",
      description: "We are more than a data labelling service. We bring Industry-tested SMEs, provide training data strategy, and understand the data security and training requirements needed to deliver better client outcomes.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Target,
      title: "Reliable",
      description: "Our global workforce allows us to deliver high quality work 365 days a year, across 100's and 1000's of data labelers across multiple countries and time zones. With 24/7 coverage, we are agile in responding to changing project needs.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Cog,
      title: "Consistent",
      description: "We are lifetime project partners. Your assigned team will stay with you - no rotation. And as your team becomes experts over time, they train more labelers. That's how we achieve scale.",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600"
    },
    {
      icon: Layers,
      title: "Flexible",
      description: "We are platform agnostic. We don't force you to use our tools, we integrate with the technology stack that works best for your project.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  const corePillars = [
    {
      icon: Database,
      title: "Enterprise-grade AI Grounded in Authentic Tradition",
      description: "We are a tech company uniquely positioned to build trustworthy AI grounded in authentic sources. Our native programmers and developers work in direct collaboration with a vast network of specialists.",
      color: "teal"
    },
    {
      icon: Users,
      title: "Committed to a Collaborative & Open Future",
      description: "We believe the future of digital solutions must be built on a foundation of shared, transparent, and collaborative technology. We are major contributors to open projects.",
      color: "lime"
    },
    {
      icon: BookOpen,
      title: "Empowering Communities",
      description: "Think of us as your personal technology partner. We don't just deliver a product, we build your team's capacity. Our primary focus is to install lasting innovation capabilities.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      teal: {
        pillar: "bg-teal-500",
        roof: "border-teal-600",
        base: "bg-teal-600"
      },
      lime: {
        pillar: "bg-lime-500", 
        roof: "border-lime-600",
        base: "bg-lime-600"
      },
      orange: {
        pillar: "bg-orange-500",
        roof: "border-orange-600", 
        base: "bg-orange-600"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-24 bg-white font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* First Section - Why choose Dharmaduta Services */}
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Why choose Dharmaduta Services?</span>
            </h3>
          </div>
          
          <div className="relative mb-32">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400 transform -translate-y-1/2 hidden lg:block"></div>
            
            {/* Yellow Dots */}
            <div className="absolute top-1/2 left-0 w-4 h-4 bg-yellow-400 rounded-full transform -translate-y-1/2 hidden lg:block"></div>
            <div className="absolute top-1/2 right-0 w-4 h-4 bg-yellow-400 rounded-full transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {steps.map((step, index) => (
                <Card 
                  key={step.title} 
                  className={`border-2 border-gray-300 shadow-md transition-all duration-500 transform hover:scale-105 ${step.bgColor} text-center animate-[scale-in_0.6s_ease-out] rounded-3xl overflow-hidden`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <CardHeader className="pb-4 pt-8">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <p className="text-gray-600 leading-relaxed font-normal text-xs">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Second Section - Our Three Core Pillars */}
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Our Three Core Pillars</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on three core areas to serve the knowledge supply chain.
            </p>
          </div>

          {/* Three Pillars Architectural Design */}
          <div className="relative max-w-5xl mx-auto mb-16">
            {/* Main Roof Structure */}
            <div className="relative mb-8">
              {/* Large Triangle Roof */}
              <div className="w-full h-24 relative">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600"
                  style={{
                    clipPath: "polygon(10% 100%, 50% 0%, 90% 100%)"
                  }}
                ></div>
                {/* Roof Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4 className="text-white font-bold text-lg tracking-wide">DHARMADUTA FOUNDATION</h4>
                </div>
              </div>
              
              {/* Small Roof Caps for each pillar */}
              <div className="grid grid-cols-3 gap-8 mt-2">
                {corePillars.map((pillar, index) => {
                  const colors = getColorClasses(pillar.color);
                  return (
                    <div key={index} className="relative">
                      <div 
                        className={`h-4 ${colors.roof}`}
                        style={{
                          clipPath: "polygon(20% 100%, 50% 0%, 80% 100%)"
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-3 gap-8">
              {corePillars.map((pillar, index) => {
                const colors = getColorClasses(pillar.color);
                return (
                  <div key={index} className="relative">
                    {/* Pillar Content */}
                    <div className={`${colors.pillar} text-white p-8 min-h-[400px] flex flex-col justify-center text-center relative`}>
                      {/* Icon */}
                      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                        <pillar.icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-xl font-bold text-white mb-6 leading-tight">
                        {pillar.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-white/90 leading-relaxed text-sm">
                        {pillar.description}
                      </p>
                    </div>
                    
                    {/* Pillar Base */}
                    <div className={`${colors.base} h-6 w-full`}></div>
                  </div>
                );
              })}
            </div>

            {/* Foundation Base */}
            <div className="bg-red-600 h-12 w-full rounded-full flex items-center justify-center mt-4">
              <h5 className="text-white font-bold text-lg tracking-wide">KNOWLEDGE FOUNDATION</h5>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join us in building powerful AI and open data solutions that honor tradition while embracing the future. Let's work together to ensure the Dharma continues to flourish for generations to come.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-600/80 to-emerald-600/80 hover:from-teal-700/80 hover:to-emerald-700/80 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              Learn more about us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfographicSection;
