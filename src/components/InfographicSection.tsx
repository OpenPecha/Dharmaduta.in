
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
      iconColor: "text-orange-500"
    },
    {
      icon: Share2,
      title: "Committed to a Collaborative & Open Future",
      description: "We believe the future of digital Buddhism must be built on a foundation of shared, transparent, and collaborative technology. We are major contributors to the OpenPecha project in order to prevent duplicated efforts and save valuable community resources. We aim at dramatically increasing the footprint of Buddhist data online, to ensure AI systems can learn from and share Buddhist wisdom accurately.",
      iconColor: "text-orange-500"
    },
    {
      icon: Users,
      title: "Empowering Buddhist communities",
      description: "Think of us as your personal technology partner. We don't just deliver a product; we build your team's capacity. Our primary focus is to install lasting innovation capabilities, ensuring your Buddhist activities can thrive with independence and impact for years to come.",
      iconColor: "text-orange-500"
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
      <div className="py-24 bg-gradient-to-b from-teal-500 to-teal-600">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-800">
                Our Three Core Pillars
              </h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We focus on three core areas to serve the Buddhist knowledge supply chain.
              </p>
            </div>
            
            {/* Temple Structure */}
            <div className="relative">
              {/* Top Foundation */}
              <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-6 mx-8 mb-2 shadow-lg" 
                   style={{
                     clipPath: 'polygon(2% 0%, 98% 0%, 96% 100%, 4% 100%)'
                   }}>
              </div>
              
              {/* Main Temple Platform */}
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-2xl mx-4 p-8 relative">
                {/* Three Pillars Container */}
                <div className="grid md:grid-cols-3 gap-8 relative">
                  {pillars.map((pillar, index) => (
                    <div key={pillar.title} className="relative">
                      {/* Pillar Column */}
                      <div className="bg-gradient-to-b from-teal-400 to-teal-500 w-4 h-64 mx-auto mb-6 shadow-lg"></div>
                      
                      {/* Pillar Content */}
                      <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                          <pillar.icon className={`w-8 h-8 ${pillar.iconColor}`} />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                          {pillar.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Foundation */}
              <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-8 mx-2 mt-2 shadow-lg rounded-b-lg">
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed">
                Join us in building powerful AI and open data solutions that honor tradition while embracing the future. Let's work together to ensure the Dharma continues to flourish for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfographicSection;
