
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductShowcase = () => {
    const { addToCart } = useCart();
  
  const handleAddToCart = (product) => {
      console.log(product);
      
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    toast.success("Added to cart!");
  };

  const products = [
    {
        "id": 11,
        "name": "MIami",
        "color": "Pink",
        "price": 20,
        "available_stock": 4,
        "image": 
            "lumine-website-edited-(34-of-175).jpg"
        ,
    },
    {
        "id": 1,
        "name": "Soho",
        "color": "Black",
        "price": 19,
        "available_stock": 12,
        "image": 
            "lumine website edited (5 of 175).jpg"
        
    },
    {
        "id": 14,
        "name": "Orbit",
        "size": "small",
      "color": "Black-lens,gold-metal",
      "price": 45,
        "available_stock": 1,
        "image": 
            "lumine website edited (1 of 175).jpg"
        
    },
      
]

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
            <div style={{display: 'flex', flexDirection: 'column',}}>
            <Link
              key={product.id}
              to={`/product/${product.id}/${product.color}`}
              className="group text-center"
            >
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-square">
                <img
                  src={'https://wearlumine.com/qweqwe/sunglasses/'+product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-xl font-bold">${product.price}</p>
            </Link>

              <Button
              onClick={()=>handleAddToCart(product)}
                className="w-full bg-black text-white py-2 mt-2 rounded text-center">

                Add to Cart
              </Button>
            </div>

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
