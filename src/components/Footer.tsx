
import { Mail, Linkedin, X, Youtube, Instagram, Facebook } from "lucide-react";
import { getImagePath } from "../lib/utils";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8">
            {/* Brand */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8">
                <img
                  src={getImagePath("/logo.png")}
                  alt="Dharmaduta Services Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-lg sm:text-xl font-bold text-foreground text-primary">
                Dharmaduta
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-3">
              <a
                href="mailto:contact@dharmaduta.in"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group min-w-[44px] min-h-[44px]"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/dharmaduta-services-llp/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group min-w-[44px] min-h-[44px]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a
                href="https://x.com/Dharmadutatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group min-w-[44px] min-h-[44px]"
                aria-label="Twitter/X"
              >
                <X className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@DharmadutaServicesLLP"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group min-w-[44px] min-h-[44px]"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/dharmadutaservicesllp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group min-w-[44px] min-h-[44px]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578322432088"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-muted hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group min-w-[44px] min-h-[44px]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-6 sm:pt-8 mt-6 sm:mt-8">
            <p className="text-muted-foreground text-xs sm:text-sm text-center px-4">
              © 2025 Dharmaduta Services. We build Buddhist Technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
