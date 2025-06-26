
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: id || "l3-metal-retro",
    name: "L3: Metal Retro",
    price: 19,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=400&fit=crop"
    ],
    colors: ["black", "gold", "silver"],
    description: "Premium sunglasses with vintage design and cutting-edge protection.",
    features: [
      "UV 400 protection",
      "Polarized lenses",
      "Durable metal frame",
      "Comfortable fit"
    ]
  };

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedColor}`,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      color: selectedColor
    });
    toast.success("Added to cart!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-2xl font-bold">${product.price}</p>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "border-black" : "border-gray-300"
                    } ${
                      color === "black" ? "bg-black" :
                      color === "gold" ? "bg-yellow-400" :
                      "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="w-full bg-black text-white hover:bg-gray-800 py-3"
              size="lg"
            >
              Add to cart
            </Button>

            {/* Product Features */}
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">What's in the box?</h3>
              <ul className="space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center">
                <div className="bg-gray-200 aspect-square rounded-lg mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-151149976715${item}?w=300&h=300&fit=crop`}
                    alt={`Related product ${item}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">Plastic Retro</h3>
                <p className="font-bold">$19</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
