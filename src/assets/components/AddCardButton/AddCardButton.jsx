import React from "react";
import { useContext } from "react";
import { CardsContext } from "../../../App";
import { AbilityScore } from "../AbilityScore/AbilityScore";
import { useState } from "react";
import { ConfigMap } from "../ConfigMap/ConfigMap";

export const AddCardButton = () => {
  const { updateCardsContextValue } = useContext(CardsContext);
  const [newCardValue, setNewCardValue] = useState(null);
  const [isModalShow, setModalShow] = useState(null);
  const [selectedTypeConfig, setSelectedTypeConfig] = useState(null);

  const [idCounter, incrementIdCounter] = useState(0);

  const [queuedCard, setQueuedCard] = useState({
    id: 1,
    top: 200,
    left: 400,
    element: AbilityScore,
    configs: { selectedTypeConfig },

    // show modal form
  });

  const generateId = () => {
    const newId = idCounter + 1;
    incrementIdCounter(newId);
    return newId;
  };

  const handleChooseType = ({ target }) => {
    setSelectedTypeConfig(ConfigMap[target.value]);
  };

  const handleRequiredChange = () => {
    console.log(e);

    // setNewCardValue({
    //   ...currentVals,
    //   required: {
    //     [e.target.name]: [e.target.value],
    //     ...restOfRequired,
    //   },
    // });
  };

  const handleAddItem = () => {
    updateCardsContextValue(queuedCard);
    console.log("item should be added");
  };

  return (
    <div className="absolute bg-white">
      <button
        onClick={() => {
          setModalShow(true);
        }}
      >
        Add Score Card
      </button>
      {isModalShow && (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-gray-500 bg-opacity-50 z-40">
          <div className="p-5 h-56 bg-primary z-50 flex flex-col rounded-lg items-center justify-center ">
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
                <option value="AbilityScore">Ability Score</option>
                <option value="null">null</option>
              </select>
              {selectedTypeConfig.required.map(
                ({ value, show, type, options = null, inputType = null }) => {
                  const Component = type;
                  const uid = generateId();
                  return (
                    <Component
                      id={uid}
                      key={uid}
                      name={value}
                      {...(inputType && { type: inputType })}
                    >
                      {options
                        ? options.map((option) => {
                            <option key={option.value} value={option.value}>
                              {option.show}
                            </option>;
                          })
                        : null}
                    </Component>
                  );
                }
              )}
            </div>
            <div>
              <button onClick={handleAddItem}>Add Item</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
