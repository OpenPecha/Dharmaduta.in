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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ${heroVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              Our Services
            </h1>
            <p className={`text-xl md:text-2xl text-white/90 leading-relaxed transition-all duration-700 delay-200 ${heroVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
              Bridging ancient wisdom with modern technology through specialized services for institutions and individuals
            </p>
          </div>
        </div>
      </section>

      {/* Buddhist Tech Services Section */}
      <section 
        ref={institutionsRef}
        className="py-16 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-700 ${institutionsVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Onboard AI to Amplify Your Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Your institution excels at sharing Buddhist wisdom. To multiply that impact, we build a dedicated team around your vision, uniting your people with our specialists and open-source contributors. When you partner with us, you're not just building a tool for your institution; you are investing in the entire Buddhist open-source ecosystem, ensuring your project benefits the wider community.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  onClick={() => window.open('mailto:contact@dharmadutaservices.com', '_blank')}
                >
                  Partner With Us
                </Button>
              </div>
              
              <Card className={`bg-white/70 backdrop-blur-sm border-0 shadow-xl transition-all duration-700 delay-300 ${institutionsVisible ? 'animate-slide-up-delay-2' : 'opacity-0 translate-y-10'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Services Offered</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Open-Source Buddhist AI Projects</h3>
                      <p className="text-muted-foreground">We help your team create custom AI-powered translation tools, oral teaching transcription services, and OCR, editing, and study tools for your texts—all leveraging open-source software and the Buddhist tech community.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-500 to-violet-500 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Open Data Annotation & Sangha Sourcing</h3>
                      <p className="text-muted-foreground">We help your team transcribe, edit, and translate teachings through our unique "Sangha Sourcing" model. This approach provides meaningful, skilled work to our team of native Buddhist specialists.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Buddhist Influencer Coaching Section */}
      <section 
        ref={individualsRef}
        className="py-16 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className={`bg-white/70 backdrop-blur-sm border-0 shadow-xl order-2 md:order-1 transition-all duration-700 ${individualsVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Services Offered</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Influencer Training</h3>
                      <p className="text-muted-foreground">Learn how to create compelling content, engage your audience authentically, and navigate the digital landscape effectively.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-teal-500 to-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Project Incubation</h3>
                      <p className="text-muted-foreground">We provide the mentorship, strategic planning, and network access needed to take your Dharma project from a powerful idea to a successful launch.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className={`order-1 md:order-2 transition-all duration-700 delay-200 ${individualsVisible ? 'animate-slide-up-delay-1' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Grow Your Audience, Deepen Your Impact
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  You have a powerful message to share. We help you refine it, grow your following, and build a sustainable platform for your work. Our coaching combines modern marketing strategies with a deep understanding of the Dharma, training you to leverage specialized AI and Buddhist technology to amplify your voice.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  onClick={() => window.open('mailto:contact@dharmadutaservices.com', '_blank')}
                >
                  Start Growing
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