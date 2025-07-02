import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
      }}
      className="relative bg-black text-white min-h-[70vh] flex items-center"
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40">
        <img
          style={{ opacity: "25%" }}
          src="https://wearlumine.com/qweqwe/imgs/hero.jpg"
          alt="Sunglasses background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Not Made To Hide.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Premium sunglasses crafted for those who see differently.
        </p>
        <Link
          key="all"
          to={`/collections?category=all`}
          className="group text-center"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 text-lg"
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
