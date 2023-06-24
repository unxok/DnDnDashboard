// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useState, createContext, useContext } from "react";
import { DragContextProvider } from "./assets/components/DragContextProvider/DragContextProvider";
import { AbilityScore } from "./assets/components/AbilityScore/AbilityScore";
import { AddCardButton } from "./assets/components/AddCardButton/AddCardButton";
import { useEffect } from "react";
import plus from "./assets/svgs/plus.svg";
import { useRef } from "react";

export const App = () => {
  const [isModalShow, setModalShow] = useState(false);
  const [cards, setCards] = useState([{}]);
  const [selectedTypeConfig, setSelectedTypeConfig] = useState(null);
  //const [newCardValue, setNewCardValue] = useState({});
  const [isFormInvalid, setFormInvalid] = useState(false);

  const logCoords = (coords, id) => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            top: card.top + coords.y,
            left: card.left + coords.x,
          };
        } else {
          return card;
        }
      });
    });
  };

  const updateCards = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const updateSelectedTypeConfig = (selectedType) => {
    setSelectedTypeConfig(selectedType);
  };

  const updateFormInvalid = (bool) => {
    setFormInvalid(bool);
  };

  const updateModalShow = () => {
    setModalShow(false);
  };

  useEffect(() => {
    console.log("cards : ", cards);
  }, [cards]);

  return (
    <div className="w-screen h-screen bg-base">
      <div className="absolute opacity-70 left-5 top-5 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110 hover:opacity-100">
        <img
          src={plus}
          width="50vh"
          height="auto"
          onClick={() => {
            setModalShow(true);
          }}
        ></img>
      </div>
      <AddCardButton
        isModalShow={isModalShow}
        updateModalShow={updateModalShow}
        updateCards={updateCards}
        selectedTypeConfig={selectedTypeConfig}
        updateSelectedTypeConfig={updateSelectedTypeConfig}
        isFormInvalid={isFormInvalid}
        updateFormInvalid={updateFormInvalid}
      ></AddCardButton>
      {cards.map((card) => (
        <DragContextProvider
          id={card.id}
          key={card.id}
          top={card.top}
          left={card.left}
          element={card.element}
          configs={card.configs}
          logCoords={logCoords}
        />
      ))}
    </div>
  );
};

export default App;
