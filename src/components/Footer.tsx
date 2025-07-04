import { MessageCircle, Facebook, Instagram, Link } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp, } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LUMINÉ</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                +961 76 947 566
                  <a href="https://wa.me/+96176947566" target="_blank">
                <FaWhatsapp size={20}
                  className="mx-4 hover:text-gray-300 cursor-pointer">
                </FaWhatsapp>
                  </a>
              </p>
              <p>team@wearlumine.com</p>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="collections" className="hover:text-white transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="collections" className="hover:text-white transition-colors">
                  New arrivals
                </a>
              </li>
              <li>
                  <a
                                    href={`/product/5/Yellow`}

                                     className="hover:text-white transition-colors">
                  Best Seller
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-300">
              <li>

                <a href="about#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="about#shopping_info" className="hover:text-white transition-colors">
                  Shipping info
                </a>
              </li>
              <li>
                <a href="about#exchange_policy" className="hover:text-white transition-colors">
                  Exchange Policy
                </a>
              </li>
              <li>
                <a href="about#payment_method" className="hover:text-white transition-colors">
                  Payment Method
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <div className="flex space-x-4 mb-6">

              <a target="_blank" href="https://www.facebook.com/profile.php?id=61577128331403">
              <FaFacebook
                size={20}
                className="hover:text-gray-300 cursor-pointer"
                />
                </a>
              <a href="https://www.instagram.com/luminelb?igsh=MWd2bnRueXNucnFwbQ==" target="_blank">
              <FaInstagram
                size={20}
                className="hover:text-gray-300 cursor-pointer"
                />
                </a>
              <a href="https://www.tiktok.com/@luminelb?_t=ZS-8xGPvUs80KG&_r=1" target="_blank">
                            <FaTiktok
                size={20}
                className="hover:text-gray-300 cursor-pointer"
                />
                </a>
              <a href=" https://x.com/lblumine?t=4_vZNlJ5W7Dd7lFe9zJKJw&s=09" target="_blank">
                            <span
                className="hover:text-gray-300 cursor-pointer"
                />
                </a>
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
