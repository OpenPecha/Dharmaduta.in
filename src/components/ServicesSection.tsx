
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Database, TrendingUp, Code, Brain, Globe } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Development",
      description: "Custom AI solutions tailored for Buddhist organizations and communities.",
      gradient: "from-primary/10 to-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: Database,
      title: "Data Services",
      description: "Comprehensive data preparation and management for Buddhist texts and resources.",
      gradient: "from-primary/10 to-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to amplify your Buddhist message online.",
      gradient: "from-primary/10 to-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites and applications for Buddhist organizations.",
      gradient: "from-primary/10 to-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: Brain,
      title: "Consulting",
      description: "Expert guidance on integrating technology with Buddhist practices.",
      gradient: "from-primary/10 to-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: Globe,
      title: "Community Building",
      description: "Platform development for fostering online Buddhist communities.",
      gradient: "from-primary/10 to-primary/5",
      iconColor: "text-primary"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-secondary">
              Our Services
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
              Comprehensive solutions to help Buddhist organizations thrive in the digital landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-card via-card to-muted">
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-4 tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-normal">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
