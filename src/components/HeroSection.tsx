const HeroSection = () => {
  const projectImages = [
    { src: "/webuddhist_web.png", alt: "WeBuddhist Web", name: "WEBUDDHIST", link: "https://webuddhist.com/" },
    { src: "/webuddhist_app.png", alt: "WeBuddhist App", name: "WEBUDDHIST APP", link: "#" },
    { src: "/sherab.png", alt: "Sherab", name: "SHERAB", link: "https://sherab.org/" },
    { src: "/pecha_ai.png", alt: "Buddhist AI Tools", name: "Buddhist AI Tools", link: "https://buddhistai.tools/" },
    { src: "/pecha_server.jpeg", alt: "Pecha Data & API", name: "PECHA DATA & API", link: "https://pecha-backend.web.app/swagger/#/" },
    { src: "/buddhist_creators_convention_en.jpeg", alt: "Buddhist Creators Convention", name: "Buddhist Creators Convention", link: "http://buddhistcreators.com" },
    { src: "/buddhist_creators_convention-hi.jpeg", alt: "बुद्धिस्ट सृजनकर्ता सम्मेलन", name: "बुद्धिस्ट सृजनकर्ता सम्मेलन", link: "http://buddhistcreators.com" }
  ];

  return (
    <section className="bg-background pt-16 pb-10 sm:pt-24 sm:pb-16 flex flex-col">
      {/* Hero Text */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold leading-tight tracking-tight px-2 sm:px-4" style={{ color: '#233666' }}>
            <span className="block">Code, Content & Coaching.</span>
            <span className="block mt-2">By Buddhists, for Buddhists.</span>
          </h1>
        </div>
      </div>

      {/* Auto-scrolling Image Carousel */}
      <div className="w-full overflow-hidden mt-16 sm:mt-24">
        <div className="w-full">
          <div className="relative">
            <div className="flex animate-scroll-left">
              {/* First set of images */}
              {projectImages.map((image, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 px-3 sm:px-6 lg:px-8">
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="w-[280px] h-[180px] sm:w-[300px] sm:h-[200px] lg:w-[400px] lg:h-[280px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 sm:mt-4 text-center">
                      <h3 className="text-xs sm:text-base lg:text-xl font-bold text-foreground tracking-tight px-1 sm:px-2">
                        {image.name}
                      </h3>
                    </div>
                  </a>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {projectImages.map((image, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 px-3 sm:px-6 lg:px-8">
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="w-[280px] h-[180px] sm:w-[300px] sm:h-[200px] lg:w-[400px] lg:h-[280px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 sm:mt-4 text-center">
                      <h3 className="text-xs sm:text-base lg:text-xl font-bold text-foreground tracking-tight px-1 sm:px-2">
                        {image.name}
                      </h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for animation */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-font-smoothing: subpixel-antialiased;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
