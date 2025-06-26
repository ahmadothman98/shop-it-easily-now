
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import SignaturePackaging from "../components/SignaturePackaging";
import ProductShowcase from "../components/ProductShowcase";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <ProductCategories />
        <SignaturePackaging />
        <ProductShowcase />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
