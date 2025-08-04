
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Target, Cog, Layers } from "lucide-react";

const InfographicSection = () => {
  const steps = [
    {
      icon: Eye,
      title: "Strategic",
      description: "We are more than a data labelling service. We bring Industry-tested SMEs, provide training data strategy, and understand the data security and training requirements needed to deliver better client outcomes."
    },
    {
      icon: Target,
      title: "Reliable",
      description: "Our global workforce allows us to deliver high quality work 365 days a year, across 100's and 1000's of data labelers across multiple countries and time zones. With 24/7 coverage, we are agile in responding to changing project needs."
    },
    {
      icon: Cog,
      title: "Consistent",
      description: "We are lifetime project partners. Your assigned team will stay with you - no rotation. And as your team becomes experts over time, they train more labelers. That's how we achieve scale."
    },
    {
      icon: Layers,
      title: "Flexible",
      description: "We are platform agnostic. We don't force you to use our tools, we integrate with the technology stack that works best for your project."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              Why choose Dharmaduta Services?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card 
                key={step.title} 
                className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white text-center h-full"
              >
                <CardHeader className="pb-4 pt-8">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#bf9c2e] rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-[#bf9c2e] hover:bg-[#a6872a] text-white px-10 py-4 text-lg font-medium"
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
