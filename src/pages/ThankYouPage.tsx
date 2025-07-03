import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const ThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Runs once on component mount
  const location = useLocation();
  const { order } = location.state || {}; // Retrieve the order details
  const [randomProducts, setRandomProducts] = useState([]);

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
          Your LUMINE shades are on their way. We'll notify you as soon as they
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
            {/* Show discount if applied */}
            {order.formData.discount && (
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
              <span>Total amount paid</span>
              <span className="font-semibold">${order.total.toFixed(2)}</span>
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
