import React from "react";

const button = ({ children }) => {
  return (
    <>
      <button className="bg-black px-4 rounded-md text-white w-28 py-2">
        {children}
      </button>
    </>
  );
};

export default button;
