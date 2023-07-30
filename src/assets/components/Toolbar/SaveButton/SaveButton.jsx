import React from "react";
import clipboard from "../../../svgs/clipboard.svg";
import { forwardRef } from "react";

export const SaveButton = forwardRef(
  ({ cards, triggerAlert, ...props }, ref) => {
    // logic

    const handleCopySave = async () => {
      const saveString = JSON.stringify(
        cards.map((obj) => {
          const newObj = { ...obj };
          newObj.element = newObj.element ? newObj.element.name : undefined;
          return newObj;
        })
      );
      try {
        await navigator.clipboard.writeText(saveString);
        triggerAlert("success", "Dashboard saved to clipboard");
        console.log("success");
      } catch (e) {
        console.log("failed to copy", e);
        triggerAlert("error", "Something went wrong :(");
      }
    };

    return (
      <div
        ref={ref}
        className="opacity-70 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:opacity-100 active:scale-90 active:duration-75"
        {...props}
      >
        <img
          src={clipboard}
          width="50vh"
          height="auto"
          onClick={handleCopySave}
        ></img>
      </div>
    );
  }
);
