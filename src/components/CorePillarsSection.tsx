
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Users, BookOpen } from "lucide-react";

const CorePillarsSection = () => {
  const pillars = [
    {
      icon: Database,
      title: "Enterprise-grade AI Grounded in Authentic Tradition",
      description: "We are a Buddhist tech company uniquely positioned to build trustworthy AI grounded in authentic sources. Our native Tibetan programmers and developers work in direct collaboration with a vast network of Buddhist specialists in monasteries and nunneries, ensuring every solution we create is built with deep respect and integrity."
    },
    {
      icon: Users,
      title: "Committed to a Collaborative & Open Future",
      description: "We believe the future of digital Buddhism must be built on a foundation of shared, transparent, and collaborative technology. We are major contributors to the OpenPecha project in order to prevent duplicated efforts and save valuable community resources. We aim at dramatically increasing the footprint of Buddhist data online, to ensure AI systems can learn from and share Buddhist wisdom accurately."
    },
    {
      icon: BookOpen,
      title: "Empowering Buddhist communities",
      description: "Think of us as your personal technology partner. We don't just deliver a product; we build your team's capacity. Our primary focus is to install lasting innovation capabilities, ensuring your Buddhist activities can thrive with independence and impact for years to come."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-foreground">
              Our Three Core Pillars
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We focus on three core areas to serve the Buddhist knowledge supply chain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <Card key={pillar.title} className="border border-border shadow-sm hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-6 pt-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-xl flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-4 tracking-tight text-foreground">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-muted-foreground leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join us in building powerful AI and open data solutions that honor tradition while embracing the future. 
              Let's work together to ensure the Dharma continues to flourish for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePillarsSection;
