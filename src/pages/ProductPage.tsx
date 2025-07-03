import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { CartProvider, useCart } from "../context/CartContext";
import { toast } from "sonner";
import "../colors.css";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Runs once on component mount
  const { id } = useParams();

  const { color } = useParams();
  const { addToCart } = useCart();
  const product_list = [
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
      images: ["lumine website edited (13 of 175).jpg"],
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
      color: "Offwhite-Brownlens",
      price: 22,
      available_stock: 1,
      images: ["lumine website edited (20 of 175).jpg"],
    },
    {
      id: 14,
      name: "Orbit",
      category: "special",
      size: "large",
      color: "Black-lens-silver-metal",
      price: 45,
      available_stock: 1,
      images: ["lumine website edited (2 of 175).jpg"],
    },
    {
      id: 14,
      name: "Orbit",
      category: "special",
      size: "small",
      color: "Black-lens-gold-metal",
      price: 45,
      available_stock: 1,
      images: ["lumine website edited (1 of 175).jpg"],
    },
  ];
  const [selectedColor, setSelectedColor] = useState("black");
  const [added_items, setAddedItems] = useState([]);

  useEffect(() => {
    setSelectedColor(color);
  }, [color]);

  const product = product_list.find((p) => {
    return (
      p.id.toString() == id &&
      (selectedColor
        ? p.color.toLocaleLowerCase() == selectedColor.toLocaleLowerCase()
        : true)
    );
  });

  const [quantity, setQuantity] = useState(1);

  // Mock product data
  // {
  // id: id || "l3-metal-retro",
  // name: "L3: Metal Retro",
  // price: 19,
  // images: [
  //   "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=400&fit=crop",
  //   "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=400&fit=crop"
  // ],
  // colors: ["black", "gold", "silver"],
  // description: "Premium sunglasses with vintage design and cutting-edge protection.",
  // features: [
  //   "UV 400 protection",
  //   "Polarized lenses",
  //   "Durable metal frame",
  //   "Comfortable fit"
  // ]
  // };
  function getRandomNumberInRangeExcluding(min, max, exclusions = []) {
    const validNumbers = [];

    for (let i = min; i <= max; i++) {
      if (!exclusions.includes(i)) {
        validNumbers.push(i);
      }
    }

    if (validNumbers.length === 0) {
      throw new Error("No valid numbers available in the range.");
    }

    const randomIndex = Math.floor(Math.random() * validNumbers.length);
    return validNumbers[randomIndex];
  }

  const random_products = [
    product_list[
      getRandomNumberInRangeExcluding(0, product_list.length, [
        product_list.indexOf(product),
      ])
    ],
    product_list[
      getRandomNumberInRangeExcluding(0, product_list.length, [
        product_list.indexOf(product),
      ])
    ],
    product_list[
      getRandomNumberInRangeExcluding(0, product_list.length, [
        product_list.indexOf(product),
      ])
    ],
    product_list[
      getRandomNumberInRangeExcluding(0, product_list.length, [
        product_list.indexOf(product),
      ])
    ],
  ];
  const handleAddToCart = () => {
    setAddedItems([
      ...added_items,
      { id: product?.id.toString(), color: selectedColor },
    ]);

    addToCart({
      id: product?.id.toString(),
      name: product?.name,
      price: product?.price,
      image: product?.images[0],
      quantity: quantity,
      color: selectedColor,
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
                src={
                  "https://wearlumine.com/qweqwe/sunglasses/" +
                  product?.images[0]
                }
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product?.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
                >
                  <img
                    src={"https://wearlumine.com/qweqwe/sunglasses/" + image}
                    alt={`${product?.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product?.name}
              </h1>
              <p className="text-2xl font-bold">${product?.price}</p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Available Stock: {product?.available_stock}
            </p>
            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex space-x-3">
                {product_list
                  .filter((p) => p.id.toString() == id)
                  .map((product) => (
                    <button
                      key={product?.color}
                      onClick={() => setSelectedColor(product?.color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === product?.color
                          ? "border-black"
                          : "border-gray-300"
                      } bg-${product?.color}`}
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
            {/* <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">What's in the box?</h3>
              <ul className="space-y-2 text-gray-600">
                {product?.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            You might also like
          </h2>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                key={random_products[item]?.id + random_products[item]?.color}
                to={`/product/${random_products[item]?.id}/${random_products[item]?.color}`}
              >
                <div key={item} className="text-center">
                  <div className="bg-gray-200 aspect-square rounded-lg mb-4">
                    <img
                      src={
                        "https://wearlumine.com/qweqwe/sunglasses/" +
                        random_products[item]?.images[0]
                      }
                      alt={`Related product ${item}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">
                    {random_products[item]?.name}
                  </h3>
                  <p className="font-bold">${product_list[item * 10].price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
