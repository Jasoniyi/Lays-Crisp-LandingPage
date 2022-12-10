import React from "react";
import Button from "../components/UI/button";

const findStore = () => {
  return (
    <div className="bg-find-store bg-cover bg-no-repeat">
      <div className="bg-[#ffd26a61] flex flex-col items-center py-16 text-center space-y-4">
        <h4 className="text-4xl title font-semibold w-[9em]">
          Find a Crisps Store Near You
        </h4>
        <p className="text-sm w-[26em]">
          Feel the best and awesome taste with Lays Crisps. There has been
          various kind of Crisps you can eat and feel.
        </p>
        <Button>Find Store</Button>
      </div>
    </div>
  );
};

export default findStore;
