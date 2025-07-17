import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Services", id: "services" },
    { label: "Our Model", id: "model" },
    { label: "About", id: "about" },
    { label: "Case Studies", id: "case-studies" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/30 font-roboto">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3">
              <img 
                src="/lovable-uploads/63a77b70-642c-4283-bdbd-2941fbcc2727.png" 
                alt="Dharmaduta Services Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-lg font-bold text-white leading-tight drop-shadow-lg bg-gray-500/20 hover:bg-gray-500/40 px-3 py-2 rounded-lg border border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 ease-in-out backdrop-blur-sm">
              <div>Dharmaduta</div>
              <div>Services LLP</div>
            </div>
          </div>

          {/* Desktop Navigation and CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-white/90 hover:text-white font-normal transition-colors duration-200 drop-shadow-md"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <button
              onClick={() => window.open('mailto:contact@dharmadutaservices.com', '_blank')}
              className="bg-orange-500/20 hover:bg-orange-500/60 text-white px-6 py-2 rounded-lg border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 ease-in-out text-center font-medium shadow-lg backdrop-blur-sm"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/30 bg-white/10 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white/90 hover:text-white font-normal py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => window.open('mailto:contact@dharmadutaservices.com', '_blank')}
                  className="w-full bg-orange-500/20 hover:bg-orange-500/60 text-white px-6 py-2 rounded-lg border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 ease-in-out text-center font-medium shadow-lg backdrop-blur-sm"
                >
                  Contact Us
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
