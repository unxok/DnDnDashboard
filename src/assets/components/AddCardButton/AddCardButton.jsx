import React from "react";
import { useContext } from "react";
import { CardsContext } from "../../../App";
import { AbilityScore } from "../AbilityScore/AbilityScore";
import { useState } from "react";
import { ConfigMap } from "../ConfigMap/ConfigMap";
import { useEffect } from "react";

export const AddCardButton = ({ isModalShow, updateModalShow }) => {
  const { updateCardsContextValue } = useContext(CardsContext);
  const [selectedTypeConfig, setSelectedTypeConfig] = useState(null);
  const [newCardValue, setNewCardValue] = useState({});

  let id = 1;
  const generateId = () => {
    let newId = id + 1;
    return newId;
  };

  const handleChooseType = ({ target }) => {
    const selectedType = ConfigMap[target.value];
    const element = ConfigMap[target.value].element;
    if (selectedType !== selectedTypeConfig) {
      setSelectedTypeConfig(selectedType);
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

  const handleAddItem = () => {
    updateModalShow();
    updateCardsContextValue(newCardValue);
    console.log("item should be added");
    setNewCardValue(null);
    setSelectedTypeConfig(null);
  };

  useEffect(() => {
    console.log(newCardValue);
  }, [newCardValue]);

  return (
    <>
      {isModalShow && (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-gray-500 bg-opacity-50 z-40">
          <div className="p-5 bg-primary z-50 flex flex-col rounded-lg items-center justify-center ">
            <div
              name="typeSelector"
              className="bg-base text-white p-3 w-56 flex justify-evenly rounded-xl "
            >
              <label htmlFor="typeSelector">Type : </label>
              <select
                className="w-20 text-center text-black rounded-sm"
                onChange={handleChooseType}
                name="typeSelector"
                id="typeSelector"
              >
                <option value="">Choose</option>
                <option value="AbilityScore">Ability Score</option>
              </select>
            </div>
            {selectedTypeConfig && (
              <div className="m-3 w-72 rounded-lg bg-base text-white p-5 flex flex-col">
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
                          className="text-center text-black"
                        >
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
                          className="w-24 text-black text-center"
                        ></Component>
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {selectedTypeConfig && (
              <div className="m-3 w-96 rounded-lg bg-base text-white p-5 flex flex-col">
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
                          className="text-center text-black w-24"
                        >
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
                          className="w-24 text-black text-center"
                        ></Component>
                      </div>
                    );
                  }
                )}
              </div>
            )}
            <div>
              <button onClick={handleAddItem}>Add Item</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
