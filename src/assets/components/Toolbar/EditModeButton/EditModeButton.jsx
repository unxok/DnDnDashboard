import React from "react";
import pencil from "../../../svgs/pencil.svg";
import pencilActive from "../../../svgs/pencil-active.svg";

export const EditModeButton = ({ updateEditMode, isEditMode }) => {
  // logic

  return !isEditMode ? (
    <div className="opacity-70 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110 hover:opacity-100 active:scale-90 active:duration-75">
      <img
        src={pencil}
        width="50vh"
        height="auto"
        onClick={() => {
          updateEditMode();
        }}
      ></img>
    </div>
  ) : (
    <div className="opacity-70 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110 hover:opacity-100 active:scale-90 active:duration-75">
      <img
        src={pencilActive}
        width="50vh"
        height="auto"
        onClick={() => {
          updateEditMode();
        }}
      ></img>
    </div>
  );
};
