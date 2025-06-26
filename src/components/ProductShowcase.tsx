
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const products = [
    {
      id: "plastic-retro",
      name: "Plastic Retro",
      price: 19,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=200&fit=crop"
    },
    {
      id: "retro-polarized", 
      name: "Retro Polarized",
      price: 16,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop"
    },
    {
      id: "vintage-oval",
      name: "Vintage Oval", 
      price: 17,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop Lumine's sunglasses now!
          </h2>
          <p className="text-gray-600 text-lg">
            Any foooooosing quote here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group text-center"
            >
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-xl font-bold">${product.price}</p>
              <div className="w-full bg-black text-white py-2 mt-2 rounded text-center">
                Add to Cart
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-300 text-gray-900 hover:bg-gray-50"
          >
            View all sunglasses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
