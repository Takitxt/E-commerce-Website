import React from "react";
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Left Side - Dropdowns */}
      <div className="flex gap-6 items-center">
        <div className="flex items-center cursor-pointer gap-1">
          <span>WOMEN</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center cursor-pointer gap-1">
          <span>MEN</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
      
      {/* Center - Logo */}
      <h1 className="text-xl font-bold italic tracking-wide">IronFlex</h1>
      
      {/* Right Side - Search, Profile, and Cart */}
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-200 rounded-full px-3 py-1">
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent outline-none text-black px-2" 
          />
          <Search className="w-5 h-5 text-black cursor-pointer" />
        </div>
        <User className="w-6 h-6 cursor-pointer" />
        <ShoppingCart className="w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;