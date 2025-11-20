interface Collaborator {
  name: string;
  logo: string;
  url: string;
}

const collaborators: Collaborator[] = [
  {
    name: "OpenPecha Charitable Trust",
    logo: "/collaborators_logo/openpecha.png",
    url: "https://www.openpecha.org/"
  },
  {
    name: "BDRC",
    logo: "/collaborators_logo/BDRC_Logo.png",
    url: "https://www.bdrc.io/"
  },
  {
    name: "PaganTibet",
    logo: "/collaborators_logo/pagan_logo.png",
    url: "https://www.crcao.fr/recherche/pagantibet-documenter-la-premiere-reconstruction-de-pratiques-prebouddhiques-au-tibet/?lang=en"
  },
  {
    name: "Garchen Institute",
    logo: "/collaborators_logo/garchen_logo.jpeg",
    url: "https://garchen.net/"
  }
];

const TrustedBySection = () => {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="font-bold text-black mb-8 sm:mb-12 tracking-wider text-2xl sm:text-3xl lg:text-4xl">
              TRUSTED BY
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 items-center max-w-5xl mx-auto px-4">
              {collaborators.map((collaborator) => (
                <a
                  key={collaborator.name}
                  href={collaborator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 hover:scale-105 transition-transform duration-300 cursor-pointer min-h-[120px] sm:min-h-[140px]"
                >
                  <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-center w-full">
                    <img 
                      src={collaborator.logo} 
                      alt={collaborator.name}
                      className="max-h-14 sm:max-h-16 lg:max-h-20 w-auto object-contain transition-all duration-300"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground text-center break-words px-2">
                    {collaborator.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

