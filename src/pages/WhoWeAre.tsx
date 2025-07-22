
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-6 bg-cover bg-center bg-no-repeat relative"
        style={{backgroundImage: 'url(/lovable-uploads/814091f1-5d72-4949-8c66-667523fcae63.png)'}}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-left">
            <h1 className="text-4xl md:text-5xl font-roboto font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
              About Dharmaduta Services LLP
            </h1>
            <p className="text-lg font-roboto text-white leading-relaxed">
              We are a team of technologists, archivists, and scholars dedicated to preserving and sharing cultural heritage through modern technology and open-source principles.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        className="py-20 px-6 bg-cover bg-center bg-no-repeat relative"
        style={{backgroundImage: 'url(/lovable-uploads/448e8863-0588-4193-97c9-bf62280503a9.png)'}}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Our Mission
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                We know that sharing the Dharma requires immense dedication. In today's world, it also requires the right tools. At Dharmaduta, our mission is to empower your organization to amplify its activities, connect with new generations, and ensure the timeless wisdom of the Buddha thrives in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symbolism Section */}
      <section className="py-20 px-6 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/lovable-uploads/e10f0ab5-bf16-4e27-bb26-fadb48bc0f04.png)'}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              The Symbolism of Our Identity
            </h2>
            
            {/* Introduction */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-white leading-relaxed">
                    At Dharmaduta, our identity is rooted in the deep history of the Dharma's journey. We draw our inspiration and our symbols from the Tillya Tepe coin, one of the earliest and most powerful representations of the Buddha's teachings, minted nearly two millennia ago.
                  </p>
                  <p className="text-lg text-white leading-relaxed mt-6">
                    This remarkable artifact is not just a historical curiosity; it is a statement of the Dharma's power to adapt, communicate, and establish itself across cultures and eras. The coin's three central images form the core of our visual identity and represent the three pillars of our work.
                  </p>
                </div>
                <div className="bg-white/20 rounded-xl h-full flex items-center justify-center border-2 border-white/30 p-4">
                  <img 
                    src="/lovable-uploads/9b516b25-0d4d-4523-a4ad-15332fddb0db.png" 
                    alt="Tillya Tepe Buddhist coin showing the three symbols" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Three Symbols Grid */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Triratna Card */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="rounded-xl h-48 mb-6 overflow-hidden">
                    <img 
                      src="/lovable-uploads/64ac51c0-721c-41b9-a421-cf651129f35a.png" 
                      alt="Triratna Symbol - Three Jewels carved in stone" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#ff6700'}}>
                    The Triratna (The Three Jewels)
                  </h3>
                  <h4 className="text-lg font-semibold mb-4 text-indigo-600">
                    Symbolizing Our Core Commitment
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The Triratna, or Three Jewels, is the most sacred symbol in Buddhism, representing the Buddha, the Dharma (his teachings), and the Sangha (the community). On the Tillya Tepe coin, it stands above the Dharmacakra, signifying its supreme importance. We have adopted the Triratna as our logo because it represents our foundational commitment. Every project we undertake, every line of code we write, and every partnership we form is in service to the Buddha, his teachings, and the global community that upholds them. It is our mark of authenticity and our guiding star.
                  </p>
                </CardContent>
              </Card>

              {/* Turning Wheel Card */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="rounded-xl h-48 mb-6 overflow-hidden">
                    <img 
                      src="/lovable-uploads/eccf3b36-84b1-4b0e-bc2b-c84bd67a3faf.png" 
                      alt="Dharmacakra Symbol - Wheel of Dharma on ancient coin" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#ff6700'}}>
                    The Turning Wheel – Our AI & Data Services
                  </h3>
                  <h4 className="text-lg font-semibold mb-4 text-indigo-600">
                    Symbolizing the Dharma in Motion
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The reverse of the coin depicts a figure, likely the Buddha, turning the Dharmacakra, the Wheel of Law. The inscription reads, "Dharmacakrapravata"—"The one who turned the Wheel of the Law." This image symbolizes the active dissemination of the teachings, setting them in motion for the benefit of all. This powerful symbol represents our AI and Data Services. In the digital age, data is the new medium. By structuring authentic Buddhist texts, creating open-source datasets, and building trustworthy AI, we are turning the Wheel of Law for a new era. We are setting the Dharma in motion across digital platforms, making it accessible, discoverable, and active in the 21st century.
                  </p>
                </CardContent>
              </Card>

              {/* Fearless Lion Card */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="rounded-xl h-48 mb-6 overflow-hidden">
                    <img 
                      src="/lovable-uploads/6df45909-b84f-4d3b-89e1-8bb5a487f1fa.png" 
                      alt="Lion Symbol - Fearless lion on ancient coin" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#ff6700'}}>
                    The Fearless Lion – Our Empowerment & Coaching Services
                  </h3>
                  <h4 className="text-lg font-semibold mb-4 text-indigo-600">
                    Symbolizing the Confident Voice of the Dharma
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our Empowerment and Coaching Services. In a digital world filled with noise and misinformation, a clear, confident voice is essential. Through our incubation and coaching programs, we empower individuals and organizations to become "lions of the Dharma"—fearless, articulate, and effective communicators of Buddhist wisdom online, dispelling fear and spreading clarity.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
