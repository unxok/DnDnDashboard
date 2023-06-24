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

  const generateId = () => {
    let id = Math.floor(Math.random().toFixed(4) * 10000);
    console.log(id);
    return id;
  };

  const updateCardsContextValue = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
    console.log("card should be added to context and rendered : ", newCard);
  };

  const updateSelectedTypeConfig = (selectedType) => {
    setSelectedTypeConfig(selectedType);
  };

  const updateFormInvalid = (bool) => {
    setFormInvalid(bool);
  };

  useEffect(() => {
    console.log("current cards", cards);
  }, [cards]);

  const updateModalShow = () => {
    setModalShow(false);
  };

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
        updateCardsContextValue={updateCardsContextValue}
        selectedTypeConfig={selectedTypeConfig}
        updateSelectedTypeConfig={updateSelectedTypeConfig}
        //newCardValue={newCardValue}
        //initializeNewCardValue={initializeNewCardValue}
        //updateNewCardValue={updateNewCardValue}
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
        />
      ))}
    </div>
  );
};

export default App;
