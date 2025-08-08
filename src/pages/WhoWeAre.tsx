
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Mission Section */}
      <section className="pt-32 py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              Our Mission
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We know that sharing the Dharma requires immense dedication. In today's world, it also requires the right tools. At Dharmaduta, our mission is to empower your organization to amplify its activities, connect with new generations, and ensure the timeless wisdom of the Buddha thrives in the digital age.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a team of technologists, archivists, and scholars dedicated to preserving and sharing cultural heritage through modern technology and open-source principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symbolism Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center text-gray-900">
              The Symbolism of Our Identity
            </h2>
            
            {/* Introduction */}
            <div className="mb-20">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  At Dharmaduta, our identity is rooted in the deep history of the Dharma's journey. We draw our inspiration and our symbols from the Tillya Tepe coin, one of the earliest and most powerful representations of the Buddha's teachings, minted nearly two millennia ago.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This remarkable artifact is not just a historical curiosity; it is a statement of the Dharma's power to adapt, communicate, and establish itself across cultures and eras. The coin's three central images form the core of our visual identity and represent the three pillars of our work.
                </p>
              </div>
            </div>

            {/* Three Symbols Grid */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Triratna Card */}
              <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#bf9c2e]">
                    The Triratna (The Three Jewels)
                  </h3>
                  <h4 className="text-lg font-semibold mb-6 text-gray-900">
                    Symbolizing Our Core Commitment
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The Triratna, or Three Jewels, is the most sacred symbol in Buddhism, representing the Buddha, the Dharma (his teachings), and the Sangha (the community). We have adopted the Triratna as our logo because it represents our foundational commitment. Every project we undertake, every line of code we write, and every partnership we form is in service to the Buddha, his teachings, and the global community that upholds them.
                  </p>
                </CardContent>
              </Card>

              {/* Turning Wheel Card */}
              <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#bf9c2e]">
                    The Turning Wheel – Our AI & Data Services
                  </h3>
                  <h4 className="text-lg font-semibold mb-6 text-gray-900">
                    Symbolizing the Dharma in Motion
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The reverse of the coin depicts a figure, likely the Buddha, turning the Dharmacakra, the Wheel of Law. This powerful symbol represents our AI and Data Services. In the digital age, data is the new medium. By structuring authentic Buddhist texts, creating open-source datasets, and building trustworthy AI, we are turning the Wheel of Law for a new era.
                  </p>
                </CardContent>
              </Card>

              {/* Fearless Lion Card */}
              <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#bf9c2e]">
                    The Fearless Lion – Our Empowerment & Coaching Services
                  </h3>
                  <h4 className="text-lg font-semibold mb-6 text-gray-900">
                    Symbolizing the Confident Voice of the Dharma
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Through our incubation and coaching programs, we empower individuals and organizations to become "lions of the Dharma"—fearless, articulate, and effective communicators of Buddhist wisdom online, dispelling fear and spreading clarity.
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
