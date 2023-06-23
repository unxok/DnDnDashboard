import React from "react";
<<<<<<< HEAD
import { AbilityScore } from "../AbilityScore/AbilityScore";
=======
>>>>>>> bug-not-dragging
import { useState } from "react";
import { ConfigMap } from "../ConfigMap/ConfigMap";
import { useEffect } from "react";

export const AddCardButton = ({
  isModalShow,
  updateModalShow,
  updateCardsContextValue,
}) => {
<<<<<<< HEAD
  const [selectedTypeConfig, setSelectedTypeConfig] = useState(null);
  const [newCardValue, setNewCardValue] = useState({});
  const [isFormInvalid, setFormInvalid] = useState(false);
  const [idState, setIdState] = useState(0);
=======
  //const { updateCardsContextValue } = useContext(CardsContext);
  const [selectedTypeConfig, setSelectedTypeConfig] = useState(null);
  const [newCardValue, setNewCardValue] = useState({});
  const [isFormInvalid, setFormInvalid] = useState(false);
>>>>>>> bug-not-dragging

  const generateId = () => {
    let defId = 0;
    console.log(defId + 1);
    return defId++;
  };

  const handleChooseType = ({ target }) => {
    const selectedType = ConfigMap[target.value];
    console.log("Element = ", Element);
    if (selectedType !== selectedTypeConfig) {
      setSelectedTypeConfig(selectedType);
      setNewCardValue({
        configs: {
          required: {},
          optional: {},
        },
        id: idState,
        top: 200,
        left: 800,
        element: selectedType.element,
      });
    }
  };

  const handleRequiredChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setNewCardValue((prevValue) => ({
      ...prevValue,
      configs: {
        ...prevValue.configs,
        required: {
          ...prevValue.configs.required,
          [name]: value,
        },
      },
    }));
  };

  const handleOptionalChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setNewCardValue((prevValue) => ({
      ...prevValue,
      configs: {
        ...prevValue.configs,
        optional: {
          ...prevValue.configs.optional,
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
      return;
    }
    setFormInvalid(false);
    updateModalShow();
    updateCardsContextValue(newCardValue);
    console.log("item should be added");
    setNewCardValue(null);
    setSelectedTypeConfig(null);
  };

  const cancelAddItem = () => {
    setFormInvalid(false);
    updateModalShow();
    setSelectedTypeConfig(null);
    setNewCardValue({});
  };

  return (
    <>
      {isModalShow && (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-gray-500 bg-opacity-50 z-20">
          <div className="p-5 bg-primary z-30 flex flex-col rounded-lg items-center justify-center shadow-lg shadow-gray-700 ">
            <div
              name="typeSelector"
              key="typeSelector"
              className="bg-base text-white p-3 m-3 w-56 shadow-lg flex justify-evenly rounded-xl "
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
<<<<<<< HEAD
                key="req"
                className={
                  "m-3 w-72 rounded-lg bg-base text-white p-5 flex flex-col shadow-lg text-center" +
                  (isFormInvalid ? " border-red-600 border-solid border" : "")
                }
              >
                Required <hr className="opacity-10 m-1" />
=======
                className={
                  "m-3 w-72 text-center rounded-lg bg-base text-white p-5 flex flex-col" +
                  (isFormInvalid ? " border border-red-500" : "")
                }
              >
                Required <hr className="opacity-30 m-1" />
>>>>>>> bug-not-dragging
                {selectedTypeConfig.required.map(
                  ({ value, show, type, options = null, inputType = null }) => {
                    const Component = type;
                    const uid = generateId();
                    return options ? (
                      // <Component> = <select>
                      <div className="flex justify-between m-2">
                        <label htmlFor={value}>{show} :</label>
                        <Component
                          name={value}
                          key={uid}
                          onChange={handleRequiredChange}
                          className="text-center text-black rounded-sm"
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
                          key={uid}
                          type={inputType}
                          onChange={handleRequiredChange}
                          className="w-24 text-black text-center rounded-sm"
                        ></Component>
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {selectedTypeConfig && (
              <div
                key="opt"
                className="m-3 w-96 rounded-lg bg-base text-white p-5 flex flex-col shadow-lg text-center"
              >
                Optional <hr className="opacity-10 m-1" />
                {selectedTypeConfig.optional.map(
                  ({ value, show, type, options = null, inputType = null }) => {
                    const Component = type;
                    const uid = generateId();
                    return options ? (
                      // <Component> = <select>
                      <div className="flex justify-between m-2">
                        <label htmlFor={value}>{show} :</label>
                        <Component
                          name={value}
                          key={uid}
                          onChange={handleOptionalChange}
                          className="text-center text-black w-24 rounded-sm"
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
                          key={uid}
                          type={inputType}
                          onChange={handleOptionalChange}
                          className="w-24 text-black text-center rounded-sm"
                        ></Component>
                      </div>
                    );
                  }
                )}
              </div>
            )}
            <div>
<<<<<<< HEAD
              <button
                name="add-item"
                onClick={handleAddItem}
                className="bg-accent m-2 p-2 rounded-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-green-400 hover:shadow-md hover:shadow-gray-950 "
              >
                Add Item
              </button>{" "}
              <button
                name="cancel-item"
                onClick={cancelAddItem}
                className="bg-accent m-2 p-2 rounded-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-red-400 hover:shadow-md hover:shadow-gray-950 "
              >
                Cancel
              </button>
=======
              <div className="flex items-center justify-center ">
                <button
                  disabled={!selectedTypeConfig}
                  onClick={handleAddItem}
                  className="bg-accent m-2 p-2 rounded-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-green-400 hover:shadow-md hover:shadow-gray-950 disabled:opacity-25 disabled:hover:scale-90 disabled:hover:bg-gray-300 disabled:hover:shadow-none"
                >
                  Add Item
                </button>
                <button
                  name="cancel-item"
                  onClick={cancelAddItem}
                  className="bg-accent m-2 p-2 rounded-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-red-400 hover:shadow-md hover:shadow-gray-950 "
                >
                  Cancel
                </button>
              </div>
              {isFormInvalid && (
                <div className="bg-red-400 p-2 rounded-md">
                  Please fill all required fields
                </div>
              )}
>>>>>>> bug-not-dragging
            </div>
            {isFormInvalid && (
              <div className="bg-red-400 p-2 rounded-md">
                Please fill all required fields
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
