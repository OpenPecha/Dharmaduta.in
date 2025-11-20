const EventsAndCommunity = () => {
  return (
    <div className="pt-20 sm:pt-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Buddhist Creators Convention Section */}
          <section id="convention" className="mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-center text-primary px-4">
              Buddhist Creators Convention
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center text-primary px-4">
              बुद्धिस्ट सृजनकर्ता सम्मेलन
            </h2>
            <div className="text-center mb-8 sm:mb-10 px-4">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground">
                29th January - 6th February 2026 • Bodhgaya, India
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground mt-2">
                29 जनवरी - 6 फरवरी 2026 • बोधगया, भारत
              </p>
            </div>

            {/* Event Posters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 px-4">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <a 
                  href="http://buddhistcreators.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  <div className="aspect-[3/4] w-full">
                    <img 
                      src="/buddhist_creators_convention_en.jpeg" 
                      alt="Buddhist Creators Convention 2026 - English" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <a 
                  href="http://buddhistcreators.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  <div className="aspect-[3/4] w-full">
                    <img 
                      src="/buddhist_creators_convention-hi.jpeg" 
                      alt="Buddhist Creators Convention 2026 - Hindi" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-lg border border-border shadow-lg mb-8 px-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission / हमारा मिशन</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
                We are hosting this event to bring together the brightest minds and most passionate hearts in Buddhist content creation and technology. Our goal is to foster collaboration, inspire innovation, and collectively shape the future of how Dharma is shared and experienced in the digital age.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                हम इस आयोजन का उद्देश्य बौद्ध सामग्री निर्माण और प्रौद्योगिकी में सबसे प्रतिभाशाली दिमाग और सबसे भावुक दिलों को एक साथ लाना है। हमारा लक्ष्य सहयोग को बढ़ावा देना, नवाचार को प्रेरित करना और सामूहिक रूप से धर्म को डिजिटल युग में कैसे साझा और अनुभव किया जाता है, इसके भविष्य को आकार देना है।
              </p>
              <a 
                href="http://buddhistcreators.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-primary/90 transition-colors text-base sm:text-lg min-h-[44px] flex items-center justify-center"
              >
                Visit the Official Website / आधिकारिक वेबसाइट पर जाएं
              </a>
            </div>
          </section>

          {/* Our Community Goals Section */}
          <section id="community-goals" className="px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center">
              Our Community Goals / हमारे समुदाय के लक्ष्य
            </h2>
            <div className="bg-card p-6 sm:p-8 rounded-lg border border-border shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Future Vision / भविष्य की दृष्टि</h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
                Our vision is to cultivate a thriving ecosystem for Buddhist technology and content. We aim to expand the market and user base by connecting creators, developers, and practitioners. By providing a platform for new ideas and supporting emerging talent, we believe we can empower our community to create meaningful, high-quality digital experiences that resonate with a global audience. Together, we can build a more mindful and compassionate digital world.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                हमारी दृष्टि बौद्ध प्रौद्योगिकी और सामग्री के लिए एक संपन्न पारिस्थितिकी तंत्र विकसित करना है। हमारा उद्देश्य रचनाकारों, डेवलपर्स और अभ्यासियों को जोड़कर बाजार और उपयोगकर्ता आधार का विस्तार करना है। नए विचारों के लिए एक मंच प्रदान करके और उभरती प्रतिभा का समर्थन करके, हम मानते हैं कि हम अपने समुदाय को सार्थक, उच्च गुणवत्ता वाले डिजिटल अनुभव बनाने के लिए सशक्त बना सकते हैं जो वैश्विक दर्शकों के साथ प्रतिध्वनित होते हैं।
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EventsAndCommunity;
