
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Who we are", type: "link", path: "/who-we-are" },
    { label: "Our Services", type: "scroll", id: "services" },
    { label: "Our Model", type: "scroll", id: "model" },
    { label: "Our Team", type: "scroll", id: "case-studies" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/30 font-roboto">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 mr-3">
              <img 
                src="/lovable-uploads/63a77b70-642c-4283-bdbd-2941fbcc2727.png" 
                alt="Dharmaduta Services Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-lg font-bold text-white leading-tight drop-shadow-lg">
              <div>Dharmaduta</div>
              <div>Services LLP</div>
            </div>
          </Link>

          {/* Desktop Navigation and CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                item.type === "link" ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-sm text-white font-normal px-3 py-2 rounded-lg bg-transparent hover:bg-white/20 transition-all duration-300 ease-in-out drop-shadow-md"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-white font-normal px-3 py-2 rounded-lg bg-transparent hover:bg-white/20 transition-all duration-300 ease-in-out drop-shadow-md"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>
            <Button 
              onClick={() => window.open('mailto:contact@dharmadutaservices.com', '_blank')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg"
            >
              Contact Us
            </Button>
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
                item.type === "link" ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-left text-white font-normal py-2 px-4 rounded-lg bg-transparent hover:bg-white/20 transition-all duration-300 ease-in-out"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-white font-normal py-2 px-4 rounded-lg bg-transparent hover:bg-white/20 transition-all duration-300 ease-in-out"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="pt-4">
                <Button 
                  onClick={() => window.open('mailto:contact@dharmadutaservices.com', '_blank')}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg"
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
