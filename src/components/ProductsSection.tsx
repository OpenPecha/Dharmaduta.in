import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
  const products = [
    {
      name: "WEBUDDHIST",
      title: "Comprehensive Buddhist Study Platform",
      subtitle: "World's leading digital platform for Buddhist learning",
      description: "Whether you're seeking authentic Buddhist teachings, conducting research, or deepening your practice, WeBuddhist is at your disposal 24 hrs a day / 7 days a week.",
      stats: [
        { label: "Active Users", value: "10,000+" },
        { label: "Buddhist Texts", value: "5,000+" },
        { label: "Languages", value: "15+" }
      ],
      link: "https://webuddhist.com/",
      buttonText: "Try Now",
      image: "/api/placeholder/400/300"
    },
    {
      name: "WEBUDDHIST APP",
      title: "Buddhist Practice Mobile Application",
      subtitle: "Your pocket companion for daily Buddhist practice",
      description: "Mobile application for Buddhist practice, meditation guidance, and daily spiritual activities. Available on both iOS and Android platforms for practitioners worldwide.",
      stats: [
        { label: "Downloads", value: "50,000+" },
        { label: "Meditation Sessions", value: "1M+" },
        { label: "User Rating", value: "4.8/5" }
      ],
      link: "#",
      buttonText: "Download App",
      stores: ["Google Play", "App Store"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "SHERAB",
      title: "Buddhist E-Learning Platform",
      subtitle: "Advanced structured learning for Buddhist studies",
      description: "Advanced e-learning platform offering structured Buddhist courses, teachings, and educational resources for practitioners at all levels with expert guidance.",
      stats: [
        { label: "Courses", value: "200+" },
        { label: "Students", value: "25,000+" },
        { label: "Completion Rate", value: "85%" }
      ],
      link: "https://sherab.org/",
      buttonText: "Learn More",
      stores: ["Google Play", "App Store"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "PECHA TOOLS",
      title: "Buddhist Resource Creation Suite",
      subtitle: "Professional tools for Buddhist content creators",
      description: "Comprehensive suite of digital tools designed specifically for creating, editing, and managing Buddhist resources and texts with precision and authenticity.",
      stats: [
        { label: "Tools Available", value: "15+" },
        { label: "Projects Created", value: "10,000+" },
        { label: "Organizations", value: "100+" }
      ],
      link: "https://workspace.pecha.tools/",
      buttonText: "Try Tools",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {products.map((product, index) => (
            <div key={product.name} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content Side */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground tracking-tight">
                    {product.name}
                  </h3>
                  <h4 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                    {product.title}
                  </h4>
                  <p className="text-lg text-muted-foreground font-medium">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {product.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {product.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background font-medium px-8"
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
                  <div className="flex flex-wrap gap-4 items-center">
                    {product.stores.map((store) => (
                      <div key={store} className="flex items-center space-x-3 bg-muted/50 hover:bg-muted transition-colors rounded-lg px-4 py-2 cursor-pointer">
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
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image Side */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-4xl">🧘</span>
                        </div>
                        <div className="text-lg font-semibold text-foreground">
                          {product.name}
                        </div>
                        <div className="text-sm text-muted-foreground px-8">
                          Interactive Buddhist platform preview
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating testimonial card */}
                  <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg max-w-xs">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">🙏</span>
                      </div>
                      <div className="text-sm">
                        <p className="text-muted-foreground leading-relaxed">
                          "This platform has transformed my Buddhist practice and study."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2 font-medium">
                          - Buddhist Practitioner
                        </p>
                      </div>
                    </div>
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
