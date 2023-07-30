import React from "react";
import { AddCardButton } from "./AddCardButton/AddCardButton";
import { SaveButton } from "./SaveButton/SaveButton";
import { UploadButton } from "./UploadButton/UploadButton";
import { EditModeButton } from "./EditModeButton/EditModeButton";

export const Toolbar = ({
  isEditMode,
  updateEditMode,
  updateFormShow,
  cards,
  triggerAlert,
  isDragMode,
  updateDragMode,
}) => {
  // logic

  return (
    <div className="fixed left-5 top-5 flex flex-col items-center justify-center rounded-md bg-primary p-3">
      <AddCardButton
        updateFormShow={updateFormShow}
        triggerAlert={triggerAlert}
      />
      <SaveButton cards={cards} triggerAlert={triggerAlert}></SaveButton>
      <UploadButton
        updateFormShow={updateFormShow}
        triggerAlert={triggerAlert}
      />
      <EditModeButton
        isEditMode={isEditMode}
        updateEditMode={updateEditMode}
        triggerAlert={triggerAlert}
      />
    </div>
  );
};
