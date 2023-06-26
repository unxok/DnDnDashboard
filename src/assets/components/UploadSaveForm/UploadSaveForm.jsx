import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { getElementByName } from "../ConfigMap/ConfigMap";

export const UploadSaveForm = ({
  triggerAlert,
  updateUploadFormShow,
  updateCardsFromUpload,
}) => {
  // logic
  const [pastedSave, setPastedSave] = useState(null);
  const [firefoxErr, setFirefoxErr] = useState(false);

  useEffect(() => {
    setFirefoxErr(false);
  }, [pastedSave]);

  const handleInputChange = ({ target: { value } }) => {
    setPastedSave(value);
  };

  const handleAutoPaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      text && setPastedSave(text);
      triggerAlert("success", "Save received from clipboard");
    } catch (error) {
      if (error instanceof TypeError) {
        setFirefoxErr(true);
      }
      triggerAlert("error", `Error Occurred: ${error}`);
    }
  };

  const handleUploadSave = () => {
    let tmp = JSON.parse(pastedSave);
    const parsedSave = tmp.map((obj) => {
      obj.element = getElementByName(obj.element);
      return obj;
    });
    updateCardsFromUpload(parsedSave);
    triggerAlert("success", "Saved Dashboard loaded");
    setPastedSave(null);
    setFirefoxErr(false);
    updateUploadFormShow(false);
  };

  const cancelUpload = () => {
    // clear loaded save if needed
    setPastedSave(null);
    setFirefoxErr(false);
    updateUploadFormShow(false);
  };

  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-gray-500 bg-opacity-50 z-40">
      <div className="p-5 bg-primary shadow-lg border border-gray-700 z-50 flex flex-col rounded-lg items-center justify-center ">
        <div className="bg-base text-white p-3 m-3 w-96 flex justify-evenly rounded-xl shadow-lg border border-gray-800">
          <label htmlFor="pasteInput">Manually Paste :</label>
          <input
            className="text-black w-44 text-center rounded-md disabled:cursor-not-allowed"
            name="pasteInput"
            key="pasteInput"
            id="pastedInput"
            disabled={pastedSave ? true : false}
            type="text"
            onChange={handleInputChange}
            placeholder="Paste Saved Text here"
          />
        </div>
        <div className="bg-base text-white p-3 w-96 flex items-center justify-evenly rounded-xl shadow-lg border border-gray-800 ">
          <label htmlFor="autoPaste">Paste From Clipboard :</label>
          <button
            name="autoPaste"
            onClick={handleAutoPaste}
            className="bg-accent text-black rounded-lg border border-gray-800 shadow-lg transition ease-in-out delay-75 hover:shadow-md hover:shadow-gray-950 hover:scale-110 active:scale-90 active:delay-0 active:shadow-none p-2"
          >
            Get Saved Text
          </button>
        </div>
        <div
          name="button container"
          className="flex flex-col items-center justify-center mt-4"
        >
          <div>
            <button
              disabled={pastedSave ? false : true}
              key="uploadSaveButton"
              onClick={handleUploadSave}
              className="bg-accent m-2 p-2 rounded-lg border border-gray-800 shadow-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-green-400 hover:shadow-md hover:shadow-gray-950 disabled:opacity-25 disabled:hover:scale-90 disabled:hover:bg-gray-300 disabled:hover:shadow-none disabled:hover:cursor-not-allowed active:scale-90 active:delay-0 active:shadow-none"
            >
              Upload
            </button>
            <button
              onClick={cancelUpload}
              key="cancelSaveButton"
              className="bg-accent m-2 p-2 rounded-lg border border-gray-800 shadow-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-red-400 hover:shadow-md hover:shadow-gray-950 active:scale-90 active:delay-0 active:shadow-none"
            >
              Cancel
            </button>
          </div>
          {firefoxErr && (
            <div className="absolute top-60 text-center flex flex-col items-center justify-center w-max ">
              <div className="flex flex-row items-center justify-center p-2 bg-yellow-300 bg-opacity-60 rounded-lg">
                Using Firefox? enter&nbsp;
                <pre className="bg-gray-400 bg-opacity-80 rounded-md pl-2 pr-2 h-max">
                  about:config
                </pre>
                &nbsp;in your URL bar, then set&nbsp;
                <pre className="bg-gray-400 bg-opacity-80 rounded-md pl-2 pr-2 h-max">
                  dom.events.asyncClipboard.readText
                </pre>
                &nbsp;to&nbsp;
                <pre className="bg-gray-400 bg-opacity-80 rounded-md pl-2 pr-2 h-max">
                  true
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
