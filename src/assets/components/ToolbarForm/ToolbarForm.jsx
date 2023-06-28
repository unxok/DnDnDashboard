import React from "react";
import { AddCardForm } from "./AddCardForm/AddCardForm";
import { EditCardForm } from "./EditCardForm/EditCardForm";
import { UploadSaveForm } from "./UploadSaveForm/UploadSaveForm";

export const ToolbarForm = ({
  isFormShow,
  updateFormShow,
  updateCards,
  selectedTypeConfig,
  setSelectedTypeConfig,
  isFormInvalid,
  setFormInvalid,
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
          setSelectedTypeConfig={setSelectedTypeConfig}
          isFormInvalid={isFormInvalid}
          setFormInvalid={setFormInvalid}
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
          setSelectedTypeConfig={setSelectedTypeConfig}
          isFormInvalid={isFormInvalid}
          setFormInvalid={setFormInvalid}
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
