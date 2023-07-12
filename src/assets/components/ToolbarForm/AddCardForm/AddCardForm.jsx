import React from "react";
import { useState } from "react";
import { ConfigMap } from "../../ConfigMap/ConfigMap";

export const AddCardForm = ({
  isFormShow,
  updateFormShow,
  updateCards,
  selectedTypeConfig,
  setSelectedTypeConfig,
  isFormInvalid,
  setFormInvalid,
  triggerAlert,
}) => {
  //const { updateCardsContextValue } = useContext(CardsContext);
  const [newCardValue, setNewCardValue] = useState(null);

  const initializeNewCardValue = ({ element, name }) => {
    console.log("setNewCardValue says: element: ", element);
    console.log("setNewCardValue says: name: ", name);

    setNewCardValue({
      configs: {
        required: {},
        optional: {},
      },
      id: generateId(),
      top: 200,
      left: 200,
      element: element,
      name: name,
    });
  };

  const generateId = () => {
    let id = Math.floor(Math.random().toFixed(4) * 10000);
    return id;
  };

  const handleChooseType = ({ target }) => {
    const selectedType = ConfigMap[target.value];
    const config = ConfigMap[target.value];
    if (selectedType !== selectedTypeConfig) {
      setSelectedTypeConfig(selectedType);
      initializeNewCardValue(config);
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
      setFormInvalid(true);
      triggerAlert("error", "Please fill all required fields");
      return;
    }
    setFormInvalid(false);
    updateFormShow("add", false);
    triggerAlert("success", `New card was added`);
    updateCards(newCardValue);
    // setNewCardValue(newCardValue);
    setSelectedTypeConfig(null);
  };

  const cancelAddItem = () => {
    setFormInvalid(false);
    updateFormShow("add", false);
    setSelectedTypeConfig(null);
    setNewCardValue({});
  };

  return (
    <>
      {isFormShow && (
        <div className="fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="z-50 flex flex-col items-center justify-center rounded-lg border border-gray-700 bg-primary p-5 shadow-lg ">
            <div
              name="typeSelector"
              className="flex w-56 justify-evenly rounded-xl border border-gray-800 bg-base p-3 text-white shadow-lg "
            >
              <label htmlFor="typeSelector">Type : </label>
              <select
                className="w-32 rounded-sm text-center text-black"
                onChange={handleChooseType}
                name="typeSelector"
                id="typeSelector"
                defaultValue=""
              >
                <option value="" disabled>
                  select one
                </option>
                {Object.keys(ConfigMap).map((key) => (
                  <option key={key} value={ConfigMap[key].name}>
                    {ConfigMap[key].show}
                  </option>
                ))}
              </select>
            </div>
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
                          defaultValue=""
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
                        ></Component>
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {selectedTypeConfig && selectedTypeConfig.optional && (
              <div className="m-3 flex w-96 flex-col rounded-lg border border-gray-800 bg-base p-5 text-center text-white shadow-lg">
                Optional <hr className="m-1 opacity-30"></hr>
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
                          defaultValue=""
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
                  className="m-2 rounded-lg border border-gray-800 bg-accent p-2 shadow-lg transition delay-75 ease-in-out hover:scale-110 hover:bg-green-400 hover:shadow-md hover:shadow-gray-950 disabled:opacity-25 disabled:hover:scale-90 disabled:hover:cursor-not-allowed disabled:hover:bg-gray-300 disabled:hover:shadow-none"
                >
                  Add Item
                </button>
                <button
                  name="cancel-item"
                  onClick={cancelAddItem}
                  className="m-2 rounded-lg border border-gray-800 bg-accent p-2 shadow-lg transition delay-75 ease-in-out hover:scale-110 hover:bg-red-400 hover:shadow-md hover:shadow-gray-950 "
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
