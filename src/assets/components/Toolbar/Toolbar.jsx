import React from "react";
import { AddCardButton } from "./AddCardButton/AddCardButton";
import { SaveButton } from "./SaveButton/SaveButton";
import { UploadButton } from "./UploadButton/UploadButton";
import { EditModeButton } from "./EditModeButton/EditModeButton";
import { DragModeButton } from "./DragModeButton/DragModeButton";

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
    <div className="fixed flex-col left-5 top-5 p-3 flex items-center justify-center bg-primary rounded-md">
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
      <DragModeButton
        isDragMode={isDragMode}
        updateDragMode={updateDragMode}
        triggerAlert={triggerAlert}
      />
    </div>
  );
};
