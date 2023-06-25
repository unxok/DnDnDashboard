import React from "react";
import upload from "../../../svgs/upload.svg";
import { useState } from "react";

export const UploadButton = () => {
  // logic

  const [isUploadModalShow, setUploadModalShow] = useState(false);

  return (
    <div>
      <div className="opacity-70 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110 hover:opacity-100 active:scale-90 active:duration-75">
        <img
          src={upload}
          onClick={() => {
            setUploadModalShow(true);
          }}
          width="50vh"
          height="auto"
        ></img>
      </div>
      {isUploadModalShow && (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-gray-500 bg-opacity-50 z-40">
          <div className="p-5 bg-primary shadow-lg border border-gray-700 z-50 flex flex-col rounded-lg items-center justify-center ">
            <div className="bg-base text-white p-3 m-3 w-96 flex justify-evenly rounded-xl shadow-lg border border-gray-800 ">
              <label htmlFor="pasteInput">Manually Paste :</label>
              <input
                className="text-black w-44 text-center rounded-md"
                name="pasteInput"
                key="pasteInput"
                type="text"
                placeholder="Paste Saved Text here"
              />
            </div>
            <div className="bg-base text-white p-3 w-96 flex items-center justify-evenly rounded-xl shadow-lg border border-gray-800 ">
              <label htmlFor="autoPaste">Paste From Clipboard :</label>
              <button
                name="autoPaste"
                className="bg-accent p-1 text-black rounded-lg border border-gray-800 shadow-lg transition ease-in-out delay-75 hover:shadow-md hover:shadow-gray-950 hover:scale-110 active:scale-90 active:delay-0 active:shadow-none "
              >
                Get Saved Text
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
