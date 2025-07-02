const SignaturePackaging = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4" style={{ margin: 0 }}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              style={{ width: "500px" }}
              src="https://wearlumine.com/qweqwe/imgs/packaging.jpg?w=600&h=400&fit=crop"
              alt="Signature Packaging"
              className="w-full rounded-lg"
            />
          </div>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Each pair is carefully packaged for its journey to you.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignaturePackaging;
