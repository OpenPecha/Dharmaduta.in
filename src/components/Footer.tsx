
import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-20 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                Dharmaduta Services
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg font-normal">
                Bridging ancient wisdom and modern technology to multiply your Buddhist impact in the digital age.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:contact@dharmadutaservices.com" className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 tracking-tight">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-white transition-colors text-lg font-normal"
                  >
                    Who we are
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white transition-colors text-lg font-normal"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('model')}
                    className="text-gray-300 hover:text-white transition-colors text-lg font-normal"
                  >
                    Our Model
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('case-studies')}
                    className="text-gray-300 hover:text-white transition-colors text-lg font-normal"
                  >
                    Our Team
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-10 text-center">
            <p className="text-gray-400 text-lg font-normal">
              © 2024 Dharmaduta Services. Bridging ancient wisdom with modern technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
