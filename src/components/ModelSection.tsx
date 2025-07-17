
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Infinity, Users } from "lucide-react";

const ModelSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Model: A Bridge Between Commerce and Community
          </h3>
          
          <h4 className="text-2xl font-semibold text-gray-800 mb-8">How We Work</h4>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            We operate at the intersection of a non-profit mission and a sustainable business. 
            Inspired by leaders in open source and social enterprise, our model is built on two core principles:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                  <Infinity className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  The Virtuous Cycle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Our commercial projects directly fund and contribute to the open-source Buddhist technology that benefits everyone.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Sangha Sourcing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Our data services create opportunities for dedicated Buddhist practitioners to earn a livelihood through their specialized knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              This ensures that every project we undertake not only serves our client's mission 
              but also strengthens the entire Dharma community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
