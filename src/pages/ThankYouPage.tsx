import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { product_list } from "@/assets/product_list";

const ThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Runs once on component mount
  const location = useLocation();
  const { order } = location.state || {}; // Retrieve the order details
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const getRandomNumberInRangeExcluding = (min, max, exclusions = []) => {
      const validNumbers = [];
      for (let i = min; i < max; i++) {
        if (!exclusions.includes(i)) {
          validNumbers.push(i);
        }
      }
      const randomIndex = Math.floor(Math.random() * validNumbers.length);
      return validNumbers[randomIndex];
    };

    const exclusions = [];
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
  }, []);

  const getRegularTotal = () => {
    return order.items
      .filter((item) => !item.preorder)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const shippingFee = getRegularTotal() > 50 ? 0 : 4;

  if (!order) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">No order found!</h1>
          <Link
            to="/"
            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Thank you for your order, {order.formData.firstName}!
        </h1>
        <p className="text-lg mb-8">
          Your LUMINĚ shades are on their way. We'll notify you as soon as they
          ship.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          {order.items.map((item, index) => (
            <div key={index} className="flex gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
                <img
                  src={`https://www.wearlumine.com/qweqwe/sunglasses/${item.image}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-600 capitalize">{item.color}</p>
                <p className="text-sm">Qty: {item.quantity}</p>
                {item.preorder && (
                  <p className="text-sm text-yellow-700 font-semibold">
                    (Preorder)
                  </p>
                )}
              </div>
              <div className="text-right">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Order number</span>
              <span>#{Math.floor(Math.random() * 10000)}</span>
            </div>
            {/* Show discount if applied and valid */}
            {order.discountValid && order.formData.discount && (
              <>
                <div className="flex justify-between">
                  <span className="text-gray-500">Total before discount</span>
                  <span className="text-gray-500 line-through">
                    ${(order.total / 0.75).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 font-semibold">
                    Discount applied
                  </span>
                  <span className="text-green-700 font-semibold">-25%</span>
                </div>
              </>
            )}
            <div className="flex justify-between">
              <span>Subtotal (excluding preorder)</span>
              <span>${getRegularTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              {shippingFee === 0 ? (
                <span className="text-green-600">Free</span>
              ) : (
                <span>${shippingFee}</span>
              )}
            </div>
            <div className="flex justify-between">
              <span>Total amount paid</span>
              <span className="font-semibold">
                ${(order.total + shippingFee).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Payment method</span>
              <span>{order.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping address</span>
              <span>
                {order.formData.address}, {order.formData.city}
              </span>
            </div>
          </div>
          {order.items.some((item) => item.preorder) && (
            <p className="text-sm text-gray-600 mt-4">
              Preorder items will be placed once payment is completed or sent
              through Wish.
            </p>
          )}
        </div>

        {/* You might also like */}
        <div className="flex-justify-center mt-16">
          <h2 className=" text-2xl font-bold text-center mb-8">
            You might also like
          </h2>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {randomProducts.map((relatedProduct, index) => (
              <Link
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
        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
