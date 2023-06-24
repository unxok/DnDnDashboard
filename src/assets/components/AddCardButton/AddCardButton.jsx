import React from "react";
import { useState } from "react";
import { ConfigMap } from "../ConfigMap/ConfigMap";
import { useEffect } from "react";

export const AddCardButton = ({
  isModalShow,
  updateModalShow,
  updateCards,
  selectedTypeConfig,
  updateSelectedTypeConfig,
  isFormInvalid,
  updateFormInvalid,
}) => {
  //const { updateCardsContextValue } = useContext(CardsContext);
  const [newCardValue, setNewCardValue] = useState({});

  const initializeNewCardValue = (element) => {
    setNewCardValue({
      configs: {
        required: {},
        optional: {},
      },
      id: generateId(),
      top: 200,
      left: 200,
      element: element,
    });
  };

  const generateId = () => {
    let id = Math.floor(Math.random().toFixed(4) * 10000);
    return id;
  };

  const handleChooseType = ({ target }) => {
    const selectedType = ConfigMap[target.value];
    const element = ConfigMap[target.value].element;
    if (selectedType !== selectedTypeConfig) {
      updateSelectedTypeConfig(selectedType);
      initializeNewCardValue(element);
    }
  };

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
      return;
    }
    updateFormInvalid(false);
    updateModalShow();
    updateCards(newCardValue);
    // setNewCardValue(newCardValue);
    updateSelectedTypeConfig(null);
  };

  const cancelAddItem = () => {
    updateFormInvalid(false);
    updateModalShow();
    updateSelectedTypeConfig(null);
    setNewCardValue({});
  };

  return (
    <>
      {isModalShow && (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-gray-500 bg-opacity-50 z-40">
          <div className="p-5 bg-primary shadow-lg border border-gray-700 z-50 flex flex-col rounded-lg items-center justify-center ">
            <div
              name="typeSelector"
              className="bg-base text-white p-3 w-56 flex justify-evenly rounded-xl shadow-lg border border-gray-800 "
            >
              <label htmlFor="typeSelector">Type : </label>
              <select
                className="w-32 text-center text-black rounded-sm"
                onChange={handleChooseType}
                name="typeSelector"
                id="typeSelector"
                defaultValue=""
              >
                <option value="" disabled>
                  select one
                </option>
                <option value="AbilityScore">Ability Score</option>
              </select>
            </div>
            {selectedTypeConfig && (
              <div
                className={
                  "m-3 w-72 text-center rounded-lg bg-base text-white p-5 flex flex-col  border shadow-lg" +
                  (isFormInvalid ? " border-red-500" : " border-gray-800")
                }
              >
                Required <hr className="opacity-30 m-1" />
                {selectedTypeConfig.required.map(
                  ({ value, show, type, options = null, inputType = null }) => {
                    const Component = type;
                    return options ? (
                      // <Component> = <select>
                      <div className="flex justify-between m-2">
                        <label htmlFor={value}>{show} :</label>
                        <Component
                          name={value}
                          key={value}
                          onChange={(e) => {
                            updateNewCardValue(e, "required");
                          }}
                          className="text-center text-black"
                          defaultValue=""
                        >
                          <option value="" disabled>
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
                      <div className="flex justify-between m-2">
                        <label htmlFor={value}>{show} :</label>
                        <Component
                          name={value}
                          key={value}
                          type={inputType}
                          onChange={(e) => updateNewCardValue(e, "required")}
                          className="w-24 text-black text-center"
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
                  ({ value, show, type, options = null, inputType = null }) => {
                    const Component = type;

                    return options ? (
                      // <Component> = <select>
                      <div className="flex justify-between m-2">
                        <label htmlFor={value}>{show} :</label>
                        <Component
                          name={value}
                          key={value}
                          onChange={(e) => {
                            updateNewCardValue(e, "optional");
                          }}
                          className="text-center text-black w-24"
                          defaultValue=""
                        >
                          <option value="" disabled>
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
                      <div className="flex justify-between m-2">
                        <label htmlFor={value}>{show} :</label>
                        <Component
                          name={value}
                          key={value}
                          type={inputType}
                          onChange={(e) => updateNewCardValue(e, "optional")}
                          className="w-24 text-black text-center"
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
                  className="bg-accent m-2 p-2 rounded-lg border border-gray-800 shadow-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-green-400 hover:shadow-md hover:shadow-gray-950 disabled:opacity-25 disabled:hover:scale-90 disabled:hover:bg-gray-300 disabled:hover:shadow-none disabled:hover:cursor-not-allowed"
                >
                  Add Item
                </button>
                <button
                  name="cancel-item"
                  onClick={cancelAddItem}
                  className="bg-accent m-2 p-2 rounded-lg border border-gray-800 shadow-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-red-400 hover:shadow-md hover:shadow-gray-950 "
                >
                  Cancel
                </button>
              </div>
              {isFormInvalid && (
                <div className="bg-red-400 p-2 rounded-md">
                  Please fill all required fields
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
