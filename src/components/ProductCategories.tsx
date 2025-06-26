
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const categories = [
    {
      name: "Minimalist",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop"
    },
    {
      name: "Retro",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop"
    },
    {
      name: "Special",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/collections?category=${category.name.toLowerCase()}`}
              className="group text-center"
            >
              <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
