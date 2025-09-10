import { Mail, ChevronDown } from "lucide-react";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
  working_group: string;
}

const teamMembers: TeamMember[] = [
  {
    "name": "KALZANG FURBU",
    "role": "Co Founder",
    "image": "/team/furbu.png",
    "working_group": "Council"
  },
  {
    "name": "YONTEN WANGCHUK",
    "role": "Co Founder",
    "image": "/team/wangchuk.png",
    "working_group": "Council"
  },
  {
    "name": "NGAWANG THRINLEY",
    "role": "CEO(Co Founder)",
    "image": "/team/thrinley.png",
    "working_group": "Council"
  },
  {
    "name": "TENZIN KALDAN",
    "role": "Product manager",
    "image": "/team/kaldan.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "TENZIN TAMDIN",
    "role": "Software Developer II",
    "image": "/team/tamdin.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "TENZIN DELEK",
    "role": "Software Developer II",
    "image": "/team/delek.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "TENZIN YOUDON",
    "role": "Software Developer I",
    "image": "/team/youdon.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "TENZIN LUNGSANG",
    "role": "Software Developer I",
    "image": "/team/lungsang.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "LOBZANG SANDUP",
    "role": "Software Developer I",
    "image": "/team/sandup.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "GADE",
    "role": "Tibetan Language Expert",
    "image": "/team/gade.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "TENZIN TSEWANG",
    "role": "Tibetan Language Expert",
    "image": "/team/tsewang.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "GYALTSEN DHARGYAL",
    "role": "Tibetan Language Expert",
    "image": "/team/dhargyal.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "CHOEDUP",
    "role": "Tibetan Language Expert",
    "image": "/team/choedup.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "PEMA NAMGYAL",
    "role": "Tibetan Language Expert",
    "image": "/team/namgyal.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "JAMPA GONPO",
    "role": "Tibetan Language Expert",
    "image": "/team/gonpo.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "SANGDU KYI",
    "role": "Tibetan Language Expert",
    "image": "/team/kyi.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "JAMPA THUPTEN",
    "role": "Tibetan Language Expert",
    "image": "/team/thupten.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "GELEK GYATSO (A)",
    "role": "Tibetan Language Expert",
    "image": "/team/(a).png",
    "working_group": "Webuddhist"
  },
  {
    "name": "TSETHAR DOLMA",
    "role": "Tibetan Language Expert",
    "image": "/team/dolma.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "TSERING",
    "role": "Tibetan Language Expert",
    "image": "/team/tsering.png",
    "working_group": "Webuddhist"
  },
  {
    "name": "TASHI TSERING",
    "role": "Senior Software Developer II",
    "image": "/team/tsering.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "TENZIN TSERING",
    "role": "Software Developer I",
    "image": "/team/tsering.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "TENZIN DHAKAR",
    "role": "Software Developer I",
    "image": "/team/dhakar.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "TENPA DARCHUK",
    "role": "Tibetan Language Expert",
    "image": "/team/darchuk.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "KUNSANG",
    "role": "Tibetan Language Expert",
    "image": "/team/kunsang.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "TENZIN THUTOP",
    "role": "Tibetan Language Expert",
    "image": "/team/thutop.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "TENZIN RABTEN",
    "role": "Tibetan Language Expert",
    "image": "/team/rabten.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "SONAM GYAL",
    "role": "Tibetan Language Expert",
    "image": "/team/gyal.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "SANGYAL KHER",
    "role": "Tibetan Language Expert",
    "image": "/team/kher.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "JANGCHUP DORJEE",
    "role": "Tibetan Language Expert",
    "image": "/team/dorjee.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "LHUJAM GYAL",
    "role": "Tibetan Language Expert",
    "image": "/team/gyal.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "GELEK GYATSO (B)",
    "role": "Tibetan Language Expert",
    "image": "/team/(b).png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "TSEYANG",
    "role": "Tibetan Language Expert",
    "image": "/team/tseyang.png",
    "working_group": "Pecha Server & API"
  },
  {
    "name": "TENZIN KUNSANG",
    "role": "Senior Software Developer I",
    "image": "/team/kunsang.png",
    "working_group": "Pecha AI Studio"
  },
  {
    "name": "TENZIN GAYCHE",
    "role": "Senior Software Developer I",
    "image": "/team/gayche.png",
    "working_group": "Pecha AI Studio"
  },
  {
    "name": "GANGA GYATSO",
    "role": "Software Developer I",
    "image": "/team/gyatso.png",
    "working_group": "Pecha AI Studio"
  },
  {
    "name": "KARMA TSERING",
    "role": "Software Developer I",
    "image": "/team/tsering.png",
    "working_group": "Pecha AI Studio"
  },
  {
    "name": "PASSANG TSERING",
    "role": "Tibetan Language Expert",
    "image": "/team/tsering.png",
    "working_group": "Pecha AI Studio"
  },
  {
    "name": "KARMA TSEPAK",
    "role": "Tibetan Language Expert",
    "image": "/team/tsepak.png",
    "working_group": "Pecha AI Studio"
  },
  {
    "name": "KUNCHOK GAWA",
    "role": "Tibetan Language Expert",
    "image": "/team/gawa.png",
    "working_group": "Pecha AI Studio"
  },
  {
    "name": "JAMPA LOBSANG",
    "role": "Tibetan Language Expert",
    "image": "/team/lobsang.png",
    "working_group": "Pecha AI Studio"
  },
  {
    "name": "KALSANG THARDOE",
    "role": "Tibetan Language Expert",
    "image": "/team/thardoe.png",
    "working_group": "Pecha AI Studio"
  },
  {
    "name": "MENLA TSOMO",
    "role": "Project Coordinator",
    "image": "/team/tsomo.png",
    "working_group": "Sherab"
  },
  {
    "name": "TENZIN KALDEN",
    "role": "Software Developer I",
    "image": "/team/kalden.png",
    "working_group": "Sherab"
  },
  {
    "name": "TENZIN NORYANG",
    "role": "Agile Coach",
    "image": "/team/noryang.png",
    "working_group": "Operation"
  },
  {
    "name": "TENZIN JORDHEN",
    "role": "Accountant",
    "image": "/team/jordhen.png",
    "working_group": "Operation"
  },
  {
    "name": "NORBU TSERING",
    "role": "Social Media & Communication Officer",
    "image": "/team/tsering.png",
    "working_group": "Operation"
  }
]

const TeamSection = () => {
  // Group members by working group
  const groupedMembers = teamMembers.reduce((groups, member) => {
    const group = groups[member.working_group] || [];
    group.push(member);
    return { ...groups, [member.working_group]: group };
  }, {} as Record<string, TeamMember[]>);

  // State to track which groups are expanded
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  // Toggle group expansion
  const toggleGroup = (groupName: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupName]: !prev[groupName]
    }));
  };

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

          {/* Working Groups Accordion */}
          <div className="space-y-4">
            {Object.entries(groupedMembers).map(([groupName, members]) => (
              <div key={groupName} className="border border-border rounded-lg overflow-hidden">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleGroup(groupName)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-accent/50 transition-colors"
                >
                  <h2 className="text-xl font-semibold text-foreground">{groupName}</h2>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedGroups[groupName] ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 transition-all duration-200 ease-in-out ${
                    expandedGroups[groupName] ? 'block' : 'hidden'
                  }`}
                >
                  {members.map((member) => (
                    <div 
                      key={member.name}
                      className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-muted flex-shrink-0">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;