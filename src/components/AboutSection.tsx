
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-8 sm:py-20 lg:py-24 bg-background font-inter">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            About Us
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-8">
            Digital Emissaries for a Modern World
          </h3>

          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-left">
            <p>
              Dharmaduta Services was born from a shared vision: to place our diverse strengths at the service of Buddhist communities worldwide. Established in 2025 by a team of veteran specialists following the conclusion of a major joint initiative, we exist to bridge the gap between ancient wisdom and modern needs.
            </p>
            <p>
              We take our name from a specific historical legacy. King Ashoka’s Dutas (emissaries) carried a dual mission: not only sharing the wisdom of Buddha's Dharma, but actively listening to the populations to ensure this wisdom resulted in their genuine welfare.
            </p>
            <p>
              Today, we mirror this ancient mandate as digital emissaries. We use technology to connect, listen, and serve. Acting as a digital bridge, we ensure that the welfare and harmony promised by the Dharma remain accessible and impactful for contemporary communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
