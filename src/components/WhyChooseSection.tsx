
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Target, Cog, Layers } from "lucide-react";
import AnimatedDotsBackground from "@/components/AnimatedDotsBackground";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Eye,
      title: "Strategic",
      description: "We are more than a data labelling service. We bring Industry-tested SMEs, provide training data strategy, and understand the data security and training requirements needed to deliver better client outcomes.",
      gradient: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Target,
      title: "Reliable",
      description: "Our global workforce allows us to deliver high quality work 365 days a year, across 100's and 1000's of data labelers across multiple countries and time zones. With 24/7 coverage, we are agile in responding to changing project needs.",
      gradient: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Cog,
      title: "Consistent",
      description: "We are lifetime project partners. Your assigned team will stay with you - no rotation. And as your team becomes experts over time, they train more labelers. That's how we achieve scale.",
      gradient: "from-teal-100 to-cyan-100",
      iconColor: "text-teal-600"
    },
    {
      icon: Layers,
      title: "Flexible",
      description: "We are platform agnostic. We don't force you to use our tools, we integrate with the technology stack that works best for your project.",
      gradient: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-gradient-to-br from-slate-50 to-white font-inter relative overflow-hidden">
      <AnimatedDotsBackground />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Why choose DDD?</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white via-white to-gray-50 text-center">
                <CardHeader className="pb-6">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed font-normal text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-700/80 hover:to-purple-700/80 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              LEARN MORE ABOUT DDD
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
