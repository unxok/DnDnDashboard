import React from "react";
import { useState } from "react";
import { ConfigMap } from "../ConfigMap/ConfigMap";
import { useEffect } from "react";

export const EditCardForm = ({
  isEditFormShow,
  updateEditFormShow,
  updateCards,
  selectedTypeConfig,
  updateSelectedTypeConfig,
  isFormInvalid,
  updateFormInvalid,
  triggerAlert,
  existingCard,
}) => {
  const [newCardValue, setNewCardValue] = useState(existingCard);

  useEffect(() => {
    updateSelectedTypeConfig(ConfigMap[existingCard.element.name]);
  }, []);

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
      updateFormInvalid(true);
      triggerAlert("error", "Please fill all required fields");
      return;
    }
    updateFormInvalid(false);
    updateEditFormShow(false);
    triggerAlert("success", "Card was updated");
    updateCards(newCardValue, { edit: 1 });
    updateSelectedTypeConfig(null);
  };

  const cancelAddItem = () => {
    updateFormInvalid(false);
    updateEditFormShow(false);
    updateSelectedTypeConfig(null);
    setNewCardValue({});
  };

  const deleteItem = () => {
    updateCards(existingCard, { delete: 1 });
    updateFormInvalid(false);
    updateEditFormShow(false);
    updateSelectedTypeConfig(null);
    setNewCardValue({});
  };

  return (
    <>
      {isEditFormShow && (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-gray-500 bg-opacity-50 z-40">
          <div className="p-5 bg-primary shadow-lg border border-gray-700 z-50 flex flex-col rounded-lg items-center justify-center ">
            {selectedTypeConfig && (
              <div
                className={
                  "m-3 w-72 text-center rounded-lg bg-base text-white p-5 flex flex-col  border shadow-lg" +
                  (isFormInvalid ? " border-red-500" : " border-gray-800")
                }
              >
                Required <hr className="opacity-30 m-1" />
                {selectedTypeConfig.required.map(
                  (
                    { value, show, type, options = null, inputType = null },
                    index
                  ) => {
                    const Component = type;
                    return options ? (
                      // <Component> = <select>
                      <div key={index} className="flex justify-between m-2">
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
                      <div key={index} className="flex justify-between m-2">
                        <label key={value + "-label"} htmlFor={value}>
                          {show} :
                        </label>
                        <Component
                          name={value}
                          key={value}
                          type={inputType}
                          onChange={(e) => updateNewCardValue(e, "required")}
                          className="w-24 text-black text-center"
                          defaultValue={existingCard.configs.required[value]}
                        ></Component>
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {selectedTypeConfig && (
              <div className="m-3 w-96 rounded-lg bg-base text-white p-5 flex flex-col border border-gray-800 shadow-lg">
                {selectedTypeConfig.optional.map(
                  (
                    { value, show, type, options = null, inputType = null },
                    index
                  ) => {
                    const Component = type;

                    return options ? (
                      // <Component> = <select>
                      <div key={index} className="flex justify-between m-2">
                        <label key={value + "-label"} htmlFor={value}>
                          {show} :
                        </label>
                        <Component
                          name={value}
                          key={value}
                          onChange={(e) => {
                            updateNewCardValue(e, "optional");
                          }}
                          className="text-center text-black w-24"
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
                      <div key={index} className="flex justify-between m-2">
                        <label key={value + "-label"} htmlFor={value}>
                          {show} :
                        </label>
                        <Component
                          name={value}
                          key={value}
                          type={inputType}
                          onChange={(e) => updateNewCardValue(e, "optional")}
                          className="w-24 text-black text-center"
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
                  className="bg-accent m-2 p-2 rounded-lg border border-gray-800 shadow-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-green-400 hover:shadow-md hover:shadow-gray-950 disabled:opacity-25 disabled:hover:scale-90 disabled:hover:bg-gray-300 disabled:hover:shadow-none disabled:hover:cursor-not-allowed active:scale-90 active:delay-0 active:shadow-none"
                >
                  Update
                </button>
                <button
                  name="delete-item"
                  onClick={deleteItem}
                  className="bg-accent m-2 p-2 rounded-lg border border-gray-800 shadow-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-red-400 hover:shadow-md hover:shadow-gray-950 active:scale-90 active:delay-0 active:shadow-none"
                >
                  Delete
                </button>
                <button
                  name="cancel-item"
                  onClick={cancelAddItem}
                  className="bg-accent m-2 p-2 rounded-lg border border-gray-800 shadow-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-red-400 hover:shadow-md hover:shadow-gray-950 active:scale-90 active:delay-0 active:shadow-none"
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
