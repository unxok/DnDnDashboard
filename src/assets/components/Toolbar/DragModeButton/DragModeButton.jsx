import React from "react";
import cursor from "../../../svgs/cursor.svg";
import cursorclicked from "../../../svgs/cursor-clicked.svg";

export const DragModeButton = ({ isDragMode, updateDragMode }) => {
  // logic

  return isDragMode ? (
    <div className="opacity-70 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110 hover:opacity-100 active:scale-90 active:duration-75">
      <img
        src={cursor}
        width="50vh"
        height="auto"
        onClick={() => {
          updateDragMode();
        }}
      ></img>
    </div>
  ) : (
    <div className="opacity-70 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110 hover:opacity-100 active:scale-90 active:duration-75">
      <img
        src={cursorclicked}
        width="50vh"
        height="auto"
        onClick={() => {
          updateDragMode();
        }}
      ></img>
    </div>
  );
};
