
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">LUMINE</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  See clearly. Shine confidently. Live luminously.
                </p>
                <p>
                  Lumine is a Lebanese lifestyle eyewear brand that curates premium sunglasses for 
                  individuals who value style, confidence, and quality. We carefully select pieces that 
                  blend timeless design with modern sophistication—made to elevate your everyday 
                  look.
                </p>
                <p>
                  Every detail, from the frames we offer to the unboxing experience, reflects our 
                  commitment to elegance and excellence. With Lumine, you're not just wearing 
                  sunglasses—you're making a statement.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square">
              <img
                src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop"
                alt="About Lumine"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">We don't create sunglasses. We curate confidence—with Lebanese pride.</h3>
              <p className="text-gray-600 leading-relaxed">
                At Lumine, we believe the right pair of sunglasses does more than shield your eyes—
                it enhances your presence. Proudly based in Lebanon, we've built a brand centered 
                around sourced curation, minimalist sophistication, and effortless confidence.
              </p>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                We source premium, fashion-forward sunglasses from trusted manufacturers, 
                focusing on timeless silhouettes and versatile designs that match any warmer. Our 
                commitment isn't just to great eyewear, but to the full experience—ensuring that 
                from the moment your package arrives, it feels like something special. Each pair 
                comes with our signature packaging: elegant, protective, and designed to leave a 
                lasting impression.
              </p>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                Lumine is for the detail-oriented. The style-conscious. The ones who understand 
                that what you wear is an extension of how you carry yourself. Whether you're 
                heading to the beach, stepping into a meeting, or capturing content under the sun, 
                Lumine sunglasses are made to be with you—bold, polished, and ready.
              </p>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Founder Note:</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "Coming from Lebanon, a country that knows resilience and style, I believe that every 
                sunglasses should be a reflection of who you are—confident, distinctive, and ready to shine 
                no matter the circumstance. Lumine was created to honor that spirit."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
