import React from "react";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 py-20 bg-neutral-100">
      {/* Left Content */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 leading-tight">
          Fuel Your Grind with <span className="text-red-500">Wintrex</span>
        </h1>
        <p className="text-neutral-600 text-lg md:text-xl max-w-lg">
          Premium gym wear and performance supplements crafted for serious athletes.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:opacity-90 transition">
            Shop Now
          </button>
          <button className="px-6 py-3 border border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition">
            Explore Gear
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 flex justify-center">
        <img
          src="/MainPage.jpeg"
          alt="Gym Model"
          className="rounded-2xl shadow-lg max-h-[500px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
