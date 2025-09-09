import { Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    "name": "KALZANG FURBU",
    "role": "Co Founder",
    "image": "/team/furbu.png",
    "email": "kalsang@dharmaduta.in"
  },
  {
    "name": "YONTEN WANGCHUK",
    "role": "Co Founder",
    "image": "/team/wangchuk.png",
    "email": "yonten@dharmaduta.in"
  },
  {
    "name": "NGAWANG THRINLEY",
    "role": "CEO",
    "image": "/team/thrinley.png",
    "email": "nt@dharmaduta.in"
  },
  {
    "name": "GANGA GYATSO",
    "role": "Software Developer I",
    "image": "/team/gyatso.png",
    "email": "ganga@dharmaduta.in"
  },
  {
    "name": "TENZIN LUNGSANG",
    "role": "Software Developer I",
    "image": "/team/lungsang.png",
    "email": "lungsang@dharmaduta.in"
  },
  {
    "name": "LOBZANG SANDUP",
    "role": "Software Developer I",
    "image": "/team/sandup.png",
    "email": "sandup@dharmaduta.in"
  },
  {
    "name": "TENZIN NORYANG",
    "role": "Senior Operations Coordinator",
    "image": "/team/noryang.png",
    "email": "noryang@dharmaduta.in"
  },
  {
    "name": "TENZIN GAYCHE",
    "role": "Senior Software Developer I",
    "image": "/team/gayche.png",
    "email": "gayche@dharmaduta.in"
  },
  {
    "name": "TASHI TSERING",
    "role": "Senior Software Developer II",
    "image": "/team/tsering.png",
    "email": "tashitsering@dharmaduta.in"
  },
  {
    "name": "TENZIN DELEK",
    "role": "Software Developer II",
    "image": "/team/delek.png",
    "email": "tenzdelek@dharmaduta.in"
  },
  {
    "name": "TENZIN TAMDIN",
    "role": "Software Developer II",
    "image": "/team/tamdin.jpg",
    "email": "tamdin@dharmaduta.in"
  },
  {
    "name": "MENLA TSOMO",
    "role": "Project Coordinator",
    "image": "/team/tsomo.png",
    "email": "menla@dharmaduta.in"
  },
  {
    "name": "TENZIN KUNSANG",
    "role": "Senior Software Developer I",
    "image": "/team/kunsang.png",
    "email": "tenkus@dharmaduta.in"
  },
  {
    "name": "TENZIN TSERING",
    "role": "Software Developer I",
    "image": "/team/tsering.png",
    "email": "tentse@dharmaduta.in"
  },
  {
    "name": "TENZIN KALDAN",
    "role": "Senior Software Developer II",
    "image": "/team/kaldan.jpg",
    "email": "kaldan@dharmaduta.in"
  },
  {
    "name": "TENZIN YOUDON",
    "role": "Software Developer I",
    "image": "/team/youdon.png",
    "email": "youdon@dharmaduta.in"
  },
  {
    "name": "KARMA TSERING",
    "role": "Software Developer I",
    "image": "/team/tsering.png",
    "email": "kartse@dharmaduta.in"
  },
  {
    "name": "TENZIN DHAKAR",
    "role": "Software Developer I",
    "image": "/team/dhakar.png",
    "email": "dhakar@dharmaduta.in"
  },
  {
    "name": "TENZIN KALDEN",
    "role": "Software Developer I",
    "image": "/team/kalden.png",
    "email": "tenzinkalden@dharmaduta.in"
  },
  {
    "name": "NORBU TSERING",
    "role": "Social Media & Communication Officer",
    "image": "/team/tsering.png",
    "email": "nortse@dharmaduta.in"
  },
  {
    "name": "GADE",
    "role": "Tibetan Language Expert",
    "image": "/team/gade.png",
    "email": "gade@dharmaduta.in"
  },
  {
    "name": "PASSANG TSERING",
    "role": "Tibetan Language Expert",
    "image": "/team/tsering.png",
    "email": "passang@dharmaduta.in"
  },
  {
    "name": "TENZIN TSEWANG",
    "role": "Tibetan Language Expert",
    "image": "/team/tsewang.png",
    "email": "tsewang@dharmaduta.in"
  }
].sort(() => Math.random() - 0.5); // Shuffle the array

const TeamSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collaborative community of practitioners, scholars, and technologists working 
              together to bridge ancient wisdom with modern technology.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <div className="flex space-x-3">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;