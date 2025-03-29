import React from "react";

const CustomButton = ({ children, className }) => (
  <button className={`mt-4 px-6 py-2 rounded-full text-white ${className}`}>
    {children}
  </button>
);

export default CustomButton;
