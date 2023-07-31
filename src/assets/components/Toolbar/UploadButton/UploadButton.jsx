import React from "react";
import cloudupload from "../../../svgs/cloud-upload.svg";
import { forwardRef } from "react";

export const UploadButton = forwardRef(({ ...props }, ref) => {
  // logic

  return (
    <div
      ref={ref}
      className="opacity-70 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:opacity-100 active:scale-90 active:duration-75"
      {...props}
    >
      <img src={cloudupload} width="50vh" height="auto"></img>
    </div>
  );
});
