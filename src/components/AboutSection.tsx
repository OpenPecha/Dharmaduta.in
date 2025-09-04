
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, GraduationCap, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-secondary">
              Your Dedicated Team of Specialists
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-normal">
              Dharmaduta Services was founded on our "Virtuous Cycle" principle—that technology and media 
              should sustainably serve the Dharma. We are a unique blend of practitioners, technologists, 
              and storytellers committed to this vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-primary/10 to-card">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground tracking-tight">
                  Buddhist Tech Specialists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg font-normal">
                  A dynamic team of experienced Buddhist tech specialists who are core contributors 
                  to the OpenPecha open-source and open data community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-primary/10 to-card">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground tracking-tight">
                  Network of Scholars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg font-normal">
                  Native Buddhist specialists who have graduated from various monasteries, nunneries, 
                  and colleges, with direct experience preparing data for AI.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-primary/10 to-card">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground tracking-tight">
                  Marketing & Influencer Coaches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg font-normal">
                  A blend of project managers and influencers from the Buddhist world, working with 
                  professional market coaches to bring you the best of both worlds.
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
