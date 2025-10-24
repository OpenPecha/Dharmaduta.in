const EventsAndCommunity = () => {
  return (
    <div className="pt-24 bg-background text-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Buddhist Creators Convention Section */}
          <section id="convention" className="mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center text-primary">
              Buddhist Creators Convention
            </h1>
            <div className="text-center mb-10">
              <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                January 2026 • Bodhgaya
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are hosting this event to bring together the brightest minds and most passionate hearts in Buddhist content creation and technology. Our goal is to foster collaboration, inspire innovation, and collectively shape the future of how Dharma is shared and experienced in the digital age.
              </p>
              <a 
                href="http://buddhistcreators.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors text-lg"
              >
                Visit the Official Website
              </a>
            </div>
          </section>

          {/* Our Community Goals Section */}
          <section id="community-goals">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Our Community Goals
            </h2>
            <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Future Vision</h3>
              <p className="text-lg text-muted-foreground">
                Our vision is to cultivate a thriving ecosystem for Buddhist technology and content. We aim to expand the market and user base by connecting creators, developers, and practitioners. By providing a platform for new ideas and supporting emerging talent, we believe we can empower our community to create meaningful, high-quality digital experiences that resonate with a global audience. Together, we can build a more mindful and compassionate digital world.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EventsAndCommunity;
