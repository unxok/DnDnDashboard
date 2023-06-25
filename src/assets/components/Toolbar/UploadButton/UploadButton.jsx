import React from "react";
import upload from "../../../svgs/upload.svg";

export const UploadButton = ({ updateUploadModalShow }) => {
  // logic

  return (
    <div>
      <div className="opacity-70 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110 hover:opacity-100 active:scale-90 active:duration-75">
        <img
          src={upload}
          onClick={() => {
            updateUploadModalShow(true);
          }}
          width="50vh"
          height="auto"
        ></img>
      </div>
    </div>
  );
};
