import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import model from "../assets/model.png";

const testimonials = () => {
  return (
    <div className="my-20 bg-[#80E2FF]">
      <div className="flex flex-col-reverse items-center md:flex-row md:space-x-4 justify-around py-[5em]">
        <div className="flex flex-col space-y-10 pt-20">
          <h5 className="text-2xl md:text-4xl font-semibold">
            What’s Our Customer Say
          </h5>
          <p className="w-[25em] text-sm italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="border-[.5px] border-[#33D1FF]"></div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-semibold">Annara Veirmont</span>
              <span className="">23 years Old</span>
            </div>
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
              <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
            </div>
          </div>
        </div>
        <div className="">
          <img src={model} alt="" className="w-[18em] md:w-[23em]" />
        </div>
      </div>
    </div>
  );
};

export default testimonials;
