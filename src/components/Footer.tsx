
import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12 mb-16">
            <div>
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
