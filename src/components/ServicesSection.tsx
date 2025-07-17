
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Settings } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Buddhist Institutions */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-50 to-white">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                  <Settings className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  For Buddhist Institutions
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 font-medium">
                  Buddhist Tech Services
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  Onboard AI to Amplify Your Mission
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Your institution excels at sharing Buddhist wisdom. To multiply that impact, we build a dedicated team around your vision, uniting your people with our specialists and open-source contributors. When you partner with us, you're not just building a tool for your institution; you are investing in the entire Buddhist open-source ecosystem.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Services Offered:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Open-Source Buddhist AI Projects:</strong> Custom AI-powered translation tools, oral teaching transcription services, and OCR, editing, and study tools for your texts.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Open Data Annotation & Sangha Sourcing:</strong> Transcribe, edit, and translate teachings through our unique "Sangha Sourcing" model, providing meaningful work to dedicated practitioners.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3">
                    Partner With Us
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Individuals */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  For Individuals
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 font-medium">
                  Buddhist Influencer Coaching
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  Grow Your Audience, Deepen Your Impact
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  You have a powerful message to share. We help you refine it, grow your following, and build a sustainable platform for your work. Our coaching combines modern marketing strategies with a deep understanding of the Dharma, training you to leverage specialized AI and Buddhist technology.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Services Offered:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Influencer Training:</strong> Learn how to create compelling content, engage your audience authentically, and navigate the digital landscape effectively.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Project Incubation:</strong> We provide mentorship, strategic planning, and network access needed to take your Dharma project from idea to successful launch.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3">
                    Start Growing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
