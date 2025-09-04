
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star, Users, Zap } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Buddhist Temple Digital Transformation",
      description: "Helped a traditional temple create an online presence that increased community engagement by 300% and donations by 150%.",
      metrics: "300% increase in engagement",
      icon: Users,
      gradient: "from-primary/10 to-primary/5"
    },
    {
      title: "AI-Powered Dharma Teaching Platform",
      description: "Developed an intelligent platform that provides personalized Buddhist teachings, serving over 10,000 practitioners worldwide.",
      metrics: "10,000+ active users",
      icon: Zap,
      gradient: "from-primary/10 to-primary/5"
    },
    {
      title: "Meditation App Success Story",
      description: "Built a comprehensive meditation app that achieved 4.8 stars on app stores and generated significant revenue for the client.",
      metrics: "4.8★ app store rating",
      icon: Star,
      gradient: "from-primary/10 to-primary/5"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-background font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-secondary">
              Success Stories
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
              Real results from Buddhist organizations we've helped transform their digital presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-card to-muted">
                <CardHeader className="pb-6">
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${study.gradient} rounded-2xl flex items-center justify-center`}>
                    <study.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-4 tracking-tight">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-normal">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-secondary bg-muted px-3 py-1 rounded-full">
                      {study.metrics}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
