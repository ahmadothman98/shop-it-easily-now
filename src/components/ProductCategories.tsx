import { Link } from "react-router-dom";

const ProductCategories = () => {
  const categories = [
    {
      code: "metals",
      name: "Lumine Metals",
      image:
        "https://wearlumine.com/qweqwe/imgs/metals.jpg?w=400&h=400&fit=crop",
    },
    {
      code: "essentials",
      name: "Lumine essentials",
      image:
        "https://wearlumine.com/qweqwe/imgs/essentials.jpg?w=400&h=400&fit=crop",
    },
    {
      code: "special",
      name: "The Limited Edit",
      image:
        "https://wearlumine.com/qweqwe/imgs/limited.jpg?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/collections?category=${category.code.toLowerCase()}`}
              className="group text-center"
            >
              <div className="relative overflow-hidden rounded-full w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 mx-auto mb-2 sm:mb-4 shadow-md">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
