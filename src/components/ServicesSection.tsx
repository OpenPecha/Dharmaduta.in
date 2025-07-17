
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Database, TrendingUp, Code, Brain, Globe } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Development",
      description: "Custom AI solutions tailored for Buddhist organizations and communities.",
      gradient: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Database,
      title: "Data Services",
      description: "Comprehensive data preparation and management for Buddhist texts and resources.",
      gradient: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to amplify your Buddhist message online.",
      gradient: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites and applications for Buddhist organizations.",
      gradient: "from-orange-100 to-red-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Brain,
      title: "Consulting",
      description: "Expert guidance on integrating technology with Buddhist practices.",
      gradient: "from-teal-100 to-cyan-100",
      iconColor: "text-teal-600"
    },
    {
      icon: Globe,
      title: "Community Building",
      description: "Platform development for fostering online Buddhist communities.",
      gradient: "from-violet-100 to-purple-100",
      iconColor: "text-violet-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight animate-slide-up">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Our Services</span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-normal animate-slide-up-delayed">
              Comprehensive solutions to help Buddhist organizations thrive in the digital landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white via-white to-gray-50 animate-slide-up`} 
                style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed font-normal">
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
