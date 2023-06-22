import React from "react";
import { useContext } from "react";
import { ScoresContext } from "../../../App";
import { Strength } from "../AbilityScores/Strength/Strength";

export const AddScoreButton = () => {
  const { updateScoresContextValue } = useContext(ScoresContext);

  const handleSubmit = () => {
    const newScoreVal = {
      id: 3,
      top: 200,
      left: 400,
      element: Strength,
      configs: {
        isNameBottom: true,
        isModAboveScore: true,
        isModBig: true,
        bgColor: "accent",
        textColor: "primary",
        isShorthand: true,
        isCapital: true,
        scoreType: "int",
        score: 19,
      },
    };

    updateScoresContextValue(newScoreVal);
    console.log("context should have updated");
  };

  return <button onClick={handleSubmit}>Add Score Card</button>;
};
