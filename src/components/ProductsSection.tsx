import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { getImagePath } from "../lib/utils";

// Google Play Store Icon Component
const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

// App Store Icon Component
const AppStoreIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
  </svg>
);

const ProductsSection = () => {
  interface Product {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  buttonText: string;
  image: string;
  stats?: { label: string; value: string }[];
  stores?: string[];
}

const products: Product[] = [

    {
      name: "WEBUDDHIST",
      title: "Comprehensive Buddhist Study Platform",
      subtitle: "Where we learn, live, and share Buddhist wisdom every day",
      description: "Whether you're seeking authentic Buddhist teachings, conducting research, or deepening your practice, WeBuddhist is at your disposal 24 hours a day, 7 days a week.",
      link: "https://webuddhist.com/",
      buttonText: "Try Now",
      image: getImagePath("/webuddhist_web.png")
    },
    {
      name: "WEBUDDHIST APP",
      title: "Buddhist Practice Mobile Application",
      subtitle: "Where we learn, live, and share Buddhist wisdom every day",
      description: "Mobile application for Buddhist practice, meditation guidance, and daily spiritual activities. Available on both iOS and Android platforms for practitioners worldwide.",
      link: "#",
      buttonText: "Coming soon",
      image: getImagePath("/webuddhist_app.png"),
    },
    {
      name: "SHERAB",
      title: "Buddhist E-Learning Platform",
      subtitle: "Learn Buddhism and Tibetan language online",
      description: "Advanced e-learning platform offering structured Buddhist courses, teachings, and educational resources for practitioners at all levels with expert guidance.",
      stats: [
        { label: "Courses", value: "200+" },
        { label: "Students", value: "25,000+" },
        { label: "Completion Rate", value: "85%" }
      ],
      link: "https://sherab.org/",
      buttonText: "Learn More",
      image: getImagePath("/sherab.png"),
      stores: ["App Store", "Google Play"]
    },
    {
      name: "Buddhist AI Tools",
      title: "Buddhist Resource Creation Suite",
      subtitle: "Professional tools for Buddhist content creators",
      description: "Comprehensive suite of digital tools designed specifically for creating, editing, and managing Buddhist resources and texts with precision and authenticity.",
      stats: [
        { label: "Tools Available", value: "15+" },
        { label: "Projects Created", value: "10,000+" },
        { label: "Organizations", value: "100+" }
      ],
      link: "https://buddhistai.tools/",
      buttonText: "Try Tools",
      image: getImagePath("/pecha_ai.png")
    },
    {
      name: "PECHA DATA & API",
      title: "Buddhist Text API Platform",
      subtitle: "Buddhist knowledge in one call",
      description: "Access and integrate Buddhist texts and resources programmatically through our comprehensive API platform. Perfect for developers, researchers, and organizations building Buddhist applications and services.",
      stats: [
        { label: "API Endpoints", value: "50+" },
        { label: "Daily Requests", value: "100,000+" },
        { label: "Text Coverage", value: "1M+ pages" }
      ],
      link: "https://pecha-backend.web.app/swagger/#/",
      buttonText: "Explore API",
      image: getImagePath("/pecha_server.jpeg")
    }
  ];

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 lg:space-y-32">
          {products.map((product, index) => (
            <div key={product.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content Side */}
              <div className={`space-y-6 sm:space-y-8 px-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                    {product.name}
                  </h3>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                    {product.title}
                  </h4>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {product.description}
                </p>

                {/* Action Button */}
                <div className="flex items-center justify-start">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background font-medium px-6 sm:px-8 text-sm sm:text-base min-h-[44px]"
                  >
                    <a 
                      href={product.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      {product.buttonText}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>

                {/* App Store Badges */}
                {product.stores && (
                  <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                    {product.stores.map((store) => (
                      <a
                        key={store}
                        href={store === "Google Play" 
                          ? "https://play.google.com/store/apps/details?id=org.sherab.app"
                          : "https://apps.apple.com/us/app/sherab/id6747565399"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 bg-muted/50 hover:bg-muted transition-colors rounded-lg px-4 py-2"
                      >
                        <div className="w-6 h-6 text-foreground">
                          {store === "Google Play" ? (
                            <GooglePlayIcon className="w-full h-full" />
                          ) : (
                            <AppStoreIcon className="w-full h-full" />
                          )}
                        </div>
                        <div className="text-sm">
                          <div className="text-xs text-muted-foreground">Available on</div>
                          <div className="font-medium text-foreground">{store}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Image Side */}
              <div className={`px-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                    <img
                      src={product.image}
                      alt={`${product.name} preview`}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
