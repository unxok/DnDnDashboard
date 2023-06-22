import React from "react";
import { useContext } from "react";
import { ScoresContext } from "../../../App";
import { AbilityScore } from "../AbilityScore/AbilityScore";
import { useState } from "react";

export const AddScoreButton = () => {
  const { updateScoresContextValue } = useContext(ScoresContext);
  const [isModalShow, setModalShow] = useState(true);
  const [idCounter, incrementIdCoutner] = useState(1);
  const [queuedItem, setQueuedItem] = useState({
    id: 1,
    top: 200,
    left: 400,
    element: AbilityScore,
    configs: {
      isNameBottom: null,
      isModAboveScore: null,
      isModBig: null,
      bgColor: null,
      textColor: null,
      isShorthand: null,
      isCapital: null,
      scoreType: null,
      score: 0,
    },

    // show modal form
  });

  const handleAddItem = () => {
    updateScoresContextValue(queuedItem);
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
            <div className="bg-base text-white p-3 w-56 flex justify-evenly rounded-xl ">
              <label htmlFor="isNameBottom">Input Label : </label>
              <select
                className="w-20 text-center text-black rounded-sm"
                name="isNameBottom"
                id="isNameBottom"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
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
