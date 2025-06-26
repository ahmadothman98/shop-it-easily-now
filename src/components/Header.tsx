
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-black text-white relative z-50">
      {/* Top bar with offer */}
      <div className="bg-gray-800 text-center py-2 text-sm">
        Sign up now to get 25% off on your first order!
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wider">
            LUMINE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/collections" className="hover:text-gray-300 transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Search size={20} className="cursor-pointer hover:text-gray-300" />
            <User size={20} className="cursor-pointer hover:text-gray-300" />
            <Link to="/cart" className="relative cursor-pointer hover:text-gray-300">
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-4 text-center">
              <Link to="/" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/collections" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Collections</Link>
              <Link to="/about" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
