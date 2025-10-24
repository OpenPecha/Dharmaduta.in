import Partners from "./Partners";

const HeroSection = () => {

  return (
    <section className="bg-background min-h-screen flex flex-col items-center justify-center py-24 lg:py-32">
      <div className="container mx-auto px-6 flex-grow flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-tight tracking-tight">
          Code, content & coaching.<br />
          By Buddhists, for Buddhists.
          </h1>
        </div>
      </div>
      <Partners />
    </section>
  );
};

export default HeroSection;
