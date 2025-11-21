interface Founder {
  name: string;
  role: string;
  image: string;
}

const dataSpecialists: Founder[] = [
  {
    name: "TENZIN RABTEN",
    role: "Buddhist Data Specialist",
    image: "/team/pecha_server/rabten.jpg"
  },
  {
    name: "TSERING",
    role: "Buddhist Data Specialist",
    image: "/team/webuddhist/tsering.jpg"
  },
  {
    name: "GADE",
    role: "Buddhist Data Specialist",
    image: "/team/webuddhist/gade.jpg"
  }
];

const eduMgmtSpecialists: Founder[] = [
  {
    name: "KALZANG FURBU",
    role: "Education & Management Specialist",
    image: "/team/operation/kalsang.jpg"
  },
  {
    name: "YONTEN WANGCHUK",
    role: "Education & Management Specialist",
    image: "/team/operation/yonten.jpg"
  },
  {
    name: "TENZIN NORYANG",
    role: "Education & Management Specialist",
    image: "/team/operation/noryang.jpg"
  }
];

const techSpecialists: Founder[] = [
  {
    name: "TENZIN KALDAN",
    role: "Buddhist Tech Specialist",
    image: "/team/webuddhist/kaldan.jpg"
  },
  {
    name: "TASHI TSERING",
    role: "Buddhist Tech Specialist",
    image: "/team/pecha_server/tatse.jpg"
  },
  {
    name: "TENZIN KUNSANG",
    role: "Buddhist Tech Specialist",
    image: "/team/pecha_studio/tenkus.jpg"
  }
];



const FoundersSection = () => {
  const renderFounderCard = (founder: Founder) => (
    <div
      key={founder.name}
      className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-muted mb-3 sm:mb-4 border-4 border-primary/20">
          <img
            src={founder.image}
            alt={founder.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2 break-words">
          {founder.name}
        </h3>
        <p className="text-sm font-medium text-muted-foreground mb-1">
          Co-Founder
        </p>
        <p className="text-sm sm:text-base text-primary font-medium break-words">
          {founder.role}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-8 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Founding Team: Our Modern Dutas
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To fulfill this mission, we have assembled a collective of nine experts—our modern Dutas—divided into three specialized pillars. This cross-disciplinary approach ensures that every tool we build is technically robust, pedagogically effective, and scripturally accurate:
            </p>
          </div>

          {/* Pillars */}
          <div className="space-y-12 sm:space-y-16">
            {/* Buddhist Data Specialists */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary">Buddhist Data Specialists</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {dataSpecialists.map(renderFounderCard)}
              </div>
            </div>

            {/* Education & Management Specialists */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary">Education & Management Specialists</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {eduMgmtSpecialists.map(renderFounderCard)}
              </div>
            </div>

            {/* Buddhist Tech Specialists */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary">Buddhist Tech Specialists</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {techSpecialists.map(renderFounderCard)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;

