interface Founder {
  name: string;
  role: string;
  image: string;
}

const founders: Founder[] = [
  {
    name: "KALZANG FURBU",
    role: "Co-Founder",
    image: "/team/operation/kalsang.jpg"
  },
  {
    name: "YONTEN WANGCHUK",
    role: "Co-Founder",
    image: "/team/operation/yonten.jpg"
  },
  {
    name: "TENZIN NORYANG",
    role: "Executive Manager",
    image: "/team/operation/noryang.jpg"
  },
  {
    name: "TENZIN RABTEN",
    role: "Buddhist Text Specialist",
    image: "/team/pecha_server/rabten.jpg"
  },
  {
    name: "TASHI TSERING",
    role: "Senior Software Developer II",
    image: "/team/pecha_server/tatse.jpg"
  },
  {
    name: "TENZIN KALDAN",
    role: "Senior Software Developer II",
    image: "/team/webuddhist/kaldan.jpg"
  },
  {
    name: "TENZIN KUNSANG",
    role: "Senior Software Developer I",
    image: "/team/pecha_studio/tenkus.jpg"
  },
  {
    name: "TSERING",
    role: "Buddhist Text Specialist",
    image: "/team/webuddhist/tsering.jpg"
  },
  {
    name: "GADE",
    role: "Buddhist Text Specialist",
    image: "/team/webuddhist/gade.jpg"
  }
];

import TrustedBySection from "./TrustedBySection";

const FoundersSection = () => {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
                Our Founders
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the visionaries who established Dharmaduta Services to bridge ancient wisdom with modern technology.
              </p>
            </div>

            {/* Founders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
              {founders.map((founder) => (
                <div 
                  key={founder.name}
                  className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-muted mb-4 border-4 border-primary/20">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 break-words">
                      {founder.name}
                    </h3>
                    <p className="text-sm sm:text-base text-primary font-medium break-words">
                      {founder.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <TrustedBySection />
    </>
  );
};

export default FoundersSection;

