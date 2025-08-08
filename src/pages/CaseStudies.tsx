import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Zap } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: Building2,
      title: "Custom Transcription Tool for Monastery",
      category: "Institution Focus",
      description: "We partnered with a monastery to create an AI-powered tool that accurately transcribes their archive of oral teachings. This project involved training a model on specialized terminology and has made decades of wisdom searchable and accessible to their global student base for the first time.",
      metrics: ["10,000+ hours transcribed", "95% accuracy rate", "50+ languages supported"]
    },
    {
      icon: TrendingUp,
      title: "Growing Buddhist Influencer Reach",
      category: "Influencer Focus",
      description: "Through our coaching program, we helped a Buddhist teacher refine their content strategy and double their audience in six months. We provided strategic guidance on platform use and helped them launch a new online course, creating a sustainable model for their teaching activities.",
      metrics: ["200% audience growth", "6-month timeline", "New revenue stream"]
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
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              See how we're making an impact by partnering with Buddhist institutions and individuals to leverage technology for spreading the Dharma.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {caseStudies.map((study, index) => {
                const IconComponent = study.icon;
                return (
                  <Card 
                    key={index}
                    className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 bg-[#bf9c2e] rounded-xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="secondary" className="bg-[#bf9c2e]/10 text-[#bf9c2e] border-[#bf9c2e]/20">
                          {study.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-gray-900">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        {study.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-[#bf9c2e]" />
                          Key Metrics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.metrics.map((metric, metricIndex) => (
                            <Badge 
                              key={metricIndex}
                              variant="outline" 
                              className="bg-white border-gray-200 text-gray-700"
                            >
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;