
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CollectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products =   [
    {
        "id": 1,
        "name": "Soho",
        "color": "Leopard",
        "price": 19,
        "available_stock": 2,
        "images": [
            "lumine website edited (11 of 175).jpg"
        ],
    },
    {
        "id": 1,
        "name": "Soho",
        "color": "Black",
        "price": 19,
        "available_stock": 12,
        "images": [
            "lumine website edited (5 of 175).jpg"
        ],
    },
    {
        "id": 1,
        "name": "Soho",
        "color": "Brown",
        "price": 19,
        "available_stock": 2,
        "images": [
            "lumine website edited (11 of 175).jpg"
        ],
    },
    {
        "id": 1,
        "name": "Soho",
        "color": "White",
        "price": 19,
        "available_stock": 2,
        "images": [
            "llumine website edited (9 of 175).jpg"
        ]
    },
    {
        "id": 1,
        "name": "Soho",
        "color": "Offwhite",
        "price": 19,
        "available_stock": 2,
        "images": [
            "lumine website edited (7 of 175).jpg"
        ],
    },
    {
        "id": 2,
        "name": "Monaco",
        "color": "Pink",
        "price": 24,
        "available_stock": 1,
        "images": [
            "lumine website edited (16 of 175).jpg"
        ],
    },
    {
        "id": 2,
        "name": "Monaco",
        "color": "Brown",
        "price": 24,
        "available_stock": 3,
        "images": [
            "lumine website edited (22 of 175).jpg"
        ],
    },
    {
        "id": 3,
        "name": "Kyoto",
        "color": "Fullblack",
        "price": 21,
        "available_stock": 1,
        "images": [
            "lumine website edited (18 of 175).jpg"
        ],
    },
    {
        "id": 3,
        "name": "Kyoto",
        "color": "Black",
        "price": 21,
        "available_stock": 3,
        "images": [
            "lumine website edited (32 of 175).jpg"
        ],
    },
    {
        "id": 3,
        "name": "Kyoto",
        "color": "Brown",
        "price": 21,
        "available_stock": 1,
        "images": [
            "lumine website edited (33 of 175).jpg"
        ],
    },
    {
        "id": 4,
        "name": "Cote",
        "color": "Brown",
        "price": 22,
        "available_stock": 3,
        "images": [
            "lumine website edited (23 of 175).jpg"
        ],
    },
    {
        "id": 4,
        "name": "Cote",
        "color": "Bordeux",
        "price": 22,
        "available_stock": 1,
        "images": [
            "lumine website edited (29 of 175).jpg"
        ],
    },
    {
        "id": 5,
        "name": "Venice",
        "color": "Yellow",
        "price": 25,
        "available_stock": 1,
        "images": [
            "lumine website edited (37 of 175).jpg"
        ],
    },
    {
        "id": 5,
        "name": "Venice",
        "color": "Black",
        "price": 25,
        "available_stock": 2,
        "images": [
            "lumine website edited (35 of 175).jpg"
        ],
    },
    {
        "id": 5,
        "name": "Venice",
        "color": "Baby-blue",
        "price": 25,
        "available_stock": 1,
        "images": [
            "lumine website edited (36 of 175).jpg"
        ],
    },
    {
        "id": 6,
        "name": "Cairo",
        "color": "Brown",
        "price": 24,
        "available_stock": 1,
        "images": [
            "lumine website edited (28 of 175).jpg"
        ],
    },
    {
        "id": 6,
        "name": "Cairo",
        "color": "Black",
        "price": 24,
        "available_stock": 3,
        "images": [
            "lumine website edited (26 of 175).jpg"
        ],
    },
    {
        "id": 7,
        "name": "Beirut",
        "color": "Orange",
        "price": 24,
        "available_stock": 3,
        "images": [
            "lumine website edited (17 of 175).jpg"
        ],
    },
    {
        "id": 7,
        "name": "Beirut",
        "color": "Leopard-and-black",
        "price": 24,
        "available_stock": 1,
        "images": [
            "lumine website edited (30 of 175).jpg"
        ],
    },
    {
        "id": 7,
        "name": "Beirut",
        "color": "black",
        "price": 24,
        "available_stock": 1,
        "images": [
            "lumine website edited (24 of 175).jpg"
        ],
    },
    {
        "id": 7,
        "name": "Beirut",
        "color": "Blue",
        "price": 24,
        "available_stock": 1,
        "images": [
            "lumine website edited (25 of 175).jpg"
        ],
    },
    {
        "id": 7,
        "name": "Beirut",
        "color": "brown",
        "price": 24,
        "available_stock": 1,
        "images": [
            "aa.jpglumine website edited (13 of 175).jpg"
        ]
    },
    {
        "id": 8,
        "name": "Riviera",
        "color": "Move",
        "price": 25,
        "available_stock": 1,
        "images": [
            "lumine website edited (8 of 175).jpg"
        ],
    },
    {
        "id": 8,
        "name": "Riviera",
        "color": "black",
        "price": 25,
        "available_stock": 3,
        "images": [
            "lumine website edited (21 of 175).jpg"
        ],
    },
    {
        "id": 9,
        "name": "Seoul",
        "color": "white",
        "price": 22,
        "available_stock": 1,
        "images": [
            "lumine website edited (38 of 175).jpg"
        ],
    },
    {
        "id": 9,
        "name": "Seoul",
        "color": "green",
        "price": 22,
        "available_stock": 3,
        "images": [
            "lumine website edited (39 of 175).jpg"
        ],
    },
    {
        "id": 10,
        "name": "Porto",
        "color": "Black, gold-metal",
        "price": 24,
        "available_stock": 1,
        "images": [
            "lumine website edited (10 of 175).jpg"
        ],
    },
    {
        "id": 10,
        "name": "Porto",
        "color": "Brown",
        "price": 24,
        "available_stock": 2,
        "images": [
            "lumine website edited (19 of 175).jpg"
        ],
    },
    {
        "id": 10,
        "name": "Porto",
        "color": "Black",
        "price": 24,
        "available_stock": 1,
        "images": [
            "lumine website edited (3 of 175).jpg"
        ],
    },
    {
        "id": 11,
        "name": "MIami",
        "color": "Pink",
        "price": 20,
        "available_stock": 4,
        "images": [
            "lumine-website-edited-(34-of-175).jpg"
        ],
    },
    {
        "id": 11,
        "name": "MIami",
        "color": "White",
        "price": 20,
        "available_stock": 1,
        "images": [
            "lumine website edited (40 of 175).jpg"
        ],
    },
    {
        "id": 11,
        "name": "MIami",
        "color": "Black",
        "price": 20,
        "available_stock": 2,
        "images": [
            "lumine website edited (44 of 175).jpg"
        ],
    },
    {
        "id": 11,
        "name": "MIami",
        "color": "Leopard",
        "price": 20,
        "available_stock": 1,
        "images": [
            "lumine website edited (43 of 175).jpg"
        ],
    },
    {
        "id": 12,
        "name": "Havana",
        "color": "Leopard",
        "price": 21,
        "available_stock": 1,
        "images": [
            "lumine website edited (41 of 175).jpg"
        ],
    },
    {
        "id": 12,
        "name": "Havana",
        "color": "Black",
        "price": 21,
        "available_stock": 3,
        "images": [
            "lumine website edited (42 of 175).jpg"
        ],
    },
    {
        "id": 13,
        "name": "Cannes",
        "color": "Yellow",
        "price": 22,
        "available_stock": 1,
        "images": [
            "lumine website edited (14 of 175).jpg"
        ],
    },
    {
        "id": 13,
        "name": "Cannes",
        "color": "Offwhite, Brownlens",
        "price": 22,
        "available_stock": 1,
        "images": [
            "lumine website edited (20 of 175).jpg"
        ],
    },
    {
        "id": 14,
        "name": "Orbit",
        "size": "large",
        "color": "Black-lens, silver-metal",
        "price": 45,
        "available_stock": 1,
        "images": [
            "lumine website edited (2 of 175).jpg"
        ],
    },
    {
        "id": 14,
        "name": "Orbit",
        "size": "small",
        "color": "Black-lens,gold-metal",
        "price": 45,
        "available_stock": 1,
        "images": [
            "lumine website edited (1 of 175).jpg"
        ],
    },
];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const uniqueProducts = filteredProducts.filter(
  (product, index, self) =>
    self.findIndex(p => p.id === product.id) === index
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
                  className={`block w-full text-left py-2 px-3 rounded ${selectedCategory === "all" ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedCategory("Lumine Metals")}
                  className={`block w-full text-left py-2 px-3 rounded ${selectedCategory === "Lumine Metals" ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  Lumine Metals
                </button>
                <button
                  onClick={() => setSelectedCategory("Lumine essentials")}
                  className={`block w-full text-left py-2 px-3 rounded ${selectedCategory === "Lumine essentials" ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  Lumine essentials
                </button>
                <button
                  onClick={() => setSelectedCategory("Limited Edit")}
                  className={`block w-full text-left py-2 px-3 rounded ${selectedCategory === "Limited Edit" ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  Limited Edit
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {uniqueProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}/${product.color}`}
                  className="group"
                >
                  <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-square">
                    <img
                      src={product.images[0]}
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
