import { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { CartProvider, useCart } from "../context/CartContext";
import { toast } from "sonner";
import "../colors.css";
import { product_list } from "@/assets/product_list";
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

  // Reset quantity to 1 when color changes
  useEffect(() => {
    setQuantity(1);
  }, [selectedColor]);

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
      confirmPreorder();
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

  const confirmPreorder = () => {
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
              <h3 className="font-semibold mb-3">{product?.size? 'Select size' : 'Select color'}</h3>
              <div className="flex space-x-3 mb-4">
                {product_list
                  .filter((p) => p.id.toString() == id)
                  .map((product) => (
                    <button
                      key={product?.color}
                      onClick={() => setSelectedColor(product?.color)}
                      className={!product?.size? `w-8 h-8 rounded-full border-2  bg-[length:300%] bg-no-repeat bg-center bg-${product?.color} ${
                        selectedColor === product?.color
                          ? "border-gray-400"
                          : "border-gray-300"
                      }`: `w-14 h-9 border-2 border-gray-300 ${
                        selectedColor === product?.color
                          ? "bg-gray-200"
                          : ""
                      } `}
                      aria-label={product?.color}
                      type="button"
                    >{product?.size}</button>
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
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center"
                  type="button"
                  disabled={
                    !product ||
                    product.available_stock === 0 ||
                    quantity + cartQty >= product.available_stock
                  }
                >
                  +
                </button>
              </div>
              {product && product.available_stock - quantity == 0 && (
                <p className="text-xs text-gray-500 mt-1">
                  {product.available_stock - cartQty} left in stock
                </p>
              )}
            </div>

            {/* Add to Cart or Preorder */}
            {product?.available_stock === 0 ? (
              <div className="mt-4">
                <p className="text-red-600 font-semibold mb-2">
                  Out of stock. You can preorder this item.
                </p>
                <Button
                  onClick={() => confirmPreorder()}
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-600 py-3"
                  size="lg"
                >
                  Preorder
                </Button>
              </div>
            ) : (
              <Button
                onClick={handleAddToCart}
                className="w-full bg-black text-white hover:bg-gray-800 py-3 mt-4"
                size="lg"
                disabled={quantity + cartQty > product?.available_stock}
              >
                Add to cart
              </Button>
            )}
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
                Cleaning Napkin
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
