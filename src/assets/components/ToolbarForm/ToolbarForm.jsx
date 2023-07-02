import React from "react";
import { AddCardForm } from "./AddCardForm/AddCardForm";
import { EditCardForm } from "./EditCardForm/EditCardForm";
import { UploadSaveForm } from "./UploadSaveForm/UploadSaveForm";
import { HpForm } from "./HpForm/HpForm";

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
  updateHp,
}) => {
  // logic
  const { add, edit, upload, hp } = isFormShow;

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
      {hp && (
        <HpForm
          updateHp={updateHp}
          updateFormShow={updateFormShow}
          triggerAlert={triggerAlert}
        />
      )}
    </>
  );
};
