import React from "react";

const button = ({ children }) => {
  return (
    <>
      <button className="bg-[#182327] px-4 rounded-md text-white w-28 py-2">
        {children}
      </button>
    </>
  );
};

export default button;
