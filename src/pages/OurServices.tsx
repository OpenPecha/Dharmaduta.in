import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Users, Code, BookOpen, TrendingUp, Lightbulb } from "lucide-react";

const OurServices = () => {
  const { ref: institutionsRef, isVisible: institutionsVisible } = useScrollAnimation();
  const { ref: individualsRef, isVisible: individualsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background font-roboto">
      <Header />
      
      {/* Two-Column Service Section */}
      <section className="min-h-screen pt-20">
        <div className="grid lg:grid-cols-2 min-h-screen">
          
          {/* Buddhist Institutions Column - Left */}
          <div 
            ref={institutionsRef}
            className="relative bg-gradient-to-br from-slate-800 to-indigo-900 flex flex-col"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('/lovable-uploads/5154e367-c3d2-424d-909c-d6afcda98571.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-center h-full">
              <div className={`transition-all duration-700 ${institutionsVisible ? 'animate-fade-in animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl lg:text-4xl font-roboto font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
                  FOR BUDDHIST INSTITUTIONS – BUDDHIST TECH SERVICES
                </h2>
                <h3 className="text-2xl lg:text-3xl font-roboto font-bold text-white mb-6">
                  Onboard AI to Amplify Your Mission
                </h3>
                <p className="text-lg text-white/95 font-roboto leading-relaxed mb-8">
                  Your institution excels at sharing Buddhist wisdom. To multiply that impact, we build a dedicated team around your vision, uniting your people with our specialists and open-source contributors. When you partner with us, you're not just building a tool for your institution; you are investing in the entire Buddhist open-source ecosystem, ensuring your project benefits the wider community.
                </p>

                {/* Services Offered */}
                <div className="mb-8">
                  <h4 className="text-xl font-roboto font-semibold text-white mb-4">Services Offered</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="bg-white w-2 h-2 rounded-full mt-2 shrink-0"></div>
                      <div>
                        <p className="font-roboto font-medium text-white">Open-Source Buddhist AI Projects</p>
                        <p className="text-white/90 font-roboto text-sm leading-relaxed">We help your team create custom AI-powered translation tools, oral teaching transcription services, and OCR, editing, and study tools for your texts—all leveraging open-source software and the Buddhist tech community.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-white w-2 h-2 rounded-full mt-2 shrink-0"></div>
                      <div>
                        <p className="font-roboto font-medium text-white">Open Data Annotation & Sangha Sourcing</p>
                        <p className="text-white/90 font-roboto text-sm leading-relaxed">We help your team transcribe, edit, and translate teachings through our unique "Sangha Sourcing" model. This approach provides meaningful, skilled work to our team of native Buddhist specialists, turning your data project into a direct offering of support for dedicated practitioners.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border-0"
                  onClick={() => window.open('mailto:contact@dharmadutaservices.com', '_blank')}
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>

          {/* Buddhist Influencers Column - Right */}
          <div 
            ref={individualsRef}
            className="relative bg-gradient-to-br from-slate-800 to-indigo-900 flex flex-col"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('/lovable-uploads/0954a425-c5d2-4353-987f-ad456378ead2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-center h-full">
              <div className={`transition-all duration-700 delay-200 ${individualsVisible ? 'animate-fade-in animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl lg:text-4xl font-roboto font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
                  FOR INDIVIDUALS – BUDDHIST INFLUENCER COACHING
                </h2>
                <h3 className="text-2xl lg:text-3xl font-roboto font-bold text-white mb-6">
                  Grow Your Audience, Deepen Your Impact
                </h3>
                <p className="text-lg text-white/95 font-roboto leading-relaxed mb-8">
                  You have a powerful message to share. We help you refine it, grow your following, and build a sustainable platform for your work. Our coaching combines modern marketing strategies with a deep understanding of the Dharma, training you to leverage specialized AI and Buddhist technology to amplify your voice.
                </p>

                {/* Services Offered */}
                <div className="mb-8">
                  <h4 className="text-xl font-roboto font-semibold text-white mb-4">Services Offered</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="bg-white w-2 h-2 rounded-full mt-2 shrink-0"></div>
                      <div>
                        <p className="font-roboto font-medium text-white">Influencer Training</p>
                        <p className="text-white/90 font-roboto text-sm leading-relaxed">Learn how to create compelling content, engage your audience authentically, and navigate the digital landscape effectively.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-white w-2 h-2 rounded-full mt-2 shrink-0"></div>
                      <div>
                        <p className="font-roboto font-medium text-white">Project Incubation</p>
                        <p className="text-white/90 font-roboto text-sm leading-relaxed">We provide the mentorship, strategic planning, and network access needed to take your Dharma project from idea to launch.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-roboto font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border-0"
                  onClick={() => window.open('mailto:contact@dharmadutaservices.com', '_blank')}
                >
                  Join Our Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurServices;