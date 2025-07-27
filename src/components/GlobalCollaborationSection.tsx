import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GlobalCollaborationSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: intro1Ref, isVisible: intro1Visible } = useScrollAnimation();
  const { ref: intro2Ref, isVisible: intro2Visible } = useScrollAnimation();
  const { ref: org1Ref, isVisible: org1Visible } = useScrollAnimation();
  const { ref: org2Ref, isVisible: org2Visible } = useScrollAnimation();
  const { ref: org3Ref, isVisible: org3Visible } = useScrollAnimation();
  const { ref: org4Ref, isVisible: org4Visible } = useScrollAnimation();

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-slate-900"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(34, 211, 238, 0.05) 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Network Lines Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="rgb(34, 211, 238)" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="60" r="1.5" fill="rgb(59, 130, 246)" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
              </circle>
              <line x1="20" y1="20" x2="80" y2="60" stroke="rgb(34, 211, 238)" strokeWidth="1" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.4;0.1" dur="5s" repeatCount="indefinite" />
              </line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-lines)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 tracking-wide">
            GLOBAL COLLABORATION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div 
            ref={intro1Ref}
            className={`mb-12 transition-all duration-700 delay-200 ${
              intro1Visible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              Dharmaduta Service LLP is part of a global network working towards the shared mission of preserving and promoting Buddhist wisdom.
            </p>
          </div>

          <div 
            ref={intro2Ref}
            className={`mb-16 transition-all duration-700 delay-400 ${
              intro2Visible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">Our Global Ecosystem</h3>
            <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Dharmaduta Service LLP is a subsidiary operating under the umbrella of the Open Pecha Trust, a charitable organization based in New Zealand. As part of a global network, Dharmaduta Service collaborates closely with like-minded organizations around the world, all working towards the shared mission of preserving and promoting Buddhist wisdom.
            </p>
          </div>

          {/* Global Organizations Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Open Pecha Trust - New Zealand */}
            <div 
              ref={org1Ref}
              className={`bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-700 delay-600 ${
                org1Visible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                <h4 className="text-xl font-bold text-cyan-300">Open Pecha Trust – New Zealand</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The core organization behind this global initiative, dedicated to the vision of "boundless Buddhist knowledge." It supports digital authenticity, community empowerment, and global accessibility of Buddhist teachings.
              </p>
            </div>

            {/* Dharmaduta India */}
            <div 
              ref={org2Ref}
              className={`bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-700 delay-800 ${
                org2Visible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                <h4 className="text-xl font-bold text-cyan-300">Dharmaduta India</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A community of technology and business professionals committed to integrating Buddhist principles into everyday life. They develop tools and programs to help individuals learn, live, and share the Dharma.
              </p>
            </div>

            {/* Indrajala Taiwan */}
            <div 
              ref={org3Ref}
              className={`bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-700 delay-1000 ${
                org3Visible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-cyan-300 rounded-full mr-3 animate-pulse"></div>
                <h4 className="text-xl font-bold text-cyan-300">Indrajala Taiwan</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Known as the Chinese Buddhist Text Preservation Association, Indrajala leverages innovative technologies to preserve and make classical Buddhist texts more accessible to modern Chinese-speaking audiences.
              </p>
            </div>

            {/* Esukhia Canada */}
            <div 
              ref={org4Ref}
              className={`bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-700 delay-1200 ${
                org4Visible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-300 rounded-full mr-3 animate-pulse"></div>
                <h4 className="text-xl font-bold text-cyan-300">Esukhia Canada</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our flagship organization, dedicated to advancing Buddhist and Tibetan language education through cutting-edge resources, training, and technology. Esukhia operates through charitable support, ensuring wide accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCollaborationSection;