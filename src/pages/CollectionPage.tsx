import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CollectionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Runs once on component mount

  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Soho",
      category: "essentials",
      color: "Leopard",
      price: 19,
      available_stock: 2,
      images: ["lumine website edited (11 of 175).jpg"],
    },
    {
      id: 1,
      name: "Soho",
      category: "essentials",
      color: "Black",
      price: 19,
      available_stock: 12,
      images: ["lumine website edited (5 of 175).jpg"],
    },
    {
      id: 1,
      name: "Soho",
      category: "essentials",
      color: "Brown",
      price: 19,
      available_stock: 2,
      images: ["lumine website edited (11 of 175).jpg"],
    },
    {
      id: 1,
      name: "Soho",
      category: "essentials",
      color: "White",
      price: 19,
      available_stock: 2,
      images: ["lumine website edited (9 of 175).jpg"],
    },
    {
      id: 1,
      name: "Soho",
      category: "essentials",
      color: "Offwhite",
      price: 19,
      available_stock: 2,
      images: ["lumine website edited (7 of 175).jpg"],
    },
    {
      id: 2,
      name: "Monaco",
      category: "metals",
      color: "Pink",
      price: 24,
      available_stock: 1,
      images: ["lumine website edited (16 of 175).jpg"],
    },
    {
      id: 2,
      name: "Monaco",
      category: "metals",
      color: "Brown",
      price: 24,
      available_stock: 3,
      images: ["lumine website edited (22 of 175).jpg"],
    },
    {
      id: 3,
      name: "Kyoto",
      category: "metals",
      color: "Fullblack",
      price: 21,
      available_stock: 1,
      images: ["lumine website edited (18 of 175).jpg"],
    },
    {
      id: 3,
      name: "Kyoto",
      category: "metals",
      color: "Black",
      price: 21,
      available_stock: 1,
      images: ["lumine website edited (32 of 175).jpg"],
    },
    {
      id: 3,
      name: "Kyoto",
      category: "metals",
      color: "Brown",
      price: 21,
      available_stock: 1,
      images: ["lumine website edited (33 of 175).jpg"],
    },
    {
      id: 4,
      name: "Côte",
      category: "essentials",
      color: "Brown",
      price: 22,
      available_stock: 3,
      images: ["lumine website edited (23 of 175).jpg"],
    },
    {
      id: 4,
      name: "Côte",
      category: "essentials",
      color: "Bordeux",
      price: 22,
      available_stock: 1,
      images: ["lumine website edited (29 of 175).jpg"],
    },
    {
      id: 5,
      name: "Venice",
      category: "metals",
      color: "Yellow",
      price: 25,
      available_stock: 0,
      images: ["lumine website edited (37 of 175).jpg"],
    },
    {
      id: 5,
      name: "Venice",
      category: "metals",
      color: "Black",
      price: 25,
      available_stock: 1,
      images: ["lumine website edited (35 of 175).jpg"],
    },
    {
      id: 5,
      name: "Venice",
      category: "metals",
      color: "Baby-blue",
      price: 25,
      available_stock: 0,
      images: ["lumine website edited (36 of 175).jpg"],
    },
    {
      id: 6,
      name: "Cairo",
      category: "metals",
      color: "Brown",
      price: 24,
      available_stock: 1,
      images: ["lumine website edited (28 of 175).jpg"],
    },
    {
      id: 6,
      name: "Cairo",
      category: "metals",
      color: "Black",
      price: 24,
      available_stock: 3,
      images: ["lumine website edited (26 of 175).jpg"],
    },
    {
      id: 7,
      name: "Beirut",
      category: "essentials",
      color: "Orange",
      price: 24,
      available_stock: 3,
      images: ["lumine website edited (17 of 175).jpg"],
    },
    {
      id: 7,
      name: "Beirut",
      category: "essentials",
      color: "Leopard-and-black",
      price: 24,
      available_stock: 1,
      images: ["lumine website edited (30 of 175).jpg"],
    },
    {
      id: 7,
      name: "Beirut",
      category: "essentials",
      color: "black",
      price: 24,
      available_stock: 1,
      images: ["lumine website edited (24 of 175).jpg"],
    },
    {
      id: 7,
      name: "Beirut",
      category: "essentials",
      color: "Blue",
      price: 24,
      available_stock: 1,
      images: ["lumine website edited (25 of 175).jpg"],
    },
    {
      id: 7,
      name: "Beirut",
      category: "essentials",
      color: "brown",
      price: 24,
      available_stock: 1,
      images: ["aa.jpglumine website edited (13 of 175).jpg"],
    },
    {
      id: 8,
      name: "Riviera",
      category: "metals",
      color: "Move",
      price: 25,
      available_stock: 1,
      images: ["lumine website edited (8 of 175).jpg"],
    },
    {
      id: 8,
      name: "Riviera",
      category: "metals",
      color: "black",
      price: 25,
      available_stock: 2,
      images: ["lumine website edited (21 of 175).jpg"],
    },
    {
      id: 9,
      name: "Seoul",
      category: "essentials",
      color: "white",
      price: 22,
      available_stock: 1,
      images: ["lumine website edited (38 of 175).jpg"],
    },
    {
      id: 9,
      name: "Seoul",
      category: "essentials",
      color: "green",
      price: 22,
      available_stock: 3,
      images: ["lumine website edited (39 of 175).jpg"],
    },
    {
      id: 10,
      name: "Porto",
      category: "metals",
      color: "Black, gold-metal",
      price: 24,
      available_stock: 0,
      images: ["lumine website edited (10 of 175).jpg"],
    },
    {
      id: 10,
      name: "Porto",
      category: "metals",
      color: "Brown",
      price: 24,
      available_stock: 2,
      images: ["lumine website edited (19 of 175).jpg"],
    },
    {
      id: 10,
      name: "Porto",
      category: "metals",
      color: "Black",
      price: 24,
      available_stock: 0,
      images: ["lumine website edited (3 of 175).jpg"],
    },
    {
      id: 11,
      name: "Miami",
      category: "essentials",
      color: "Pink",
      price: 20,
      available_stock: 2,
      images: ["lumine-website-edited-(34-of-175).jpg"],
    },
    {
      id: 11,
      name: "Miami",
      category: "essentials",
      color: "White",
      price: 20,
      available_stock: 1,
      images: ["lumine website edited (40 of 175).jpg"],
    },
    {
      id: 11,
      name: "Miami",
      category: "essentials",
      color: "Black",
      price: 20,
      available_stock: 1,
      images: ["lumine website edited (44 of 175).jpg"],
    },
    {
      id: 11,
      name: "Miami",
      category: "essentials",
      color: "Leopard",
      price: 20,
      available_stock: 0,
      images: ["lumine website edited (43 of 175).jpg"],
    },
    {
      id: 12,
      name: "Havana",
      category: "essentials",
      color: "Leopard",
      price: 21,
      available_stock: 1,
      images: ["lumine website edited (41 of 175).jpg"],
    },
    {
      id: 12,
      name: "Havana",
      category: "essentials",
      color: "Black",
      price: 21,
      available_stock: 3,
      images: ["lumine website edited (42 of 175).jpg"],
    },
    {
      id: 13,
      name: "Cannes",
      category: "essentials",
      color: "Yellow",
      price: 22,
      available_stock: 1,
      images: ["lumine website edited (14 of 175).jpg"],
    },
    {
      id: 13,
      name: "Cannes",
      category: "essentials",
      color: "Offwhite, Brownlens",
      price: 22,
      available_stock: 1,
      images: ["lumine website edited (20 of 175).jpg"],
    },
    {
      id: 14,
      name: "Orbit",
      category: "special",
      size: "large",
      color: "Black-lens, silver-metal",
      price: 45,
      available_stock: 1,
      images: ["lumine website edited (2 of 175).jpg"],
    },
    {
      id: 14,
      name: "Orbit",
      category: "special",
      size: "small",
      color: "Black-lens,gold-metal",
      price: 45,
      available_stock: 1,
      images: ["lumine website edited (1 of 175).jpg"],
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
              <h3 className="font-semibold text-lg">Categories</h3>
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
                  Lumine Metals
                </button>
                <button
                  onClick={() => setSelectedCategory("essentials")}
                  className={`block w-full text-left py-2 px-3 rounded ${
                    selectedCategory === "essentials"
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Lumine essentials
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
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {uniqueProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}/${product.color}`}
                  className="group"
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
