
import { Mail, Linkedin, Twitter, Youtube, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8">
                <img 
                  src="/logo.png" 
                  alt="Dharmaduta Services Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xl font-bold text-foreground">
                Dharmaduta
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-3">
              <a 
                href="mailto:contact@dharmaduta.in" 
                className="w-10 h-10 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/company/dharmaduta-services-llp/about/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a 
                href="https://x.com/Dharmadutatech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a 
                href="https://www.youtube.com/@DharmadutaServicesLLP" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/dharmadutaservicesllp.tech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61578322432088" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 mt-8">
            <p className="text-muted-foreground text-sm text-center">
              © 2024 Dharmaduta Services. We build Buddhist Technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
