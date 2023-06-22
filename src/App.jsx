// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useState, createContext, useContext } from "react";
import { DragContextProvider } from "./assets/components/DragContextProvider/DragContextProvider";
import SampleCard from "./assets/components/SampleCard/SampleCard";
import { Strength } from "./assets/components/AbilityScores/Strength/Strength";
import { AddScoreButton } from "./assets/components/AddScoreButton/AddScoreButton";

export const ScoresContext = createContext();

export const App = () => {
  const [scoresContextValue, setScoresContextValue] = useState([
    {
      id: 1,
      top: 200,
      left: 200,
      element: Strength,
      configs: {
        isNameBottom: true,
        isModAboveScore: true,
        isModBig: true,
        bgColor: "accent",
        textColor: "primary",
        isShorthand: true,
        isCapital: true,
        scoreType: "wis",
        score: 20,
      },
    },
    {
      id: 2,
      top: 200,
      left: 200,
      element: Strength,
      configs: {
        isNameBottom: null,
        isModAboveScore: null,
        isModBig: null,
        bgColor: "primary",
        textColor: "accent",
        isShorthand: null,
        isCapital: null,
        scoreType: "cha",
        score: 17,
      },
    },
  ]);

  const updateScoresContextValue = (newScore) => {
    setScoresContextValue([...scoresContextValue, newScore]);
  };

  return (
    <ScoresContext.Provider
      value={{ scoresContextValue, updateScoresContextValue }}
    >
      <div className="w-screen h-screen bg-base">
        <AddScoreButton></AddScoreButton>
        {scoresContextValue.map((score) => (
          <DragContextProvider
            id={score.id}
            top={score.top}
            left={score.left}
            element={score.element}
            configs={score.configs}
          />
        ))}
      </div>
    </ScoresContext.Provider>
  );
};

export default App;
