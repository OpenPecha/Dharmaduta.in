
import { useEffect, useRef } from "react";

const HowWeHelpSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Buddhist Institution Services */}
          <div className="mb-24">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Buddhist Tech Services
            </h2>
            <h3 className="text-xl lg:text-2xl text-[#bf9c2e] font-semibold mb-8">
              Onboard AI to Amplify Your Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              Your institution excels at sharing Buddhist wisdom. To multiply that impact, we build a dedicated team around your vision, uniting your people with our specialists and open-source contributors. When you partner with us, you're not just building a tool for your institution; you are investing in the entire Buddhist open-source ecosystem.
            </p>
          </div>

          {/* Individual Services */}
          <div className="mb-24">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Individual Development
            </h2>
            <h3 className="text-xl lg:text-2xl text-[#bf9c2e] font-semibold mb-8">
              Personal Buddhist Tech Guidance
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              Whether you're a practitioner seeking to leverage technology for Dharma study or an entrepreneur with a vision for Buddhist innovation, we provide personalized guidance and development support to help you navigate the intersection of ancient wisdom and modern technology.
            </p>
          </div>

          {/* OpenPecha Integration */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              OpenPecha Platform
            </h2>
            <h3 className="text-xl lg:text-2xl text-[#bf9c2e] font-semibold mb-8">
              Open-source Buddhist Text Platform
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              We are major contributors to the OpenPecha project, ensuring the future of digital Buddhism is built on transparent, collaborative technology. Our work dramatically increases the footprint of Buddhist data online, helping AI systems learn from and share Buddhist wisdom accurately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
