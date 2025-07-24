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
        className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl text-left">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-white mb-6 transition-all duration-700 ${heroVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              Our Services
            </h1>
            <p className={`text-xl md:text-2xl text-white/90 leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
              Bridging ancient wisdom with modern technology through specialized services for institutions and individuals
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Service Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Buddhist Institutions Column */}
              <div 
                ref={institutionsRef}
                className={`transition-all duration-700 ${institutionsVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              >
                {/* Image Container with Overlay Text */}
                <div className="relative h-80 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Buddhist Technology Services" 
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-indigo-600/80"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className={`transition-all duration-700 delay-200 ${institutionsVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
                      <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-roboto font-bold text-white mb-3">
                        Onboard AI to Amplify Your Mission
                      </h3>
                      <p className="text-white/90 font-roboto leading-relaxed">
                        Your institution excels at sharing Buddhist wisdom. To multiply that impact, we build a dedicated team around your vision, uniting your people with our specialists and open-source contributors.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services Offered List */}
                <div className={`transition-all duration-700 delay-400 ${institutionsVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                  <h4 className="text-xl font-roboto font-semibold text-foreground mb-4">Services Offered</h4>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                      <div>
                        <p className="font-roboto font-medium text-foreground">Open-Source Buddhist AI Projects</p>
                        <p className="text-muted-foreground font-roboto text-sm">Custom AI-powered translation tools, oral teaching transcription services, and OCR editing tools for your texts.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-purple-500 to-violet-500 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                      <div>
                        <p className="font-roboto font-medium text-foreground">Open Data Annotation & Sangha Sourcing</p>
                        <p className="text-muted-foreground font-roboto text-sm">Transcribe, edit, and translate teachings through our unique "Sangha Sourcing" model with native Buddhist specialists.</p>
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

              {/* Buddhist Influencers Column */}
              <div 
                ref={individualsRef}
                className={`transition-all duration-700 delay-200 ${individualsVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}
              >
                {/* Image Container with Overlay Text */}
                <div className="relative h-80 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-purple-600 to-pink-600 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Buddhist Influencer Coaching" 
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className={`transition-all duration-700 delay-400 ${individualsVisible ? 'animate-slide-up-delay-2' : 'opacity-0 translate-y-10'}`}>
                      <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-roboto font-bold text-white mb-3">
                        Grow Your Audience, Deepen Your Impact
                      </h3>
                      <p className="text-white/90 font-roboto leading-relaxed">
                        You have a powerful message to share. We help you refine it, grow your following, and build a sustainable platform for your work with modern marketing strategies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services Offered List */}
                <div className={`transition-all duration-700 delay-600 ${individualsVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                  <h4 className="text-xl font-roboto font-semibold text-foreground mb-4">Services Offered</h4>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                      <div>
                        <p className="font-roboto font-medium text-foreground">Influencer Training</p>
                        <p className="text-muted-foreground font-roboto text-sm">Learn how to create compelling content, engage your audience authentically, and navigate the digital landscape effectively.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-teal-500 to-cyan-500 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                      <div>
                        <p className="font-roboto font-medium text-foreground">Project Incubation</p>
                        <p className="text-muted-foreground font-roboto text-sm">We provide the mentorship, strategic planning, and network access needed to take your Dharma project from idea to launch.</p>
                      </div>
                    </li>
                  </ul>
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-roboto"
                    onClick={() => window.open('mailto:contact@dharmadutaservices.com', '_blank')}
                  >
                    Start Growing
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