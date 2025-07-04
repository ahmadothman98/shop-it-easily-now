import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { toast } from "sonner";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  available_stock?: number;
  preorder?: boolean;
  color?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, color?: string) => void;
  updateQuantity: (id: string, quantity: number, color?: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCartItems(JSON.parse(storedCart));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (cartItem) => cartItem.id === item.id && cartItem.color === item.color
      );
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id && cartItem.color === item.color
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prev, { ...item }];
    });
    toast.success(`${item.name} added to cart!`);
  };

  const removeFromCart = (id: string, color?: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.color === (color || item.color))
      )
    );
  };

  const updateQuantity = (id: string, quantity: number, color?: string) => {
    setCartItems((prev) => {
      const item = prev.find(
        (cartItem) =>
          cartItem.id === id && cartItem.color === (color || cartItem.color)
      );
      if (item && quantity > (item.available_stock || Infinity)) {
        toast.error(
          `Failed to update ${item.name}. Maximum stock reached (${item.available_stock}).`
        );
        return prev;
      }
      if (quantity <= 0) {
        return prev.filter(
          (cartItem) =>
            !(
              cartItem.id === id && cartItem.color === (color || cartItem.color)
            )
        );
      }
      return prev.map((cartItem) =>
        cartItem.id === id && cartItem.color === (color || cartItem.color)
          ? { ...cartItem, quantity }
          : cartItem
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
