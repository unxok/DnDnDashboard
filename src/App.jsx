// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useState, createContext, useContext } from "react";
import { DragContextProvider } from "./assets/components/DragContextProvider/DragContextProvider";
import { AbilityScore } from "./assets/components/AbilityScore/AbilityScore";
import { AddCardButton } from "./assets/components/AddCardButton/AddCardButton";
import { useEffect } from "react";

export const App = () => {
  const [isModalShow, setModalShow] = useState(false);
  const [cards, setCards] = useState([{}]);

  const updateCardsContextValue = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
    console.log("card should be added to context and rendered : ", newCard);
  };

  useEffect(() => {
    console.log("current cards", cards);
  }, [cards]);

  const updateModalShow = () => {
    setModalShow(false);
  };

  return (
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
        updateCardsContextValue={updateCardsContextValue}
      ></AddCardButton>
      {cards.map((card) => (
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
  );
};

export default App;
