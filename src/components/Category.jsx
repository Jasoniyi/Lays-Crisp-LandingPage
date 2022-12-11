import React from "react";
import yog from "../assets/yogurt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { data } from ".././components/UI/data";
import Button from "../components/UI/button";

const Category = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-24">
        <h5 className="title font-semibold text-2xl md:text-4xl">
          Find Best Taste Here
        </h5>
        <p className="w-[22em] md:w-[28em] text-sm text-center py-5">
          Feel the best and awesome taste with Lays Crisps. There has been
          various kind of Crisps you can eat and feel
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-between flex-wrap md:px-28 gap-20 mb-20 ">
        {data.map((pdcts) => (
          <div className="flex flex-col" key={pdcts.id}>
            <img src={pdcts.image} className="w-[16em]" />
            <span className="flex justify-end add-icon">
              <FontAwesomeIcon
                icon={faPlusCircle}
                size="2x"
                className="cursor-pointer"
              />
            </span>
            <div className="desc font-semibold pt-2">${pdcts.price}</div>
            <span className="text-[#5D696D] text-sm">{pdcts.desc}</span>
            <span className="flex gap-2 text-[#FBB616] pt-2">
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center cursor-pointer">
        <Button>All Crisp</Button>
      </div>
    </div>
  );
};

export default Category;
