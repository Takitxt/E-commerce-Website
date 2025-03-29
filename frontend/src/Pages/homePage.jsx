import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/slideBar";
import CustomButton from "../Components/Skeletons/customButton";


  const HomePage = () => {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <HeroSection />
        
        {/* Featured Collections */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Men's Collection</h3>
              <p className="text-gray-600 mt-2">Discover the latest styles.</p>
              <CustomButton className="bg-gray-800">Explore</CustomButton>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Women's Collection</h3>
              <p className="text-gray-600 mt-2">Style meets performance.</p>
              <CustomButton className="bg-gray-800">Explore</CustomButton>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Accessories</h3>
              <p className="text-gray-600 mt-2">Complete your look.</p>
              <CustomButton className="bg-gray-800">Explore</CustomButton>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default HomePage;
  