import React from "react";
import cloudupload from "../../../svgs/cloud-upload.svg";

export const UploadButton = ({ updateUploadFormShow }) => {
  // logic

  return (
    <div>
      <div className="opacity-70 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110 hover:opacity-100 active:scale-90 active:duration-75">
        <img
          src={cloudupload}
          onClick={() => {
            updateUploadFormShow(true);
          }}
          width="50vh"
          height="auto"
        ></img>
      </div>
    </div>
  );
};
