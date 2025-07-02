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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
        className=" container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="w-64 h-64 shadow-2xl w-full sm:w-64 bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-square">
          <img
            src={"https://wearlumine.com/qweqwe/imgs/foosing-1.jpg"}
            alt="Foosing Img"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-64 h-64 shadow-2xl w-full sm:w-64 bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-square">
          <img
            src={"https://wearlumine.com/qweqwe/imgs/foosing.jpg"}
            alt="Foosing Img"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Cover your eyes, reveal your edge.
        </h2>
      </div>
    </section>
  );
};

export default FoosingPart;
