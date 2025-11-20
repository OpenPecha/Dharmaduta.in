
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background font-inter">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight px-4">
              We are a Dedicated Team of Specialists
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-normal px-4">
              Dharmaduta Services was founded on our "Virtuous Cycle" principle—that technology and media 
              should sustainably serve the Dharma. We are a unique blend of practitioners, technologists, 
              and storytellers committed to this vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto px-4">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-primary/10 to-card">
              <CardHeader className="text-center pb-6 sm:pb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Buddhist Tech Engineers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-normal">
                A dedicated team of Buddhist tech engineers specializing in the development 
                of end-user products. Our expertise lies in creating intuitive technology for the Buddhist community and training advanced AI models on Buddhist languages and scriptures.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-primary/10 to-card">
              <CardHeader className="text-center pb-6 sm:pb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Network of Scholars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-normal">
                  Native Buddhist specialists who have graduated from various monasteries, nunneries, 
                  and colleges, with direct experience preparing data for end-user products as well as AI training purposes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
