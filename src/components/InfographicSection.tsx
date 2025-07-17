
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Target, Cog, Layers, Database, Share2, Users } from "lucide-react";

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

  const pillars = [
    {
      icon: Database,
      title: "Enterprise-grade AI Grounded in Authentic Tradition",
      description: "We are a Buddhist tech company uniquely positioned to build trustworthy AI grounded in authentic sources. Our native Tibetan programmers and developers work in direct collaboration with a vast network of Buddhist specialists in monasteries and nunneries, ensuring every solution we create is built with deep respect and integrity.",
      gradient: "from-indigo-600 to-purple-600",
      height: "h-80"
    },
    {
      icon: Share2,
      title: "Committed to a Collaborative & Open Future",
      description: "We believe the future of digital Buddhism must be built on a foundation of shared, transparent, and collaborative technology. We are major contributors to the OpenPecha project in order to prevent duplicated efforts and save valuable community resources. We aim at dramatically increasing the footprint of Buddhist data online, to ensure AI systems can learn from and share Buddhist wisdom accurately.",
      gradient: "from-teal-500 to-blue-600",
      height: "h-96"
    },
    {
      icon: Users,
      title: "Empowering Buddhist communities",
      description: "Think of us as your personal technology partner. We don't just deliver a product; we build your team's capacity. Our primary focus is to install lasting innovation capabilities, ensuring your Buddhist activities can thrive with independence and impact for years to come.",
      gradient: "from-orange-500 to-red-600",
      height: "h-72"
    }
  ];

  return (
    <section className="py-24 bg-white font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Why choose Dharmaduta Services?</span>
            </h3>
          </div>
          
          <div className="relative">
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

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-700/80 hover:to-purple-700/80 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              Learn more about us
            </Button>
          </div>
        </div>
      </div>

      {/* Three Core Pillars Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Our Three Core Pillars</span>
              </h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We focus on three core areas to serve the Buddhist knowledge supply chain.
              </p>
            </div>
            
            {/* Modern Pillar Graph */}
            <div className="relative max-w-5xl mx-auto">
              {/* Base Platform */}
              <div className="bg-gradient-to-r from-gray-300 to-gray-400 h-8 w-full rounded-lg shadow-lg mb-8"></div>
              
              {/* Pillars Container */}
              <div className="grid md:grid-cols-3 gap-8 items-end">
                {pillars.map((pillar, index) => (
                  <div key={pillar.title} className="relative group">
                    {/* Pillar */}
                    <div className={`bg-gradient-to-t ${pillar.gradient} ${pillar.height} rounded-t-lg shadow-xl relative overflow-hidden transition-all duration-500 hover:scale-105`}>
                      {/* Pillar Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                        {/* Icon at top */}
                        <div className="flex justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <pillar.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Title */}
                        <div className="text-center">
                          <h4 className="text-lg font-bold mb-4 leading-tight">
                            {pillar.title}
                          </h4>
                        </div>
                        
                        {/* Description at bottom */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-sm leading-relaxed text-center">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Pillar Lines/Texture */}
                      <div className="absolute inset-x-0 top-0 bottom-0 opacity-10">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="h-full border-l border-white ml-4 first:ml-0" style={{ marginLeft: `${i * 12.5}%` }}></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Pillar Base */}
                    <div className={`bg-gradient-to-t ${pillar.gradient} h-4 rounded-b-lg shadow-lg opacity-80`}></div>
                  </div>
                ))}
              </div>
              
              {/* Top Connecting Element */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 w-24 rounded-full shadow-lg"></div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed mb-8">
                Join us in building powerful AI and open data solutions that honor tradition while embracing the future. Let's work together to ensure the Dharma continues to flourish for generations to come.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-700/80 hover:to-purple-700/80 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg"
              >
                Get Started with Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfographicSection;
