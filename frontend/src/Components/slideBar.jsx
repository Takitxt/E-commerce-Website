import React, { useState, useEffect } from "react";

const images = [
  "/download-3.jpeg",
  "/download.jpeg",
  "/download2.jpeg"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Promo Strip */}
      <div className="w-full bg-gray-900 text-white text-center py-2 text-sm font-medium">
        🚀 Limited Time Offer: Get 20% Off on Your First Order! Use Code: WELCOME20
      </div>
      
      <header className="relative w-full h-[500px] flex items-center justify-center text-white overflow-hidden">
        {/* Image Container */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={images[currentIndex]}
            alt="Hero"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
        </div>

        {/* Translucent Overlay and Text (Top Left) */}
        <div className="absolute top-6 left-6 z-10 text-white bg-black bg-opacity-50 p-3 rounded-lg">
          <h1 className="text-xl font-semibold uppercase">Unleash Your Strength</h1>
          <p className="text-sm">Premium athletic wear for the modern warrior.</p>
        </div>

        {/* Call to Action Button */}
        <div className="absolute bottom-12 z-10 text-center">
          <button className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white">
            Shop Now
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
