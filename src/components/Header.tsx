import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll to section after navigation
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const isHomeLink = href.startsWith('/#');
    const id = href.replace(/\/#/, '');

    if (location.pathname !== '/' && isHomeLink) {
      // If we're not on home page and trying to scroll to a section,
      // navigate to home first, then scroll
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: "Products", href: "/#products" },
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }} 
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8">
              <img 
                src="/logo.png" 
                alt="Dharmaduta Services Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-2xl font-bold text-foreground">
              Dharmaduta
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Globe className="w-5 h-5" />
              </button>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
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
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-muted-foreground hover:text-primary font-medium py-2 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-muted-foreground hover:text-primary font-medium py-2 transition-colors duration-200 text-left w-full"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <button 
                className="text-muted-foreground hover:text-primary font-medium py-2 transition-colors duration-200 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Globe className="w-5 h-5 mr-2" />
                Language
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
