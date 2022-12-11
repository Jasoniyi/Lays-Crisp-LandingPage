import React, { useState } from "react";
import logo from "../assets/Logo.png";
import banner from "../images/banner.png";
import MobileMenu from "../components/MobileMenu";
import Button from "../components/UI/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-around items-center h-20">
          <div className="logo">
            <img src={logo} alt="logo" width={46} />
          </div>
          <span className="block md:hidden" onClick={handleOpen}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </span>
          <div className="hidden md:block">
            <ul className="flex flex-col-reverse md:flex-row space-x-7 text-sm font-light">
              <li>Products</li>
              <li>About Us</li>
              <li>Videos</li>
              <li>Recipes</li>
              <li>Where to Buy</li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col md:flex-row justify-between space-x-6">
            <input
              type="search"
              placeholder="Search collections Items or User"
              className="block w-80 rounded-md border border-gray-300 pl-2 pr-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2"
            />
            <FontAwesomeIcon icon={faCircleUser} size="2x" />
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
      {open ? <MobileMenu /> : null}
      <div className="flex flex-col-reverse md:flex-row justify-between md:h-[33em] px-10 bg-gradient-to-b from-[#14c5fa] to-[#80e1ffdb]">
        <div className="title flex flex-col md:py-28 md:w-[34em] md:pl-20 my-8">
          <div className="text-5xl md:text-6xl font-bold banner-text">
            Feel the Best Taste with Lays Crisps
          </div>
          <div className="desc text-sm py-4 font-light">
            Feel the best and awesome taste with Lays Crisps. There has been
            various kind of Crisps you can eat and feel the wonder taste of this
            awesome product.
          </div>
          <Button>All Crisps</Button>
        </div>
        <div className="banner-img md:mr-[-3em] mt-6">
          <img src={banner} alt="" className="w-96 md:w-32 lg:w-[33em]" />
        </div>
      </div>
    </>
  );
};

export default Banner;
