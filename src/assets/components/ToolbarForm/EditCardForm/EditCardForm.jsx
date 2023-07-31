import React from "react";
import { useState } from "react";
import { ConfigMap } from "../../ConfigMap/ConfigMap";
import { useEffect } from "react";

export const EditCardForm = ({
  updateFormShow,
  updateCards,
  selectedTypeConfig,
  setSelectedTypeConfig,
  existingCard,
}) => {
  const [newCardValue, setNewCardValue] = useState(existingCard);
  const [isFormInvalid, setFormInvalid] = useState(false);

  console.log(
    "From EditCardForm, selectedTypeConfig is now: ",
    selectedTypeConfig
  );

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
  };

  const cancelAddItem = () => {
    setFormInvalid(false);
    setSelectedTypeConfig(null);
    setNewCardValue({});
  };

  const deleteItem = () => {
    updateCards(existingCard, { delete: 1 });
    setFormInvalid(false);
    setSelectedTypeConfig(null);
    setNewCardValue({});
  };

  return (
    <>
      {isFormShow && (
        <div className="fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="z-50 flex flex-col items-center justify-center rounded-lg border border-gray-700 bg-primary p-5 shadow-lg ">
            {selectedTypeConfig && (
              <div
                className={
                  "m-3 flex w-72 flex-col rounded-lg border bg-base p-5 text-center  text-white shadow-lg" +
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
              <div className="m-3 flex w-96 flex-col rounded-lg border border-gray-800 bg-base p-5 text-center text-white shadow-lg">
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
                <button
                  disabled={!selectedTypeConfig}
                  onClick={handleAddItem}
                  className="m-2 rounded-lg border border-gray-800 bg-accent p-2 shadow-lg transition delay-75 ease-in-out hover:scale-110 hover:bg-green-400 hover:shadow-md hover:shadow-gray-950 active:scale-90 active:shadow-none active:delay-0 disabled:opacity-25 disabled:hover:scale-90 disabled:hover:cursor-not-allowed disabled:hover:bg-gray-300 disabled:hover:shadow-none"
                >
                  Update
                </button>
                <button
                  name="delete-item"
                  onClick={deleteItem}
                  className="m-2 rounded-lg border border-gray-800 bg-accent p-2 shadow-lg transition delay-75 ease-in-out hover:scale-110 hover:bg-red-400 hover:shadow-md hover:shadow-gray-950 active:scale-90 active:shadow-none active:delay-0"
                >
                  Delete
                </button>
                <button
                  name="cancel-item"
                  onClick={cancelAddItem}
                  className="m-2 rounded-lg border border-gray-800 bg-accent p-2 shadow-lg transition delay-75 ease-in-out hover:scale-110 hover:bg-red-400 hover:shadow-md hover:shadow-gray-950 active:scale-90 active:shadow-none active:delay-0"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
