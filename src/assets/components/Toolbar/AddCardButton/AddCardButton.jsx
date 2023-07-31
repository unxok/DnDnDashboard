import React from "react";
import plus from "../../../svgs/plus.svg";
import { forwardRef } from "react";

export const AddCardButton = forwardRef(({ ...props }, ref) => {
  // logic

  return (
    <div
      ref={ref}
      className="opacity-70 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:opacity-100 active:scale-90 active:duration-75"
      {...props}
    >
      <img
        onClick={() => {
          console.log("clicked");
        }}
        src={plus}
        width="50vh"
        height="auto"
      ></img>
    </div>
  );
});
