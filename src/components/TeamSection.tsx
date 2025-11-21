import { Mail } from "lucide-react";

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
    "role": "Buddhist Text Specialist",
    "image": "/team/operation/kalsang.jpg",
    "working_group": "Operation"
  },
  {
    "name": "YONTEN WANGCHUK",
    "role": "Education Specialist",
    "image": "/team/operation/yonten.jpg",
    "working_group": "Operation"
  },
  {
    "name": "TENZIN NORYANG",
    "role": "Executive Manager",
    "image": "/team/operation/noryang.jpg",
    "working_group": "Operation"
  },
  {
    "name": "TENZIN PALKYI",
    "role": "Community Growth Engineer",
    "image": "/team/operation/palkyi.jpg",
    "working_group": "Operation"
  },
  {
    "name": "NORBU TSERING",
    "role": "Social Media & Communication Officer",
    "image": "/team/operation/nortse.jpg",
    "working_group": "Operation"
  },
  {
    "name": "TENZIN KALDAN",
    "role": "Senior Software Developer II",
    "image": "/team/webuddhist/kaldan.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "TENZIN TAMDIN",
    "role": "Software Developer II",
    "image": "/team/webuddhist/tamdin.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "TENZIN DELEK",
    "role": "Software Developer II",
    "image": "/team/webuddhist/delek.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "TENZIN YOUDON",
    "role": "Software Developer I",
    "image": "/team/webuddhist/youdon.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "TENZIN LUNGSANG",
    "role": "Software Developer I",
    "image": "/team/webuddhist/lungsang.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "LOBZANG SANDUP",
    "role": "Software Developer I",
    "image": "/team/webuddhist/sandup.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "GADE",
    "role": "Buddhist Text Specialist",
    "image": "/team/webuddhist/gade.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "TENZIN TSEWANG",
    "role": "Buddhist Text Specialist",
    "image": "/team/webuddhist/tsewang.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "GYALTSEN DHARGYAL",
    "role": "Buddhist Text Specialist",
    "image": "/team/webuddhist/dhagyal.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "CHOEDUP",
    "role": "Buddhist Text Specialist",
    "image": "/team/webuddhist/choedup.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "PEMA NAMGYAL",
    "role": "Buddhist Text Specialist",
    "image": "/team/webuddhist/namgyal.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "JAMPA GONPO",
    "role": "Buddhist Text Specialist",
    "image": "/team/webuddhist/gonpo.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "SANGDU KYI",
    "role": "Buddhist Text Specialist",
    "image": "/team/webuddhist/kyi.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "JAMPA THUPTEN",
    "role": "Buddhist Text Specialist",
    "image": "/team/webuddhist/thupten.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "GELEK GYATSO (A)",
    "role": "Buddhist Text Specialist",
    "image": "/team/webuddhist/gyatso.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "TSETHAR DOLMA",
    "role": "Buddhist Text Specialist",
    "image": "/team/webuddhist/dolma.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "TSERING",
    "role": "Buddhist Text Specialist",
    "image": "/team/webuddhist/tsering.jpg",
    "working_group": "WeBuddhist Team"
  },
  {
    "name": "MENLA TSOMO",
    "role": "Project Coordinator",
    "image": "/team/sherab/menla.jpg",
    "working_group": "Sherab Team"
  },
  {
    "name": "TENZIN KALDEN",
    "role": "Software Developer I",
    "image": "/team/sherab/tenkal.jpg",
    "working_group": "Sherab Team"
  },
  {
    "name": "TENZIN KUNSANG",
    "role": "Senior Software Developer I",
    "image": "/team/pecha_studio/tenkus.jpg",
    "working_group": "Pecha AI Studio Team"
  },
  {
    "name": "TENZIN GAYCHE",
    "role": "Senior Software Developer I",
    "image": "/team/pecha_studio/gayche.jpg",
    "working_group": "Pecha AI Studio Team"
  },
  {
    "name": "GANGA GYATSO",
    "role": "Software Developer I",
    "image": "/team/pecha_studio/ganga.jpg",
    "working_group": "Pecha AI Studio Team"
  },
  {
    "name": "KARMA TSERING",
    "role": "Software Developer I",
    "image": "/team/pecha_studio/kartse.jpg",
    "working_group": "Pecha AI Studio Team"
  },
  {
    "name": "PASSANG TSERING",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_studio/passang.jpg",
    "working_group": "Pecha AI Studio Team"
  },
  {
    "name": "KARMA TSEPAK",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_studio/tsepak.jpg",
    "working_group": "Pecha AI Studio Team"
  },
  {
    "name": "KUNCHOK GAWA",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_studio/gawa.jpg",
    "working_group": "Pecha AI Studio Team"
  },
  {
    "name": "JAMPA LOBSANG",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_studio/lobsang.jpg",
    "working_group": "Pecha AI Studio Team"
  },
  {
    "name": "KALSANG THARDOE",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_studio/thardoe.jpg",
    "working_group": "Pecha AI Studio Team"
  },
  {
    "name": "TASHI TSERING",
    "role": "Senior Software Developer II",
    "image": "/team/pecha_server/tatse.jpg",
    "working_group": "Pecha Data & API Team"
  },
  {
    "name": "TENZIN TSERING",
    "role": "Software Developer I",
    "image": "/team/pecha_server/tentse.png",
    "working_group": "Pecha Data & API Team"
  },
  {
    "name": "TENZIN DHAKAR",
    "role": "Software Developer I",
    "image": "/team/pecha_server/dhakar.jpg",
    "working_group": "Pecha Data & API Team"
  },
  {
    "name": "TENPA DARCHUK",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_server/darchuk.jpg",
    "working_group": "Pecha Data & API Team"
  },
  {
    "name": "KUNSANG",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_server/kunsang.jpg",
    "working_group": "Pecha Data & API Team"
  },
  {
    "name": "TENZIN RABTEN",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_server/rabten.jpg",
    "working_group": "Pecha Data & API Team"
  },
  {
    "name": "SONAM GYAL",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_server/sonam.jpg",
    "working_group": "Pecha Data & API Team"
  },
  {
    "name": "SANGYAL KHER",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_server/kher.jpg",
    "working_group": "Pecha Data & API Team"
  },
  {
    "name": "JANGCHUP DORJEE",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_server/dorjee.jpg",
    "working_group": "Pecha Data & API Team"
  },
  {
    "name": "LHUJAM GYAL",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_server/gyal.jpg",
    "working_group": "Pecha Data & API Team"
  },
  {
    "name": "GELEK GYATSO",
    "role": "Buddhist Text Specialist",
    "image": "/team/pecha_server/gyatso.jpg",
    "working_group": "Pecha Data & API Team"
  }
]

const TeamSection = () => {
  // Group members by working group
  const groupedMembers = teamMembers.reduce((groups, member) => {
    const group = groups[member.working_group] || [];
    group.push(member);
    return { ...groups, [member.working_group]: group };
  }, {} as Record<string, TeamMember[]>);

  return (
    <section className="py-8 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6 text-foreground">
              Meet Our Team
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A collaborative community of practitioners, scholars, and technologists working
              together to bridge ancient wisdom with modern technology.
            </p>
          </div>

          {/* Working Groups */}
          <div className="space-y-8 sm:space-y-16">
            {Object.entries(groupedMembers).map(([groupName, members]) => (
              <div key={groupName} className="py-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-2xl font-semibold text-foreground mb-4 sm:mb-8 border-b border-border pb-2 sm:pb-4">
                  {groupName}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                  {members.map((member) => (
                    <div
                      key={member.name}
                      className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-muted flex-shrink-0">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 break-words">
                            {member.name}
                          </h3>
                          <p className="text-xs sm:text-base text-primary font-medium mb-2 break-words">
                            {member.role}
                          </p>
                          <div className="flex space-x-3">
                            {member.email && (
                              <a
                                href={`mailto:${member.email}`}
                                className="text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
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