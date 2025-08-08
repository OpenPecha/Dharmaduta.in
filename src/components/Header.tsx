import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Who we are", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Our Model", href: "#model" },
    { label: "Case Studies", href: "#case-studies" },
  ];

  const onContactClick = () => {
    setIsMenuOpen(false);
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <div className="w-8 h-8">
              <img 
                src="/logo.png" 
                alt="Dharmaduta Services Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              Dharmaduta
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-[#bf9c2e] font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button 
              onClick={onContactClick}
              className="bg-[#bf9c2e] hover:bg-[#a6872a] text-white font-medium px-6"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-[#bf9c2e] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-[#bf9c2e] font-medium py-2 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button 
                  onClick={onContactClick}
                  className="w-full bg-[#bf9c2e] hover:bg-[#a6872a] text-white font-medium"
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
