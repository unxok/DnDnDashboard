// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useState, createContext, useContext } from "react";
import { DragContextProvider } from "./assets/components/DragContextProvider/DragContextProvider";
import { AbilityScore } from "./assets/components/AbilityScore/AbilityScore";
import { AddCardButton } from "./assets/components/AddCardButton/AddCardButton";

export const CardsContext = createContext();

export const App = () => {
  const [cardsContextValue, setCardsContextValue] = useState([
    {
      id: 1,
      top: 200,
      left: 200,
      element: AbilityScore,
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
      element: AbilityScore,
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
    setCardsContextValue([...cardsContextValue, newScore]);
  };

  return (
    <CardsContext.Provider
      value={{ cardsContextValue, updateScoresContextValue }}
    >
      <div className="w-screen h-screen bg-base">
        <AddCardButton></AddCardButton>
        {cardsContextValue.map((score) => (
          <DragContextProvider
            id={score.id}
            top={score.top}
            left={score.left}
            element={score.element}
            configs={score.configs}
          />
        ))}
      </div>
    </CardsContext.Provider>
  );
};

export default App;
