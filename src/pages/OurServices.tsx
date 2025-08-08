import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, User, Check } from "lucide-react";

const OurServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We offer comprehensive solutions for Buddhist institutions and individuals looking to leverage technology for spreading the Dharma.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Buddhist Institutions */}
              <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-6 pt-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#bf9c2e] rounded-xl flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold mb-4 text-gray-900">
                    Buddhist Tech Services
                  </CardTitle>
                  <h3 className="text-xl text-[#bf9c2e] font-semibold mb-6">
                    Onboard AI to Amplify Your Mission
                  </h3>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Your institution excels at sharing Buddhist wisdom. To multiply that impact, we build a dedicated team around your vision, uniting your people with our specialists and open-source contributors.
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Services Offered</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-[#bf9c2e] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Open-Source Buddhist AI Projects</p>
                          <p className="text-gray-600 text-sm leading-relaxed mt-1">Custom AI-powered translation tools, oral teaching transcription services, and OCR, editing, and study tools for your texts—all leveraging open-source software.</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-[#bf9c2e] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Open Data Annotation & Sangha Sourcing</p>
                          <p className="text-gray-600 text-sm leading-relaxed mt-1">We help transcribe, edit, and translate teachings through our unique "Sangha Sourcing" model, providing meaningful work to native Buddhist specialists.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Button 
                    size="lg"
                    className="w-full bg-[#bf9c2e] hover:bg-[#a6872a] text-white font-medium px-8 py-4 text-lg"
                    onClick={() => window.location.href = '/contact-us'}
                  >
                    Partner With Us
                  </Button>
                </CardContent>
              </Card>

              {/* Buddhist Individuals */}
              <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-6 pt-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#bf9c2e] rounded-xl flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold mb-4 text-gray-900">
                    Buddhist Influencer Coaching
                  </CardTitle>
                  <h3 className="text-xl text-[#bf9c2e] font-semibold mb-6">
                    Grow Your Audience, Deepen Your Impact
                  </h3>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    You have a powerful message to share. We help you refine it, grow your following, and build a sustainable platform for your work. Our coaching combines modern marketing strategies with deep understanding of the Dharma.
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Services Offered</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-[#bf9c2e] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Influencer Training</p>
                          <p className="text-gray-600 text-sm leading-relaxed mt-1">Learn how to create compelling content, engage your audience authentically, and navigate the digital landscape effectively.</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-[#bf9c2e] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Project Incubation</p>
                          <p className="text-gray-600 text-sm leading-relaxed mt-1">We provide mentorship, strategic planning, and network access needed to take your Dharma project from idea to launch.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Button 
                    size="lg"
                    className="w-full bg-[#bf9c2e] hover:bg-[#a6872a] text-white font-medium px-8 py-4 text-lg"
                    onClick={() => window.location.href = '/contact-us'}
                  >
                    Join Our Community
                  </Button>
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

export default OurServices;