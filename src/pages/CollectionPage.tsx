import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";
import { product_list } from "@/assets/product_list";

const CollectionPage = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart, cartItems } = useCart();

  // Read category from URL on mount and when URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    setSelectedCategory(cat || "all");
  }, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Runs once on component mount

  const handleAddToCart = (product) => {
    const cartItem = cartItems.find(
      (item) =>
        item.id === product.id.toString() &&
        item.color?.toLowerCase() === product.color?.toLowerCase()
    );
    const currentQuantity = cartItem ? cartItem.quantity : 0;

    if (currentQuantity < product.available_stock) {
      addToCart({
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: 1,
        color: product.color,
        available_stock: product.available_stock,
      });
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.error(
        `Failed to add ${product.name}. Maximum stock reached (${product.available_stock}).`
      );
    }
  };

  const filteredProducts =
    selectedCategory === "all"
      ? product_list
      : product_list.filter((product) => product.category === selectedCategory);

  const uniqueProducts = filteredProducts.filter(
    (product, index, self) =>
      self.findIndex((p) => p.id === product.id) === index
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* <h2 className="text-2xl font-bold mb-6">New Collection</h2>
            <p className="text-gray-600 mb-6">Summer 2023</p>
             */}
            <div className="space-y-4">
              <h3 className=" lumine-title font-semibold text-lg">
                Categories
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`block w-full text-left py-2 px-3 rounded ${
                    selectedCategory === "all"
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedCategory("metals")}
                  className={`block w-full text-left py-2 px-3 rounded ${
                    selectedCategory === "metals"
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Lumině Metals
                </button>
                <button
                  onClick={() => setSelectedCategory("essentials")}
                  className={`block w-full text-left py-2 px-3 rounded ${
                    selectedCategory === "essentials"
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Lumině essentials
                </button>
                <button
                  onClick={() => setSelectedCategory("special")}
                  className={`block w-full text-left py-2 px-3 rounded ${
                    selectedCategory === "special"
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  The Limited Edit
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {uniqueProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link
                    to={`/product/${product.id}/${product.color}`}
                    className="block"
                  >
                    <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-square">
                      <img
                        src={
                          "https://www.wearlumine.com/qweqwe/sunglasses/" +
                          product.images[0]
                        }
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {product.name}
                      <p className="text-sm light-bold">${product.price}</p>
                    </h3>
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300 w-full"
                  >
                    Add to Cart
                  </button>
                </div>
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
