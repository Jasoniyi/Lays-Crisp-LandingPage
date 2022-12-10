import React from "react";
import chips from "../assets/chips.png";
import blt from "../assets/blt.png";
import Button from "../components/UI/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="md:pl-28 pl-10">
      <h4 className="title text-2xl md:text-3xl font-bold mt-28 w-[13em] capitalize">
        We provide the tasty and best chips for you!
      </h4>
      <div className="flex justify-end">
        <img src={chips} alt="chips" className="w-20 md:w-64" />
      </div>
      <div className="flex flex-col md:flex-row gap-28">
        <div className="w-3/5">
          <img src={blt} alt="blt" className="md:w-[27em]" />
        </div>
        <div className="flex flex-col gap-3 md:mt-24">
          <h6 className="font-bold title text-xl">LAY'S® BLT Flavored</h6>
          <div className="flex gap-2 text-[#FBB616] ">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <span className="text-xs text-[#5D696D]">Price</span>
          <span className="text-md font-bold">$3.93</span>
          <div className="desc text-[#5D696D] text-sm font-light md:w-3/5">
            It all starts with farm-grown potatoes, cooked and seasoned to
            perfection. Then we add the sweet taste of honey and the spicy kick
            of BBQ sauce. So every LAY'S potato chip is perfectly crispy and
            delicious. Happiness in Every Bite.
          </div>
          <div className="flex md:flex-row pt-4 gap-6 items-center">
            <Button>Buy Now</Button>
            <span className="flex items-center text-sm">
              See More
              <FontAwesomeIcon icon={faAngleRight} className="pl-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
