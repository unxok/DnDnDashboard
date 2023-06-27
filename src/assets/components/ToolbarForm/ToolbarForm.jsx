import React from "react";
import { AddCardForm } from "./AddCardForm/AddCardForm";
import { EditCardForm } from "./EditCardForm/EditCardForm";
import { UploadSaveForm } from "./UploadSaveForm/UploadSaveForm";

export const ToolbarForm = ({
  isFormShow,
  updateFormShow,
  updateCards,
  selectedTypeConfig,
  updateSelectedTypeConfig,
  isFormInvalid,
  updateFormInvalid,
  triggerAlert,
  updateCardsFromUpload,
  existingCard,
}) => {
  // logic
  const { add, edit, upload } = isFormShow;

  return (
    <>
      {add && (
        <AddCardForm
          updateFormShow={updateFormShow}
          isFormShow={add}
          updateCards={updateCards}
          selectedTypeConfig={selectedTypeConfig}
          updateSelectedTypeConfig={updateSelectedTypeConfig}
          isFormInvalid={isFormInvalid}
          updateFormInvalid={updateFormInvalid}
          triggerAlert={triggerAlert}
        />
      )}
      {edit && (
        <EditCardForm
          updateFormShow={updateFormShow}
          isFormShow={edit}
          triggerAlert={triggerAlert}
          selectedTypeConfig={selectedTypeConfig}
          updateCards={updateCards}
          updateSelectedTypeConfig={updateSelectedTypeConfig}
          isFormInvalid={isFormInvalid}
          updateFormInvalid={updateFormInvalid}
          existingCard={existingCard}
        />
      )}
      {upload && (
        <UploadSaveForm
          updateFormShow={updateFormShow}
          isFormShow={upload}
          triggerAlert={triggerAlert}
          updateCardsFromUpload={updateCardsFromUpload}
        />
      )}
    </>
  );
};
