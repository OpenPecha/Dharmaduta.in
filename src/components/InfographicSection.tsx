
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Cog, TrendingUp, Trophy } from "lucide-react";

const InfographicSection = () => {
  const steps = [
    {
      icon: BarChart3,
      title: "Planning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.",
      bgColor: "bg-yellow-50",
      iconColor: "text-gray-700"
    },
    {
      icon: Cog,
      title: "Process",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.",
      bgColor: "bg-gray-200",
      iconColor: "text-gray-700"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.",
      bgColor: "bg-yellow-50",
      iconColor: "text-gray-700"
    },
    {
      icon: Trophy,
      title: "Success",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.",
      bgColor: "bg-gray-200",
      iconColor: "text-gray-700"
    }
  ];

  return (
    <section className="py-24 bg-white font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">INFOGRAPHIC</span>
            </h3>
            <p className="text-lg text-gray-500 uppercase tracking-wider">DESIGN TEMPLATE</p>
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
        </div>
      </div>
    </section>
  );
};

export default InfographicSection;
