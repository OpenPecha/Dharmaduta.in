
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
    <section 
      className="py-24 font-inter relative"
      style={{
        backgroundImage: `url('/lovable-uploads/712a882a-63ac-490d-856d-098b109b133d.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Our Three Core Pillars
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              We focus on three core areas to serve the Buddhist knowledge supply chain.
            </p>
          </div>
          
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div key={pillar.title} className="relative">
                  <Card className="border-0 shadow-lg bg-white text-center h-full">
                    <CardHeader className="pb-6 pt-8">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center">
                        <pillar.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold mb-4 tracking-tight bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                        {pillar.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-8">
                      <p className="text-gray-700 leading-relaxed font-normal text-sm">
                        {pillar.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Separator lines between cards (visible on desktop) */}
                  {index < pillars.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-teal-400 transform -translate-y-1/2 z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
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
