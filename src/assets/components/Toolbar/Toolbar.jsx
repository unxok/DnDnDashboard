import React from "react";
import { AddCardButton } from "./AddCardButton/AddCardButton";
import { SaveButton } from "./SaveButton/SaveButton";
import { UploadButton } from "./UploadButton/UploadButton";
import { EditModeButton } from "./EditModeButton/EditModeButton";
import { TooltipProvider } from "./ToolTip/TooltipProvider";

export const Toolbar = ({
  isEditMode,
  updateEditMode,
  updateFormShow,
  cards,
  triggerAlert,
}) => {
  // logic

  return (
    <div className="fixed left-5 top-5 flex flex-col items-center justify-center rounded-md bg-primary p-3">
      <TooltipProvider text="Add a new card to your dashboard">
        <AddCardButton updateFormShow={updateFormShow} />
      </TooltipProvider>
      <TooltipProvider text="Save a copy of your dashboard">
        <SaveButton cards={cards} triggerAlert={triggerAlert}></SaveButton>
      </TooltipProvider>
      <TooltipProvider text="Upload a new dashboard from a save">
        <UploadButton updateFormShow={updateFormShow} />
      </TooltipProvider>

      <EditModeButton isEditMode={isEditMode} updateEditMode={updateEditMode} />
    </div>
  );
};
