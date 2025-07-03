import { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { CartProvider, useCart } from "../context/CartContext";
import { toast } from "sonner";
import "../colors.css";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color: string;
  preorder?: boolean;
  available_stock?: number; // <-- Add this line
};

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Runs once on component mount
  const { id } = useParams();

  const { color } = useParams();
  const { cartItems, addToCart } = useCart(); // Make sure cartItems is available
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
  const [randomProducts, setRandomProducts] = useState([]);
  const [showPreorderModal, setShowPreorderModal] = useState(false);

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

  useEffect(() => {
    const exclusions = [product_list.indexOf(product)];
    const selectedProducts = [
      product_list[
        getRandomNumberInRangeExcluding(0, product_list.length, exclusions)
      ],
      product_list[
        getRandomNumberInRangeExcluding(0, product_list.length, exclusions)
      ],
      product_list[
        getRandomNumberInRangeExcluding(0, product_list.length, exclusions)
      ],
    ];
    setRandomProducts(selectedProducts);
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleAddToCart = async () => {
    if (!product) return;

    // Find existing cart item for this product/color
    const existingCartItem = cartItems.find(
      (item) =>
        item.id === product?.id?.toString() &&
        item.color?.toLowerCase() === selectedColor?.toLowerCase()
    );
    const cartQty = existingCartItem ? existingCartItem.quantity : 0;
    const totalRequested = cartQty + quantity;

    if (
      product.available_stock === 0 ||
      totalRequested > product.available_stock
    ) {
      setShowPreorderModal(true);
      return;
    }

    // Normal add to cart
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      color: selectedColor,
      preorder: false,
      available_stock: product.available_stock,
    });
    toast.success("Added to cart!");
    setAddedItems([
      ...added_items,
      { id: product.id.toString(), color: selectedColor, preorder: false },
    ]);
  };

  const handlePreorderConfirm = () => {
    // Find existing cart item for this product/color
    const existingCartItem = cartItems.find(
      (item) =>
        item.id === product?.id?.toString() &&
        item.color?.toLowerCase() === selectedColor?.toLowerCase()
    );
    const cartQty = existingCartItem ? existingCartItem.quantity : 0;
    const preorderQty = Math.max(
      cartQty + quantity - (product?.available_stock ?? 0),
      0
    );

    // Add only the preorder quantity as preorder
    if (preorderQty > 0) {
      addToCart({
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: preorderQty,
        color: selectedColor,
        preorder: true,
        available_stock: product.available_stock,
      });
      toast.success("Added to cart as preorder!");
      setAddedItems([
        ...added_items,
        { id: product.id.toString(), color: selectedColor, preorder: true },
      ]);
    }
    setShowPreorderModal(false);
  };

  const handlePreorderCancel = () => {
    setShowPreorderModal(false);
  };

  const existingCartItem = cartItems.find(
    (item) =>
      item.id === product?.id?.toString() &&
      item.color?.toLowerCase() === selectedColor?.toLowerCase()
  );
  const cartQty = existingCartItem ? existingCartItem.quantity : 0;
  const preorderQty = Math.max(
    cartQty + quantity - (product?.available_stock ?? 0),
    0
  );
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Preorder Modal */}
      {showPreorderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Preorder Item
            </h2>
            // inside your modal
            <p className="mb-6 text-gray-700">
              This item is out of stock or you exceeded the available stock.
              <br />
              <br />
              <span className="font-semibold">
                Available Stock {product?.available_stock}
              </span>
              <br />
              <br />
              Would you like to preorder
              <span className="font-semibold">
                {preorderQty} {product?.name}-{selectedColor}
              </span>
              ?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handlePreorderCancel}
                className="px-6 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handlePreorderConfirm}
                className="px-6 py-2 rounded bg-black text-white hover:bg-gray-900 font-semibold"
              >
                Preorder
              </button>
            </div>
          </div>
        </div>
      )}

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
              {product?.images
                .filter((image, index) => index !== 0)
                .map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
                  >
                    <img
                      src={"https://wearlumine.com/qweqwe/sunglasses/" + image}
                      alt={`${product?.name} ${index + 2}`}
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
              <p className="text-2xl mb-2">${product?.price}</p>
              {/* {product?.description} */}
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Select color</h3>
              <div className="flex space-x-3 mb-4">
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
                      }`}
                      style={{
                        background:
                          product?.color.toLowerCase() === "black"
                            ? "#222"
                            : product?.color.toLowerCase() === "brown"
                            ? "#a0522d"
                            : product?.color.toLowerCase() === "gold"
                            ? "#e6c200"
                            : product?.color.toLowerCase() === "yellow"
                            ? "#ffe066"
                            : product?.color.toLowerCase() === "white"
                            ? "#fff"
                            : "#ccc",
                      }}
                      aria-label={product?.color}
                      type="button"
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
                  type="button"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center"
                  type="button"
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
          </div>
        </div>

        {/* What's in the box? */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">What's in the box?</h2>
          <div className="bg-gray-200 rounded-lg w-full h-96 lg:h-[32rem] mb-4 flex items-center justify-center overflow-hidden">
            <img
              src="https://wearlumine.com/qweqwe/imgs/packaging.jpg?w=600&h=400&fit=crop"
              alt="Lumine packaging"
              className="object-contain w-full h-full max-h-96 lg:max-h-[32rem] max-w-full"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-gray-800 text-center">
                Leather Pouch
              </span>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-gray-800 text-center">
                Magnet Box
              </span>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-gray-800 text-center">
                Cleaning Tissue
              </span>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-gray-800 text-center">Bag</span>
            </div>
          </div>
        </div>

        {/* People also like */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            People also like
          </h2>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {randomProducts.map((relatedProduct, index) => (
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                  const exclusions = [product_list.indexOf(relatedProduct)];
                  const selectedProducts = [
                    product_list[
                      getRandomNumberInRangeExcluding(
                        0,
                        product_list.length,
                        exclusions
                      )
                    ],
                    product_list[
                      getRandomNumberInRangeExcluding(
                        0,
                        product_list.length,
                        exclusions
                      )
                    ],
                    product_list[
                      getRandomNumberInRangeExcluding(
                        0,
                        product_list.length,
                        exclusions
                      )
                    ],
                  ];
                  setRandomProducts(selectedProducts);
                }}
                key={relatedProduct?.id + relatedProduct?.color}
                to={`/product/${relatedProduct?.id}/${relatedProduct?.color}`}
              >
                <div className="text-center">
                  <div className="bg-gray-200 aspect-square rounded-lg mb-4">
                    <img
                      src={
                        "https://wearlumine.com/qweqwe/sunglasses/" +
                        relatedProduct?.images[0]
                      }
                      alt={`Related product ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{relatedProduct?.name}</h3>
                  <p className="font-bold">${relatedProduct?.price}</p>
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
