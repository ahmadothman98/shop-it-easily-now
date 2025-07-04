import Header from "../components/Header";
import Footer from "../components/Footer";
import { Info, Truck, RefreshCcw, CreditCard } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-10 flex-1">
        <h1 className="text-3xl font-bold mb-8 mt-4 lumine-title">About</h1>

        <div className="space-y-6 max-w-2xl mx-auto">
          {/* About Lumine */}
          <div className="bg-white border rounded-lg p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-gray-700" />
              <span className="font-semibold text-lg">About Lumině</span>
            </div>
            <p className="text-gray-700">
              Born along the Mediterranean coast of Lebanon. No loud logos, no
              distractions, just subtle details that speak for themselves.
            </p>
            <p className="text-gray-700">
              With clean lines, refined details, and accessible pricing, Lumině
              invites you to see things differently, and to be seen your way.
            </p>
          </div>

          {/* Shipping Info */}
          <div className="bg-white border rounded-lg p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="w-5 h-5 text-gray-700" />
              <span className="font-semibold text-lg">Shipping Info</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>We deliver all over Lebanon.</li>
              <li>You will receive your package within 2-3 business days.</li>
              <li>
                Your order will be delivered safely, with respectful drivers.
              </li>
            </ul>
          </div>

          {/* Exchange Policy */}
          <div className="bg-white border rounded-lg p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <RefreshCcw className="w-5 h-5 text-gray-700" />
              <span className="font-semibold text-lg">Exchange Policy</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                You can contact us to exchange your glasses within 3 days of
                receiving your order.
              </li>
              <li>We take the responsibility for the extra delivery fees.</li>
            </ul>
          </div>

          {/* Payment Method */}
          <div className="bg-white border rounded-lg p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-5 h-5 text-gray-700" />
              <span className="font-semibold text-lg">Payment Method</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>COD (Cash on delivery)</li>
              <li>Whish Money transfer</li>
              {/* <li>Credit/Debit card.</li> */}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
