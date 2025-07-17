
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Heart } from "lucide-react";

const CorePillars = () => {
  const pillars = [
    {
      icon: Building2,
      title: "Enterprise-grade AI Grounded in Authentic Tradition",
      description: "We are a Buddhist tech company uniquely positioned to build trustworthy AI grounded in authentic sources. Our native Tibetan programmers and developers work in direct collaboration with a vast network of Buddhist specialists in monasteries and nunneries, ensuring every solution we create is built with deep respect and integrity.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: Users,
      title: "Committed to a Collaborative & Open Future",
      description: "We believe the future of digital Buddhism must be built on a foundation of shared, transparent, and collaborative technology. We are major contributors to the OpenPecha project in order to prevent duplicated efforts and save valuable community resources. We aim at dramatically increasing the footprint of Buddhist data online, to ensure AI systems can learn from and share Buddhist wisdom accurately.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: Heart,
      title: "Empowering Buddhist communities",
      description: "Think of us as your personal technology partner. We don't just deliver a product; we build your team's capacity. Our primary focus is to install lasting innovation capabilities, ensuring your Buddhist activities can thrive with independence and impact for years to come.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Three Core Pillars
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building powerful AI and open data solutions that honor tradition while embracing the future.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <Card 
                key={index}
                className={`${pillar.bgColor} ${pillar.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-2xl overflow-hidden`}
              >
                <CardHeader className="pb-4 pt-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white shadow-md">
                    <pillar.icon className={`w-8 h-8 ${pillar.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Join Us in Building the Future
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's work together to ensure the Dharma continues to flourish for generations to come.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorePillars;
