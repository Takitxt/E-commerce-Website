import React from "react";

const categories = [
  {
    name: "Clothing",
    video:
      "frontend/src/assets/video1.mp4", 
    isVideo: true,
  },
  {
    name: "Supplements",
    image:
      "",
    isVideo: false,
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1600180758890-d3f6f3b4f8a7?auto=format&fit=crop&w=800&q=80",
    isVideo: false,
  },
];

const CategoryGrid = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-900">
        Shop by Category
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
          >
            {cat.isVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[300px] object-cover"
              >
                <source src={cat.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-[300px] object-cover"
              />
            )}

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold group-hover:scale-110 transition-transform">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
