
import { Mail, Linkedin, Github, Twitter, Youtube, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Dharmaduta Services
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Bridging ancient wisdom and modern technology to multiply your Buddhist impact in the digital age.
              </p>
              <div className="flex space-x-4 flex-wrap">
                <a href="mailto:contact@dharmaduta.in" className="text-gray-400 hover:text-[#bf9c2e] transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/dharmaduta-services-llp/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#bf9c2e] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#bf9c2e] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://x.com/Dharmadutatech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#bf9c2e] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@DharmadutaServicesLLP" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#bf9c2e] transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/dharmadutaservicesllp.tech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#bf9c2e] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578322432088" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#bf9c2e] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/who-we-are"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Who we are
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/our-services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/our-model"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Our Model
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/our-team"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/case-studies"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Dharmaduta Services. Bridging ancient wisdom with modern technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
