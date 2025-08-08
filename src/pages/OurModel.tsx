import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Database, Wrench } from "lucide-react";

const OurModel = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              Digital Dharma Platform That{' '}
              <span className="text-[#bf9c2e]">Solves</span>{' '}
              Your Problems
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive model integrates three core components to deliver complete Buddhist technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Three Components Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Pecha Apps */}
              <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#bf9c2e] rounded-xl flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 tracking-tight">
                    Pecha Apps
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8 text-center">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Digital Applications for Buddhist study, practice, and community engagement.
                  </p>
                </CardContent>
              </Card>

              {/* Pecha Data */}
              <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#bf9c2e] rounded-xl flex items-center justify-center">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 tracking-tight">
                    Pecha Data
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8 text-center">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Structured data management and open-source Buddhist text repositories.
                  </p>
                </CardContent>
              </Card>

              {/* Pecha Tool */}
              <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#bf9c2e] rounded-xl flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 tracking-tight">
                    Pecha Tool
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8 text-center">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Development tools and frameworks for building Buddhist technology solutions.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurModel;