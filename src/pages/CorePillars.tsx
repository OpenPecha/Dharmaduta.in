
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CorePillars = () => {
  const pillars = [
    {
      icon: Building2,
      title: "Enterprise-grade AI Grounded in Authentic Tradition",
      description: "We are a Buddhist tech company uniquely positioned to build trustworthy AI grounded in authentic sources. Our native Tibetan programmers and developers work in direct collaboration with a vast network of Buddhist specialists in monasteries and nunneries, ensuring every solution we create is built with deep respect and integrity."
    },
    {
      icon: Users,
      title: "Committed to a Collaborative & Open Future",
      description: "We believe the future of digital Buddhism must be built on a foundation of shared, transparent, and collaborative technology. We are major contributors to the OpenPecha project in order to prevent duplicated efforts and save valuable community resources. We aim at dramatically increasing the footprint of Buddhist data online, to ensure AI systems can learn from and share Buddhist wisdom accurately."
    },
    {
      icon: Heart,
      title: "Empowering Buddhist communities",
      description: "Think of us as your personal technology partner. We don't just deliver a product; we build your team's capacity. Our primary focus is to install lasting innovation capabilities, ensuring your Buddhist activities can thrive with independence and impact for years to come."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              Our Three Core Pillars
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Building powerful AI and open data solutions that honor tradition while embracing the future.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {pillars.map((pillar, index) => (
                <Card 
                  key={index}
                  className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-6 pt-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-[#bf9c2e] rounded-xl flex items-center justify-center">
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <p className="text-gray-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white rounded-xl shadow-sm border border-gray-200 p-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Join Us in Building the Future
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's work together to ensure the Dharma continues to flourish for generations to come.
              </p>
              <Button 
                size="lg" 
                className="bg-[#bf9c2e] hover:bg-[#a6872a] text-white px-10 py-4 text-lg font-medium"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorePillars;
