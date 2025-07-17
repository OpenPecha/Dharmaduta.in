
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
      description: "We are a tech company uniquely positioned to build trustworthy AI grounded in authentic sources. Our native programmers and developers work in direct collaboration with a vast network of specialists in monasteries and nunneries, ensuring every solution we create is built with deep respect and integrity."
    },
    {
      icon: Users,
      title: "Committed to a Collaborative & Open Future",
      description: "We believe the future of digital solutions must be built on a foundation of shared, transparent, and collaborative technology. We are major contributors to open projects in order to prevent duplicated efforts and save valuable community resources. We aim at dramatically increasing the footprint of data online, to ensure AI systems can learn from and share wisdom accurately."
    },
    {
      icon: BookOpen,
      title: "Empowering Communities",
      description: "Think of us as your personal technology partner. We don't just deliver a product, we build your team's capacity. Our primary focus is to install lasting innovation capabilities, ensuring your activities can thrive with independence and impact for years to come."
    }
  ];

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

          {/* Pillar Design Section */}
          <div className="relative bg-gray-100 rounded-2xl p-8 mb-16 overflow-hidden">
            <div className="grid md:grid-cols-3 gap-0 relative">
              {corePillars.map((pillar, index) => (
                <div key={pillar.title} className="relative">
                  {/* Content Area */}
                  <div className="bg-white p-8 text-center min-h-[400px] flex flex-col justify-center">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <pillar.icon className="w-12 h-12 text-orange-500" />
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-xl font-bold text-orange-500 mb-6 leading-tight">
                      {pillar.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {pillar.description}
                    </p>
                  </div>
                  
                  {/* Vertical Pillar Separator */}
                  {index < corePillars.length - 1 && (
                    <div className="absolute top-0 right-0 w-8 h-full bg-teal-500 hidden md:block"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gray-300 transform -translate-x-8 -translate-y-8 rotate-45"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-gray-300 transform translate-x-8 -translate-y-8 rotate-45"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gray-300 transform -translate-x-8 translate-y-8 rotate-45"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-300 transform translate-x-8 translate-y-8 rotate-45"></div>
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
