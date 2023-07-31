import React from "react";
import { AddCardButton } from "./AddCardButton/AddCardButton";
import { SaveButton } from "./SaveButton/SaveButton";
import { UploadButton } from "./UploadButton/UploadButton";
import { EditModeButton } from "./EditModeButton/EditModeButton";
import { TooltipProvider } from "./ToolTip/TooltipProvider";
import { FormProvider } from "../ToolbarForm/FormProvider.tsx";
import { AddCardForm } from "../ToolbarForm/AddCardForm/AddCardForm";
import { UploadSaveForm } from "../ToolbarForm/UploadSaveForm/UploadSaveForm";
import { useRef } from "react";

export const Toolbar = ({
  isEditMode,
  updateEditMode,
  updateCardsFromUpload,
  cards,
  selectedTypeConfig,
  setSelectedTypeConfig,
}) => {
  // logic

  const addFormRef = useRef();
  const uploadFormRef = useRef();

  return (
    <div className="fixed left-5 top-5 flex flex-col items-center justify-center rounded-md bg-primary p-3">
      <FormProvider
        form={
          <AddCardForm
            ref={addFormRef}
            setSelectedTypeConfig={setSelectedTypeConfig}
            selectedTypeConfig={selectedTypeConfig}
          />
        }
      >
        <AddCardButton />
      </FormProvider>
      <TooltipProvider text="Save a copy of your dashboard">
        <SaveButton cards={cards}></SaveButton>
      </TooltipProvider>
      <FormProvider
        form={
          <UploadSaveForm
            updateCardsFromUpload={updateCardsFromUpload}
            ref={uploadFormRef}
          ></UploadSaveForm>
        }
      >
        <UploadButton />
      </FormProvider>

      {/* <EditModeButton isEditMode={isEditMode} updateEditMode={updateEditMode} /> */}
    </div>
  );
};
