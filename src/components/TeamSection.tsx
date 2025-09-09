import { Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Tenzin Kalden",
    role: "Buddhist Technology Specialist",
    image: "/team/placeholder.jpg",
    email: "tenzin@dharmaduta.com"
  },
  {
    name: "Karma Dorje",
    role: "Buddhist Scholar",
    image: "/team/placeholder.jpg",
    email: "karma@dharmaduta.com"
  },
  // Adding more team members with diverse roles
  ...[...Array(28)].map((_, i) => ({
    name: `Team Member ${i + 3}`,
    role: [
      "Buddhist Technology Specialist",
      "Buddhist Scholar",
      "Project Coordinator",
      "Research Associate",
      "Data Specialist",
      "Content Creator",
      "Digital Preservation Expert",
      "Translation Technology Specialist",
      "Buddhist Text Analyst",
      "Community Engagement Specialist"
    ][i % 10],
    image: "/team/placeholder.jpg",
    email: `member${i + 3}@dharmaduta.com`
  }))
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