import { Button } from "@/components/ui/button";

const FoosingPart = () => {
  return (
    <section
      className="py-16 bg-white"
      style={{
        backgroundColor: "rgb(249 250 251)",
        paddingBlock: "20px",
        marginBlockEnd: "40px",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Top two images */}
        <div className="flex flex-row gap-6 mb-10 w-full max-w-3xl justify-center">
          <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden aspect-square w-1/2 h-44 sm:h-60 transition-transform hover:scale-105">
            <img
              src="https://wearlumine.com/qweqwe/imgs/foosing-1.jpg"
              alt="Foosing Img 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden aspect-square w-1/2 h-44 sm:h-60 transition-transform hover:scale-105">
            <img
              src="https://wearlumine.com/qweqwe/imgs/foosing.jpg"
              alt="Foosing Img 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Quote */}
        <div className="text-center mb-10 w-full max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Cover your eyes, reveal your edge.
          </h2>
          <div className="mx-auto w-16 border-b-2 border-gray-300 my-4" />
        </div>
        {/* Bottom image */}
        <div className="w-full max-w-2xl flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full flex items-center justify-center mb-3 border border-gray-100">
            <img
              src="https://wearlumine.com/qweqwe/imgs/packaging.jpg?w=600&h=400&fit=crop"
              alt="Foosing Packaging"
              className="object-contain w-full max-h-72 lg:max-h-[28rem] transition-transform duration-300 hover:scale-105"
              style={{ background: "#f3f4f6" }}
            />
          </div>
          <span className="text-base text-gray-700 font-medium text-center px-2">
            Each pair is carefully packaged for its journey to you.
          </span>
        </div>
      </div>
    </section>
  );
};

export default FoosingPart;
