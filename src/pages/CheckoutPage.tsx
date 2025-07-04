import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";
import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

export interface CartItem {
  id: string;
  name: string;
  color?: string;
  image: string;
  price: number;
  quantity: number;
  available_stock?: number;
  preorder?: boolean; // Added preorder property
}

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [packagingPreference, setPackagingPreference] = useState("allForMe");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    street_bldg: "",
    discount: "",
    giftDetails: "",
  });
  const [giftPackaging, setGiftPackaging] = useState({});
  const [discountValid, setDiscountValid] = useState<null | boolean>(null);
  const [discountLoading, setDiscountLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDiscountChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const code = e.target.value.trim();
    setFormData({ ...formData, discount: code });
    setDiscountValid(null);

    if (!code) return;

    setDiscountLoading(true);
    const q = query(collection(db, "users"), where("discountCode", "==", code));
    const snapshot = await getDocs(q);
    setDiscountValid(!snapshot.empty);
    setDiscountLoading(false);
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

  const getDiscountedTotal = () => {
    let subtotal = getRegularTotal();
    if (discountValid) {
      subtotal = subtotal * 0.75;
    }
    return subtotal + getPreorderTotal();
  };

  const hasPreorders = cartItems.some((item) => item.preorder);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "city",
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    const orderDetails = {
      formData,
      paymentMethod,
      packagingPreference,
      items: cartItems,
      total: getDiscountedTotal(),
      giftPackaging,
      discountValid: discountValid, // Include discount validity
      ...(discountValid && { discount: formData.discount }), // Add discount only if valid
    };

    try {
      await sendOrder(orderDetails);
      toast.success("Order placed successfully!");
      clearCart();

      navigate("/thank-you", { state: { order: orderDetails } });
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Failed to place the order. Please try again.");
    }
  };

  async function sendOrder(orderDetails) {
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        ...orderDetails,
        createdAt: Timestamp.now(),
      });
      console.log("Order saved with ID: ", docRef.id);
      console.log(orderDetails);

      await sendEmail(orderDetails);
      await sendEmailz(orderDetails);
    } catch (error) {
      console.error("Error saving order: ", error);
    }
  }

  async function sendEmail(order) {
    const payload = {
      email: order.formData.email,
      subject: "Order Confirmation",
      message: `${order.formData.firstName}, thank you for your order!\nTotal: ${order.total}\nPackaging Preference: ${order.packagingPreference}`,
      headers: "From: LUMINĚ <team@wearlumine.com>",
    };

    try {
      const res = await fetch("https://wearlumine.com/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log(res);
      const json = await res.json();
      if (json.success) {
        console.log("Email sent successfully!");
      } else {
        console.error("Email send error:", json.error);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }

  async function sendEmailz(order) {
    const payload = {
      email: "abedothman2003@gmail.com",
      subject: "Order Confirmation",
      message: JSON.stringify(order),
      headers: "From: LUMINĚ <team@wearlumine.com>",
    };

    try {
      const res = await fetch("https://wearlumine.com/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log(res);
      const json = await res.json();
      if (json.success) {
        console.log("Email sent successfully!");
      } else {
        console.error("Email send error:", json.error);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className=" lumine-title text-3xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
                <div className="space-y-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-4">
                  <Input
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="street_bldg"
                    placeholder="Region"
                    value={formData.street_bldg}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Discount Code */}
              <div>
                <label className="block text-base font-semibold mb-1 text-black">
                  Discount Code
                </label>
                <div className="relative w-[50%]">
                  <Input
                    name="discount"
                    placeholder="Discount Code"
                    value={formData.discount}
                    onChange={handleDiscountChange}
                  />
                  {formData.discount && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xl">
                      {discountLoading ? (
                        <Loader2
                          className="animate-spin text-gray-400"
                          size={22}
                        />
                      ) : discountValid ? (
                        <CheckCircle
                          className="text-green-600"
                          size={22}
                          strokeWidth={2}
                        />
                      ) : (
                        <XCircle
                          className="text-red-500"
                          size={22}
                          strokeWidth={2}
                        />
                      )}
                    </span>
                  )}
                </div>
                <div className="text-xs mt-1 text-gray-500">
                  {discountValid === false && formData.discount && (
                    <span className="text-red-500">Invalid code</span>
                  )}
                  {discountValid && (
                    <span className="text-green-600 font-semibold">
                      25% discount applied!
                    </span>
                  )}
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Choose Your Payment Method
                </h2>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Cash on delivery</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whish" id="whish" />
                    <Label htmlFor="whish">Whish</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Packaging Preferences */}
              {(cartItems?.length > 1 || cartItems[0]?.quantity > 1) && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Packaging Preferences
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    When ordering multiple items together, please let us know
                    your preference:
                  </p>
                  <RadioGroup
                    value={packagingPreference}
                    onValueChange={setPackagingPreference}
                  >
                    <div className="mb-4">
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="allForMe" id="allForMe" />
                        <div>
                          <Label
                            htmlFor="allForMe"
                            className="font-semibold text-lg"
                          >
                            All for me
                          </Label>
                          <div className="text-gray-600 text-sm mt-1">
                            We’ll package multiple pairs together in a
                            convenient set to reduce waste and keep it simple.
                            e.g. 4 sunglasses each in a protective pouch, 2
                            pouches in a box, 2 boxes in 1 bag.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem
                          value="someAreGifts"
                          id="someAreGifts"
                        />
                        <div>
                          <Label
                            htmlFor="someAreGifts"
                            className="font-semibold text-lg"
                          >
                            Some are gifts
                          </Label>
                          <div className="text-gray-600 text-sm mt-1">
                            We’ll carefully prepare each pair in its own
                            individual Lumine package, perfect for gifting.
                          </div>
                          {packagingPreference === "someAreGifts" && (
                            <div className="mt-3 space-y-2">
                              <label className="block text-gray-700 text-sm mb-1 font-semibold">
                                ▼ Choose number of individual packaging for each
                                item
                              </label>
                              {cartItems.map((item) => {
                                const key = `${item.name}_${item.color}`;
                                return (
                                  <div
                                    key={key}
                                    className="flex items-center mb-2"
                                  >
                                    <span className="flex-1">
                                      {item.name}{" "}
                                      {item.color && (
                                        <span className="text-gray-500">
                                          ({item.color})
                                        </span>
                                      )}
                                    </span>
                                    <input
                                      type="number"
                                      min={0}
                                      max={item.quantity}
                                      className="w-16 border border-gray-300 rounded px-2 py-1 text-sm ml-2"
                                      value={giftPackaging[key] ?? 0}
                                      onFocus={(e) => {
                                        if ((giftPackaging[key] ?? 0) === 0) {
                                          setGiftPackaging((prev) => ({
                                            ...prev,
                                            [key]: "",
                                          }));
                                        }
                                      }}
                                      onBlur={(e) => {
                                        if (e.target.value === "") {
                                          setGiftPackaging((prev) => ({
                                            ...prev,
                                            [key]: 0,
                                          }));
                                        }
                                      }}
                                      onChange={(e) => {
                                        const value = Math.max(
                                          0,
                                          Math.min(
                                            item.quantity,
                                            Number(e.target.value)
                                          )
                                        );
                                        setGiftPackaging((prev) => ({
                                          ...prev,
                                          [key]: value,
                                        }));
                                      }}
                                    />
                                    <span className="ml-2 text-gray-500">
                                      / {item.quantity}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800"
                size="lg"
              >
                Complete order
              </Button>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
                <h2 className="text-xl font-semibold mb-4">Your Order</h2>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => {
                    const availableQty = Math.min(
                      item.quantity,
                      item.available_stock ?? item.quantity
                    );
                    const preorderQty = item.quantity - availableQty;

                    return (
                      <div key={item.id + item.color} className="flex gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
                          <img
                            src={
                              "https://www.wearlumine.com/qweqwe/sunglasses/" +
                              item.image
                            }
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          {item.color && (
                            <p className="text-sm text-gray-600 capitalize">
                              {item.color}
                            </p>
                          )}
                          {availableQty > 0 && (
                            <p className="text-sm">
                              Qty: {availableQty}{" "}
                              <span className="text-green-700 font-semibold">
                                (Available)
                              </span>
                            </p>
                          )}
                          {preorderQty > 0 && (
                            <p className="text-sm">
                              Qty: {preorderQty}{" "}
                              <span className="text-yellow-700 font-semibold">
                                (Preorder)
                              </span>
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal (excluding preorder)</span>
                    <span>${getRegularTotal().toFixed(2)}</span>
                  </div>
                  {cartItems.some((item) => item.preorder) && (
                    <div className="flex justify-between">
                      <span>Preorder Total</span>
                      <span>${getPreorderTotal().toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>
                      ${getRegularTotal().toFixed(2)}
                      {discountValid && (
                        <span className="ml-2 text-green-600 font-semibold">
                          -25%
                        </span>
                      )}
                    </span>
                  </div>
                  {discountValid && (
                    <div className="flex justify-between">
                      <span>Discounted Subtotal</span>
                      <span>${getDiscountedTotal().toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    {getDiscountedTotal() > 50 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      <span>$4</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>
                      $
                      {(
                        Number(getDiscountedTotal().toFixed(2)) +
                        (getDiscountedTotal() > 50 ? 0 : 4)
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
                {hasPreorders && (
                  <p className="text-sm text-gray-600 mb-4">
                    Preorder will be placed once payment is completed or sent
                    through Wish.
                  </p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
