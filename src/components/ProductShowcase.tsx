import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductShowcase = () => {
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(
      (item) =>
        item.id === product.id &&
        (item.color?.toLowerCase() || "") ===
          (product.color?.toLowerCase() || "")
    );
    const currentQuantity = existingItem ? existingItem.quantity : 0;

    if (currentQuantity < product.available_stock) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        color: product.color,
        available_stock: product.available_stock,
      });
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.error(
        `Failed to add ${product.name}. Maximum stock reached (${product.available_stock}).`
      );
    }
  };

  const products = [
    {
      id: 11,
      name: "Miami",
      color: "Pink",
      price: 20,
      available_stock: 4,
      image: "lumine-website-edited-(34-of-175).jpg",
    },
    {
      id: 1,
      name: "Soho",
      color: "Black",
      price: 19,
      available_stock: 12,
      image: "lumine website edited (5 of 175).jpg",
    },
    {
      id: 14,
      name: "Orbit",
      size: "small",
      color: "Black-lens-gold-metal",
      price: 45,
      available_stock: 1,
      image: "lumine website edited (1 of 175).jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Find your fit!
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
          {products.map((product) => (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link
                key={product.id}
                to={`/product/${product.id}/${product.color}`}
                className="group"
              >
                <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-square">
                  <img
                    src={
                      "https://wearlumine.com/qweqwe/sunglasses/" +
                      product.image
                    }
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className=" text-sm sm:text-base text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base md:text-xl font-bold">
                  ${product.price}
                </p>
              </Link>

              <Button
                onClick={() => handleAddToCart(product)}
                className="text-sm sm:text-base w-full bg-black text-white py-2 mt-2 rounded text-center"
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            key="all"
            to={`/collections?category=all`}
            className="group text-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-900 hover:bg-gray-50"
            >
              View all sunglasses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
