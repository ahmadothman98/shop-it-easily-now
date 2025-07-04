import { MessageCircle, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LUMINĚ</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MessageCircle size={16} className="mr-2" />
                +961 76 947 566
              </p>
              <p>luminelb.co@gmail.com</p>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  New arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <div className="flex space-x-4 mb-6">
              <Facebook
                size={20}
                className="hover:text-gray-300 cursor-pointer"
              />
              <Instagram
                size={20}
                className="hover:text-gray-300 cursor-pointer"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">@luminelb</p>
            {/* <button className="bg-white text-black px-6 py-2 rounded text-sm font-semibold hover:bg-gray-200 transition-colors">
              SIGN UP
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
