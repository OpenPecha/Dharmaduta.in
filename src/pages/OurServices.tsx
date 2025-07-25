import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Users, Code, BookOpen, TrendingUp, Lightbulb } from "lucide-react";

const OurServices = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: institutionsRef, isVisible: institutionsVisible } = useScrollAnimation();
  const { ref: individualsRef, isVisible: individualsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background font-roboto">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-24 pb-16 relative bg-gradient-to-br from-primary to-primary/80"
        style={{
          backgroundImage: `url('/lovable-uploads/27a8e5b5-00a9-4f6d-ac8a-3b5f44c55b71.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-left">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-roboto font-bold mb-6 transition-all duration-700 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent ${heroVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              Our Services
            </h1>
            <p className={`text-xl md:text-2xl text-white/90 leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
              Bridging ancient wisdom with modern technology through specialized services for institutions and individuals
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Service Section */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: `url('/lovable-uploads/27a8e5b5-00a9-4f6d-ac8a-3b5f44c55b71.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Buddhist Institutions Column - Left */}
              <div 
                ref={institutionsRef}
                className={`transition-all duration-700 ${institutionsVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              >
                {/* Image Container with Overlay Text */}
                <div className="relative h-80 rounded-xl overflow-hidden mb-6 shadow-xl">
                  <img 
                    src="/lovable-uploads/5154e367-c3d2-424d-909c-d6afcda98571.png" 
                    alt="Buddhist Technology Services" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className={`transition-all duration-700 delay-200 ${institutionsVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
                      <h1 className="text-2xl font-roboto font-bold text-white mb-3">
                        For Buddhist Institutions – Buddhist Tech Services
                      </h1>
                      <h3 className="text-xl font-roboto font-bold text-white mb-3">
                        Onboard AI to Amplify Your Mission
                      </h3>
                      <p className="text-white/90 font-roboto leading-relaxed">
                        Your institution excels at sharing Buddhist wisdom. To multiply that impact, we build a dedicated team around your vision, uniting your people with our specialists and open-source contributors. When you partner with us, you're not just building a tool for your institution; you are investing in the entire Buddhist open-source ecosystem, ensuring your project benefits the wider community.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services Offered List */}
                <div className={`bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 transition-all duration-700 delay-400 ${institutionsVisible ? 'animate-slide-down' : 'opacity-0 translate-y-10'}`}>
                  <h4 className="text-xl font-roboto font-semibold text-white mb-4">Services Offered</h4>
                  <ul className="space-y-4 mb-6">
                     <li className="flex items-start space-x-3">
                       <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                       <div>
                         <p className="font-roboto font-medium text-white">Open-Source Buddhist AI Projects</p>
                         <p className="text-white/80 font-roboto text-sm">We help your team create custom AI-powered translation tools, oral teaching transcription services, and OCR, editing, and study tools for your texts—all leveraging open-source software and the Buddhist tech community.</p>
                       </div>
                     </li>
                     <li className="flex items-start space-x-3">
                       <div className="bg-gradient-to-br from-purple-500 to-violet-500 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                       <div>
                         <p className="font-roboto font-medium text-white">Open Data Annotation & Sangha Sourcing</p>
                         <p className="text-white/80 font-roboto text-sm">We help your team transcribe, edit, and translate teachings through our unique "Sangha Sourcing" model. This approach provides meaningful, skilled work to our team of native Buddhist specialists, turning your data project into a direct offering of support for dedicated practitioners.</p>
                       </div>
                     </li>
                  </ul>
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-roboto"
                    onClick={() => window.open('mailto:contact@dharmadutaservices.com', '_blank')}
                  >
                    Partner With Us
                  </Button>
                </div>
              </div>

              {/* Buddhist Influencers Column - Right */}
              <div 
                ref={individualsRef}
                className={`transition-all duration-700 delay-200 ${individualsVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}
              >
                {/* Image Container with Overlay Text */}
                <div className="relative h-80 rounded-xl overflow-hidden mb-6 shadow-xl">
                  <img 
                    src="/lovable-uploads/0954a425-c5d2-4353-987f-ad456378ead2.png" 
                    alt="Buddhist Influencer Coaching" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className={`transition-all duration-700 delay-400 ${individualsVisible ? 'animate-slide-up-delay-2' : 'opacity-0 translate-y-10'}`}>
                      <h1 className="text-2xl font-roboto font-bold text-white mb-3">
                        For Individuals – Buddhist Influencer Coaching
                      </h1>
                      <h3 className="text-xl font-roboto font-bold text-white mb-3">
                        Grow Your Audience, Deepen Your Impact
                      </h3>
                      <p className="text-white/90 font-roboto leading-relaxed">
                        You have a powerful message to share. We help you refine it, grow your following, and build a sustainable platform for your work. Our coaching combines modern marketing strategies with a deep understanding of the Dharma, training you to leverage specialized AI and Buddhist technology to amplify your voice.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services Offered List */}
                <div className={`bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 transition-all duration-700 delay-600 ${individualsVisible ? 'animate-slide-down' : 'opacity-0 translate-y-10'}`}>
                  <h4 className="text-xl font-roboto font-semibold text-white mb-4">Services Offered</h4>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                      <div>
                        <p className="font-roboto font-medium text-white">Influencer Training</p>
                        <p className="text-white/80 font-roboto text-sm">Learn how to create compelling content, engage your audience authentically, and navigate the digital landscape effectively.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-teal-500 to-cyan-500 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                      <div>
                        <p className="font-roboto font-medium text-white">Project Incubation</p>
                        <p className="text-white/80 font-roboto text-sm">We provide the mentorship, strategic planning, and network access needed to take your Dharma project from idea to launch.</p>
                      </div>
                    </li>
                  </ul>
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-roboto"
                    onClick={() => window.open('mailto:contact@dharmadutaservices.com', '_blank')}
                  >
                    Join Our Community
                  </Button>
                </div>
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