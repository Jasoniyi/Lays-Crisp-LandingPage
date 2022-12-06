import React from "react";

const MobileMenu = () => {
  return (
    <div className="">
      <ul className="flex flex-col justify-center items-center gap-3 text-lg transition-all duration-300 ease-in-out py-4">
        <li>Products</li>
        <li>About Us</li>
        <li>Videos</li>
        <li>Recipes</li>
        <li>Where to Buy</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
