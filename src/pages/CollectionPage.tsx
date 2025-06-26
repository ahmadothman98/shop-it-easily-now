
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CollectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    { id: "plastic-retro-1", name: "Plastic Retro", price: 19, category: "retro", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=200&fit=crop" },
    { id: "retro-polarized-1", name: "Retro Polarized", price: 16, category: "retro", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop" },
    { id: "vintage-oval-1", name: "Vintage Oval", price: 17, category: "retro", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop" },
    { id: "plastic-retro-2", name: "Plastic Retro", price: 19, category: "minimalist", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=200&fit=crop" },
    { id: "retro-polarized-2", name: "Retro Polarized", price: 16, category: "minimalist", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop" },
    { id: "vintage-oval-2", name: "Vintage Oval", price: 17, category: "minimalist", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop" },
    { id: "vintage-oval-3", name: "Vintage Oval", price: 17, category: "special", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop" },
    { id: "admirable", name: "Admirable", price: 60, category: "special", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <h2 className="text-2xl font-bold mb-6">New Collection</h2>
            <p className="text-gray-600 mb-6">Summer 2023</p>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`block w-full text-left py-2 px-3 rounded ${selectedCategory === "all" ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedCategory("retro")}
                  className={`block w-full text-left py-2 px-3 rounded ${selectedCategory === "retro" ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  Retro
                </button>
                <button
                  onClick={() => setSelectedCategory("minimalist")}
                  className={`block w-full text-left py-2 px-3 rounded ${selectedCategory === "minimalist" ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  Minimalist
                </button>
                <button
                  onClick={() => setSelectedCategory("special")}
                  className={`block w-full text-left py-2 px-3 rounded ${selectedCategory === "special" ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  Special
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group"
                >
                  <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-xl font-bold">${product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CollectionPage;
