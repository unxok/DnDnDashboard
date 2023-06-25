// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useState, createContext, useContext } from "react";
import { DragContextProvider } from "./assets/components/DragContextProvider/DragContextProvider";
import { AddCardForm } from "./assets/components/AddCardForm/AddCardForm";
import { useEffect } from "react";
import { Toolbar } from "./assets/components/Toolbar/Toolbar";
import { Alert } from "./assets/components/Alert/Alert";
import { UploadSaveForm } from "./assets/components/UploadSaveForm/UploadSaveForm";

export const App = () => {
  const [isModalShow, setModalShow] = useState(false);
  const [cards, setCards] = useState([{}]);
  const [selectedTypeConfig, setSelectedTypeConfig] = useState(null);
  const [isFormInvalid, setFormInvalid] = useState(false);
  const [isAlertVisible, toggleAlertVisible] = useState(false);
  const [isUploadModalShow, setUploadModalShow] = useState(false);
  const [{ alertType, alertText }, setAlertType] = useState({});

  useEffect(() => {
    setTimeout(() => {
      toggleAlertVisible(false);
    }, 2600);
  }, [isAlertVisible]);

  const triggerAlert = (aType, aText) => {
    setAlertType({
      alertType: aType,
      alertText: aText,
    });
    toggleAlertVisible(true);
  };

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

  const updateModalShow = (bool) => {
    setModalShow(bool);
  };

  const updateUploadModalShow = (bool) => {
    setUploadModalShow(bool);
  };

  useEffect(() => {
    console.log("cards : ", cards);
  }, [cards]);

  return (
    <div className="w-screen h-screen bg-base flex justify-center items-start">
      <Toolbar
        updateModalShow={updateModalShow}
        updateUploadModalShow={updateUploadModalShow}
        cards={cards}
        triggerAlert={triggerAlert}
      ></Toolbar>
      <Alert isAlertVisible={isAlertVisible} alertType={alertType}>
        {alertText}
      </Alert>

      {isModalShow && (
        <AddCardForm
          isModalShow={isModalShow}
          updateModalShow={updateModalShow}
          updateCards={updateCards}
          selectedTypeConfig={selectedTypeConfig}
          updateSelectedTypeConfig={updateSelectedTypeConfig}
          isFormInvalid={isFormInvalid}
          updateFormInvalid={updateFormInvalid}
          triggerAlert={triggerAlert}
        ></AddCardForm>
      )}
      {isUploadModalShow && (
        <UploadSaveForm
          updateUploadModalShow={updateUploadModalShow}
          triggerAlert={triggerAlert}
        />
      )}
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
