import React from "react";
import save from "../../../svgs/save.svg";

export const SaveButton = ({ cards, triggerAlert }) => {
  // logic

  const handleCopySave = async () => {
    const saveString = JSON.stringify(
      cards.map((obj) => {
        const newObj = { ...obj };
        console.log("element :", newObj.element);
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
    <div className="opacity-70 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110 hover:opacity-100 active:scale-90 active:duration-75 ">
      <img src={save} width="50vh" height="auto" onClick={handleCopySave}></img>
    </div>
  );
};
