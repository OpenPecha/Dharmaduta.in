import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Mail } from "lucide-react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Md Shahjahan",
      role: "Founder & Managing Director",
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      name: "Sheikh Heera",
      role: "CTO & Platform Architect",
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      name: "Faizus Saleheen",
      role: "Chief Marketing Officer",
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      name: "Mahmudul Hasan",
      role: "VP of Engineering",
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              Meet The Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our dedicated team of technologists, archivists, and scholars working to preserve and share Buddhist wisdom through modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {teamMembers.map((member, index) => (
                <Card key={member.name} className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-[#bf9c2e] rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-6">{member.role}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-center space-x-4">
                        <a href={member.social.linkedin} className="text-gray-600 hover:text-[#bf9c2e] transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={member.social.github} className="text-gray-600 hover:text-[#bf9c2e] transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href={member.social.email} className="text-gray-600 hover:text-[#bf9c2e] transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;