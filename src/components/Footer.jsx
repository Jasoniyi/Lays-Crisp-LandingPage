import React from "react";
import chips from "../assets/lays.png";
import logo from "../assets/Logo.png";
import social from "../assets/social.png";

const Footer = () => {
  return (
    <div className="bg-[#FFF7E3]">
      <div className="py-10 flex flex-col-reverse md:flex-row md:space-x-16">
        <div className="md:px-28 flex flex-col space-y-4 pt-16 space-x-5">
          <img src={logo} alt="" className="w-[3em] ml-3" />
          <span className="">
            <ul className="flex flex-col md:flex-row gap-6">
              <li>Products</li>
              <li>About Us</li>
              <li>Videos</li>
              <li>Recipes</li>
              <li>Where to Buy</li>
            </ul>
          </span>
          <h4 className="font-bold">Follow Us</h4>
          <span className="">
            <img src={social} alt="" className="w-[7em]" />
          </span>
          <p className="text-sm">Copyright © 2022 UIHUT all rights reserved.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={chips} alt="" className="md:w-[28em] w-[21em]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
