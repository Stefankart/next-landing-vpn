import React from "react";

const ButtonOutline = ({ children }) => {
  return (
<button className="font-medium tracking-wide py-3 px-6 sm:px-10 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
