
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Infinity, Users } from "lucide-react";

const ModelSection = () => {
  return (
    <section id="model" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight animate-slide-up">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Our Model: A Bridge Between Commerce and Community</span>
          </h3>
          
          <h4 className="text-2xl font-semibold text-gray-800 mb-10 tracking-wide animate-slide-up-delayed">How We Work</h4>
          
          <p className="text-xl text-gray-700 mb-16 leading-relaxed font-normal max-w-4xl mx-auto animate-slide-up-delayed">
            We operate at the intersection of a non-profit mission and a sustainable business. 
            Inspired by leaders in open source and social enterprise, our model is built on two core principles:
          </p>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <Infinity className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 tracking-tight">
                  The Virtuous Cycle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg font-normal">
                  Our commercial projects directly fund and contribute to the open-source Buddhist technology that benefits everyone.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 tracking-tight">
                  Sangha Sourcing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg font-normal">
                  Our data services create opportunities for dedicated Buddhist practitioners to earn a livelihood through their specialized knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-2xl p-10 shadow-lg animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl text-gray-700 leading-relaxed font-normal">
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
