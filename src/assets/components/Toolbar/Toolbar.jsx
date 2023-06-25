import React from "react";
import { AddCardButton } from "./AddCardButton/AddCardButton";
import { SaveButton } from "./SaveButton/SaveButton";
import { UploadButton } from "./UploadButton/UploadButton";

export const Toolbar = ({ onClick, cards, triggerAlert }) => {
  // logic

  return (
    <div className="fixed flex-col left-5 top-5 p-3 flex items-center justify-center bg-primary rounded-md">
      <AddCardButton onClick={onClick} triggerAlert={triggerAlert} />
      <SaveButton cards={cards} triggerAlert={triggerAlert}></SaveButton>
      <UploadButton triggerAlert={triggerAlert} />
    </div>
  );
};
