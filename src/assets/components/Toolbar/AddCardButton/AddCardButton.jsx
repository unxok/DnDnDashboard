import React from "react";
import plus from "../../../svgs/plus.svg";

export const AddCardButton = ({ onClick }) => {
  // logic

  return (
    <div className="opacity-70 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110 hover:opacity-100 active:scale-90 active:duration-75">
      <img src={plus} width="50vh" height="auto" onClick={onClick}></img>
    </div>
  );
};
