import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [errorMessage, setErrorMessage] = useState("");

  const handleIncreaseQuantity = (item) => {
    const maxStock = item.available_stock ?? Infinity;
    if (item.quantity < maxStock || item.preorder) {
      updateQuantity(item.id, item.quantity + 1, item.color);
      setErrorMessage(""); // Clear error message
    } else {
      toast.error(`Maximum stock reached for ${item.name} (${item.color})`);
    }
  };

  const getRegularTotal = () => {
    return cartItems
      .filter((item) => !item.preorder)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getPreorderTotal = () => {
    return cartItems
      .filter((item) => item.preorder)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const hasPreorders = cartItems.some((item) => item.preorder);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="lumine-title text-3xl font-bold mb-8">Shopping Bag</h1>
          <p className="text-gray-600 mb-8">Your cart is empty</p>
          <Link to="/collections">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {errorMessage && (
        <div className="container mx-auto px-4 py-2 text-center text-red-500">
          {errorMessage}
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        <h1 className="lumine-title text-3xl font-bold mb-8">Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.color}`}
                className={`flex gap-4 p-4 border ${
                  item.preorder
                    ? "border-yellow-300 bg-yellow-50"
                    : "border-gray-200"
                } rounded-lg`}
              >
                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={
                      "https://wearlumine.com/qweqwe/sunglasses/" + item.image
                    }
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.color && (
                    <p className="text-gray-600 capitalize">{item.color}</p>
                  )}
                  <p className="font-bold text-lg">${item.price}</p>
                  {item.preorder && (
                    <p className="text-sm text-yellow-700 font-semibold">
                      Preorder
                    </p>
                  )}

                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1, item.color)
                        }
                        className="px-3 py-1 hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border-x border-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncreaseQuantity(item)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id, item.color)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal {hasPreorders && "excluding preorder"}</span>

                  <span>${getRegularTotal().toFixed(2)}</span>
                </div>
                {hasPreorders && (
                  <div className="flex justify-between">
                    <span>Preorder Total</span>
                    <span>${getPreorderTotal().toFixed(2)}</span>
                  </div>
                )}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total {hasPreorders && "(including preorder)"}</span>
                  <span>
                    ${(getRegularTotal() + getPreorderTotal()).toFixed(2)}
                  </span>
                </div>
              </div>

              {hasPreorders && (
                <p className="text-sm text-gray-600 mb-4">
                  Preorder items will be placed once payment is completed or
                  sent through Wish.
                </p>
              )}

              <Link to="/checkout" className="block">
                <Button
                  className="w-full bg-black text-white hover:bg-gray-800"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
