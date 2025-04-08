import React from "react";
import {
  Search,
  User,
  ShoppingBag,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="grid grid-cols-3 items-center px-6 md:px-12 py-5 sticky top-0 bg-white border-b border-neutral-200 z-20 shadow-sm">
      {/* Left: Logo */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">
          Wintrex<span className="text-red-500">.</span>
        </h1>
      </div>

      {/* Center: Nav Links */}
      <nav className="flex justify-center space-x-14 text-xl font-medium text-neutral-600">
        <a href="#" className="hover:text-black transition">Home</a>
        <a href="#" className="hover:text-black transition">Shop</a>
        <a href="#" className="hover:text-black transition">About</a>
        <a href="#" className="hover:text-black transition">Contact</a>
      </nav>

      {/* Right: Search + Icons */}
      <div className="flex justify-end items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-4 pr-10 py-2 rounded-full border border-neutral-300 text-sm focus:outline-none shadow-sm w-40 md:w-56"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-black">
            <Search size={18} />
          </button>
        </div>

        {/* Icons */}
        <User className="cursor-pointer text-neutral-700 hover:text-black" />
        <ShoppingBag className="cursor-pointer text-neutral-700 hover:text-black" />
      </div>
    </header>
  );
};

export default Navbar;
