import React from "react";
import { useState, useContext } from "react";
import { ConfigMap } from "../../ConfigMap/ConfigMap";
import * as Dialog from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { AlertContext } from "../../../../App";

export const EditCardForm = forwardRef(
  ({ updateCards, id, getCardById }, ref) => {
    const [newCardValue, setNewCardValue] = useState(getCardById(id));
    const [isFormInvalid, setFormInvalid] = useState(false);
    const [showPreview, setShowPreview] = useState(true);
    const [selectedTypeConfig, setSelectedTypeConfig] = useState(
      ConfigMap[getCardById(id).name]
    );

    const triggerAlert = useContext(AlertContext);

    console.log(
      "From EditCardForm, selectedTypeConfig is now: ",
      selectedTypeConfig
    );

    const existingCard = getCardById(id);
    console.log("existingCard: ", existingCard);

    const updateNewCardValue = (e, optionType) => {
      const { name, value } = e.target;

      setNewCardValue((prevValue) => ({
        ...prevValue,
        configs: {
          ...prevValue.configs,
          [optionType]: {
            ...prevValue.configs[optionType],
            [name]: value,
          },
        },
      }));

      const checkForPreview = () => {
        try {
          return !checkFormInvalid();
        } catch (e) {
          return false;
        }
      };

      setShowPreview(checkForPreview());
    };

    const checkFormInvalid = () => {
      let numOfReqs = 0;
      let numOfFilledReqs = 0;
      selectedTypeConfig.required.forEach((attr) => {
        numOfReqs++;
      });

      for (let key in newCardValue.configs.required) {
        numOfFilledReqs++;
      }

      if (numOfReqs !== numOfFilledReqs) {
        return true;
      }
    };

    const handleAddItem = () => {
      if (checkFormInvalid()) {
        setFormInvalid(true);
        triggerAlert("error", "Please fill all required fields");
        return;
      }
      setFormInvalid(false);
      triggerAlert("success", "Card was updated");
      updateCards(newCardValue, { edit: 1 });
      setSelectedTypeConfig(null);
      setShowPreview(false);
    };

    const cancelAddItem = () => {
      setFormInvalid(false);
      setSelectedTypeConfig(null);
      setNewCardValue({});
      setShowPreview(false);
    };

    const deleteItem = () => {
      updateCards(existingCard, { delete: 1 });
      setFormInvalid(false);
      setSelectedTypeConfig(null);
      setNewCardValue({});
      setShowPreview(false);
    };

    return (
      <>
        <Dialog.Content
          onEscapeKeyDown={cancelAddItem}
          onPointerDownOutside={cancelAddItem}
          onInteractOutside={cancelAddItem}
          ref={ref}
          className="fixed left-1/2 top-1/2 flex w-1/3 -translate-x-1/2 -translate-y-1/2 flex-col items-end justify-between rounded-md border-black bg-primary p-5 text-stone-300"
        >
          <div className="mb-5 flex w-full flex-col items-start">
            <Dialog.Title className="text-2xl">Edit Card</Dialog.Title>
            <Dialog.Description>
              Edit or delete an existing card
            </Dialog.Description>
          </div>
          {selectedTypeConfig && (
            <div
              className={
                "mb-3 flex w-full flex-col rounded-lg border bg-base p-5 text-center  text-white shadow-lg" +
                (isFormInvalid ? " border-red-500" : " border-gray-800")
              }
            >
              Required <hr className="m-1 opacity-30" />
              {selectedTypeConfig.required.map(
                (
                  { value, show, type, options = null, inputType = null },
                  index
                ) => {
                  const Component = type;
                  return options ? (
                    // <Component> = <select>
                    <div key={index} className="m-2 flex justify-between">
                      <label key={value + "-label"} htmlFor={value}>
                        {show} :
                      </label>
                      <Component
                        name={value}
                        key={value}
                        onChange={(e) => {
                          updateNewCardValue(e, "required");
                        }}
                        className="text-center text-black"
                        defaultValue={existingCard.configs.required[value]}
                      >
                        <option key={index + "-def-label"} value="" disabled>
                          select one
                        </option>
                        {options.map((option) => (
                          <option value={option.value} key={option.value}>
                            {option.show}
                          </option>
                        ))}
                      </Component>
                    </div>
                  ) : (
                    // <Component> = <input>
                    <div key={index} className="m-2 flex justify-between">
                      <label key={value + "-label"} htmlFor={value}>
                        {show} :
                      </label>
                      <Component
                        name={value}
                        key={value}
                        type={inputType}
                        onChange={(e) => updateNewCardValue(e, "required")}
                        className="w-24 text-center text-black"
                        defaultValue={existingCard.configs.required[value]}
                      ></Component>
                    </div>
                  );
                }
              )}
            </div>
          )}
          {selectedTypeConfig && selectedTypeConfig.optional && (
            <div className="mb-3 flex w-full flex-col rounded-lg border border-gray-800 bg-base p-5 text-center text-white shadow-lg">
              Optional <hr className="m-1 opacity-30" />
              {selectedTypeConfig.optional.map(
                (
                  { value, show, type, options = null, inputType = null },
                  index
                ) => {
                  const Component = type;

                  return options ? (
                    // <Component> = <select>
                    <div key={index} className="m-2 flex justify-between">
                      <label key={value + "-label"} htmlFor={value}>
                        {show} :
                      </label>
                      <Component
                        name={value}
                        key={value}
                        onChange={(e) => {
                          updateNewCardValue(e, "optional");
                        }}
                        className="w-24 text-center text-black"
                        defaultValue={existingCard.configs.optional[value]}
                      >
                        <option key={index + "-def-option"} value="" disabled>
                          select one
                        </option>
                        {options.map((option) => (
                          <option value={option.value} key={option.value}>
                            {option.show}
                          </option>
                        ))}
                      </Component>
                    </div>
                  ) : (
                    // <Component> = <input>
                    <div key={index} className="m-2 flex justify-between">
                      <label key={value + "-label"} htmlFor={value}>
                        {show} :
                      </label>
                      <Component
                        name={value}
                        key={value}
                        type={inputType}
                        onChange={(e) => updateNewCardValue(e, "optional")}
                        className="w-24 text-center text-black"
                        defaultValue={existingCard.configs.optional[value]}
                      ></Component>
                    </div>
                  );
                }
              )}
            </div>
          )}
          <div>
            <div className="flex items-center justify-center ">
              <Dialog.Close asChild>
                <button
                  disabled={!selectedTypeConfig}
                  onClick={deleteItem}
                  className="m-2 rounded-lg p-2 text-accent transition delay-75 ease-in-out hover:scale-110 hover:bg-red-400 hover:shadow-md hover:shadow-gray-950"
                >
                  Delete Card
                </button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button
                  disabled={!selectedTypeConfig}
                  onClick={handleAddItem}
                  className="m-2 rounded-lg border border-gray-800 bg-accent p-2 text-black shadow-lg transition delay-75 ease-in-out hover:scale-110 hover:bg-green-400 hover:shadow-md hover:shadow-gray-950 active:scale-90 active:shadow-none active:delay-0 disabled:opacity-25 disabled:hover:scale-90 disabled:hover:cursor-not-allowed disabled:hover:bg-gray-300 disabled:hover:shadow-none"
                >
                  Update
                </button>
              </Dialog.Close>

              <Dialog.Close asChild>
                <button
                  name="cancel-item"
                  onClick={cancelAddItem}
                  className="absolute right-4 top-2 text-2xl"
                >
                  ×
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
        {showPreview && (
          <div className="fixed right-[100px] top-1/3 z-50 ">
            <p className="mb-1 rounded-sm bg-gray-500 px-1">Preview</p>
            <newCardValue.element
              configs={newCardValue.configs}
            ></newCardValue.element>
          </div>
        )}
      </>
    );
  }
);
