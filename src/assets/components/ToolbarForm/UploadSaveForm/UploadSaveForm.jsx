import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { getElementByName } from "../../ConfigMap/ConfigMap";
import * as Dialog from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { AlertContext } from "../../../../App";
import { useContext } from "react";

export const UploadSaveForm = forwardRef(({ updateCardsFromUpload }, ref) => {
  // logic
  const [pastedSave, setPastedSave] = useState(null);
  const [firefoxErr, setFirefoxErr] = useState(false);
  const triggerAlert = useContext(AlertContext);

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
  };

  const cancelUpload = () => {
    // clear loaded save if needed
    setPastedSave(null);
    setFirefoxErr(false);
  };

  return (
    <Dialog.Content
      ref={ref}
      className="fixed left-1/2 top-1/2 flex w-1/3 -translate-x-1/2 -translate-y-1/2 flex-col items-end justify-between rounded-md border-black bg-primary p-5 text-stone-300"
    >
      <div className="mb-5 flex w-full flex-col items-start">
        <Dialog.Title className="text-2xl">Import Dashboard</Dialog.Title>
        <Dialog.Description>
          Import a saved dashboard. This will overwrite your current save!
        </Dialog.Description>
      </div>
      <div className="mb-3 flex w-full justify-evenly rounded-xl border border-gray-800 bg-base p-2 text-white shadow-lg">
        <label htmlFor="pasteInput">Manually Paste :</label>
        <input
          className="w-44 rounded-md text-center text-black disabled:cursor-not-allowed"
          name="pasteInput"
          key="pasteInput"
          id="pastedInput"
          disabled={pastedSave ? true : false}
          type="text"
          onChange={handleInputChange}
          placeholder="Paste Saved Text here"
        />
      </div>
      <div className="flex w-full items-center justify-evenly rounded-xl border border-gray-800 bg-base p-2 text-white shadow-lg ">
        <label htmlFor="autoPaste">Paste From Clipboard :</label>
        <button
          name="autoPaste"
          onClick={handleAutoPaste}
          className="rounded-lg border border-gray-800 bg-accent p-2 text-black shadow-lg transition delay-75 ease-in-out hover:scale-110 hover:shadow-md hover:shadow-gray-950 active:scale-90 active:shadow-none active:delay-0"
        >
          Get Saved Text
        </button>
      </div>
      <div
        name="button container"
        className="mt-2 flex flex-col items-center justify-center"
      >
        <div>
          <Dialog.Close asChild>
            <button
              disabled={pastedSave ? false : true}
              key="uploadSaveButton"
              onClick={handleUploadSave}
              className="rounded-lg border border-gray-800 bg-accent p-2 text-black shadow-lg transition delay-75 ease-in-out hover:scale-110 hover:bg-green-400 hover:shadow-md hover:shadow-gray-950 active:scale-90 active:shadow-none active:delay-0 disabled:opacity-25 disabled:hover:scale-90 disabled:hover:cursor-not-allowed disabled:hover:bg-gray-300 disabled:hover:shadow-none"
            >
              Upload
            </button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button
              onClick={cancelUpload}
              key="cancelSaveButton"
              className="absolute right-4 top-2 text-2xl"
            >
              ×
            </button>
          </Dialog.Close>
        </div>
        {firefoxErr && (
          <div className="absolute top-60 flex w-max flex-col items-center justify-center text-center ">
            <div className="flex flex-row items-center justify-center rounded-lg bg-yellow-300 bg-opacity-60 p-2">
              Using Firefox? enter&nbsp;
              <pre className="h-max rounded-md bg-gray-400 bg-opacity-80 pl-2 pr-2">
                about:config
              </pre>
              &nbsp;in your URL bar, then set&nbsp;
              <pre className="h-max rounded-md bg-gray-400 bg-opacity-80 pl-2 pr-2">
                dom.events.asyncClipboard.readText
              </pre>
              &nbsp;to&nbsp;
              <pre className="h-max rounded-md bg-gray-400 bg-opacity-80 pl-2 pr-2">
                true
              </pre>
            </div>
          </div>
        )}
      </div>
    </Dialog.Content>
  );
});
