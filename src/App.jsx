// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useState, createContext, useContext } from "react";
import { DragContextProvider } from "./assets/components/DragContextProvider/DragContextProvider";
import { AbilityScore } from "./assets/components/AbilityScore/AbilityScore";
import { AddCardButton } from "./assets/components/AddCardButton/AddCardButton";
import { useEffect } from "react";

export const CardsContext = createContext();

export const App = () => {
  const [isModalShow, setModalShow] = useState(false);
  const [cardsContextValue, setCardsContextValue] = useState([
    {
      // id: 1,
      // top: 200,
      // left: 200,
      // element: AbilityScore,
      // configs: {
      //   required: {
      //     scoreType: "wis",
      //     score: 20,
      //   },
      //   optional: {
      //     isNameBottom: true,
      //     isModAboveScore: true,
      //     isModBig: true,
      //     bgColor: "accent",
      //     textColor: "primary",
      //     isShorthand: true,
      //     isCapital: true,
      //   },
      // },
    },
  ]);

  const updateCardsContextValue = (newCard) => {
    setCardsContextValue((prevCardsContextValue) => [
      ...prevCardsContextValue,
      newCard,
    ]);
    console.log("card should be added to context and rendered : ", newCard);
  };

  useEffect(() => {
    console.log("current cards", cardsContextValue);
  }, [cardsContextValue]);

  const updateModalShow = () => {
    setModalShow(false);
  };

  return (
    <CardsContext.Provider
      value={{ cardsContextValue, updateCardsContextValue }}
    >
      <div className="w-screen h-screen bg-base">
        <div className="absolute bg-white">
          <button
            onClick={() => {
              setModalShow(true);
            }}
          >
            Add Card
          </button>
        </div>
        <AddCardButton
          isModalShow={isModalShow}
          updateModalShow={updateModalShow}
        ></AddCardButton>
        {cardsContextValue.map((card) => (
          <DragContextProvider
            id={card.id}
            key={card.id}
            top={card.top}
            left={card.left}
            element={card.element}
            configs={card.configs}
          />
        ))}
      </div>
    </CardsContext.Provider>
  );
};

export default App;
