
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-left">
            <h1 className="text-4xl md:text-5xl font-roboto font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
              About Dharmaduta Services LLP
            </h1>
            <p className="text-lg font-roboto text-gray-600 leading-relaxed">
              We are a team of technologists, archivists, and scholars dedicated to preserving and sharing cultural heritage through modern technology and open-source principles.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              Our Mission
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                We know that sharing the Dharma requires immense dedication. In today's world, it also requires the right tools. At Dharmaduta, our mission is to empower your organization to amplify its activities, connect with new generations, and ensure the timeless wisdom of the Buddha thrives in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
