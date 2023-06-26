// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useState, createContext, useContext } from "react";
import { DraggableContainer } from "./assets/components/DragContextProvider/DragContextProvider";
import { AddCardForm } from "./assets/components/ToolbarForm/AddCardForm/AddCardForm";
import { useEffect } from "react";
import { Toolbar } from "./assets/components/Toolbar/Toolbar";
import { Alert } from "./assets/components/Alert/Alert";
import { UploadSaveForm } from "./assets/components/ToolbarForm/UploadSaveForm/UploadSaveForm";
import { EditCardForm } from "./assets/components/ToolbarForm/EditCardForm/EditCardForm";
import { getElementByName } from "./assets/components/ConfigMap/ConfigMap";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { OverlayMaker } from "./assets/components/OverlayMaker/OverlayMaker";
import { ToolbarForm } from "./assets/components/ToolbarForm/ToolbarForm";

export const App = () => {
  const [isFormShow, setFormShow] = useState({
    add: false,
    upload: false,
    edit: false,
  });
  const [cards, setCards] = useState([]);
  const [isAlertShow, toggleAlertShow] = useState(false);
  const [selectedTypeConfig, setSelectedTypeConfig] = useState(null);
  const [isFormInvalid, setFormInvalid] = useState(false);
  const [{ alertType, alertText }, setAlertType] = useState({});
  const [firstLoad, setFirstLoad] = useState(true);
  const [overlay, setOverlay] = useState(null);
  const [isEditMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      toggleAlertShow(false);
    }, 2600);
  }, [isAlertShow]);

  // autosave
  useEffect(() => {
    if (!firstLoad) {
      const saveString = JSON.stringify(
        cards.map((obj) => {
          const newObj = { ...obj };
          newObj.element = newObj.element ? newObj.element.name : undefined;
          return newObj;
        })
      );
      try {
        localStorage.setItem("autosave", saveString);
        console.log("successfully autosaved");
      } catch (e) {
        console.log("failed to autosave", e);
      }
    }
  }, [cards]);

  // load autosave
  useEffect(() => {
    if (firstLoad) {
      try {
        let tmp = JSON.parse(localStorage.getItem("autosave"));
        const parsedSave = tmp.map((obj) => {
          obj.element = getElementByName(obj.element);
          return obj;
        });
        setCards(parsedSave);
      } catch (e) {
        console.log("could not find autosave: ", e);
      }
      setFirstLoad(false);
    }
  }, []);

  const triggerAlert = (aType, aText) => {
    setAlertType({
      alertType: aType,
      alertText: aText,
    });
    toggleAlertShow(true);
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

  const handleDragEnd = ({ active, delta }) => {
    logCoords(delta, active.id);
  };

  const updateCards = (newCard, optsObj) => {
    optsObj && optsObj.edit
      ? setCards((prevCards) =>
          prevCards.filter((card) => card.id !== newCard.id).concat(newCard)
        )
      : optsObj && optsObj.delete
      ? setCards((prevCards) =>
          prevCards.filter((card) => card.id !== newCard.id)
        )
      : setCards((prevCards) => [...prevCards, newCard]);
  };

  const updateSelectedTypeConfig = (selectedType) => {
    setSelectedTypeConfig(selectedType);
  };

  const updateFormInvalid = (bool) => {
    setFormInvalid(bool);
  };

  const updateFormShow = (formType, bool) => {
    setFormShow((defVals) => ({
      ...defVals,
      [formType]: bool,
    }));
  };

  const handleDragStart = ({ active: { id } }) => {
    cards.forEach((card) => {
      if (card.id === id) {
        setOverlay({ element: card.element, configs: card.configs });
        if (isEditMode) {
          setEditId(card);
          updateFormShow("edit", true);
          console.log("edit mode should be enabled for id: ", editId);
        }
      }
    });
  };
  const updateCardsFromUpload = (upload) => {
    setCards(upload);
  };

  const updateEditMode = () => {
    setEditMode((prev) => {
      prev
        ? triggerAlert("info", "Edit Mode Off")
        : triggerAlert("info", "Edit Mode Enabled");
      return !prev;
    });
  };

  useEffect(() => {
    console.log("isFormShow : ", isFormShow);
  }, [isFormShow]);

  useEffect(() => {
    console.log("cards : ", cards);
  }, [cards]);

  useEffect(() => {
    if (isFormShow.upload) {
      console.log("alert should trigger ");
      triggerAlert("info", "Current Dashboard will be overwritten!");
    }
  }, [isFormShow]);

  return (
    <div className="w-screen h-screen bg-base flex justify-center items-start">
      <Toolbar
        updateEditMode={updateEditMode}
        updateFormShow={updateFormShow}
        isEditMode={isEditMode}
        cards={cards}
        triggerAlert={triggerAlert}
      ></Toolbar>
      <Alert isAlertVisible={isAlertShow} alertType={alertType}>
        {alertText}
      </Alert>
      <ToolbarForm
        isFormShow={isFormShow}
        updateFormShow={updateFormShow}
        updateCards={updateCards}
        selectedTypeConfig={selectedTypeConfig}
        updateSelectedTypeConfig={updateSelectedTypeConfig}
        isFormInvalid={isFormInvalid}
        updateFormInvalid={updateFormInvalid}
        triggerAlert={triggerAlert}
        updateCardsFromUpload={updateCardsFromUpload}
        existingCard={editId}
      />

      <DndContext
        key="primaryDndContext"
        onDragStart={handleDragStart}
        onDragCancel={() => {}}
        onDragEnd={handleDragEnd}
      >
        {cards.map((card) => (
          <DraggableContainer
            id={card.id}
            key={card.id}
            top={card.top}
            left={card.left}
            element={card.element}
            configs={card.configs}
            logCoords={logCoords}
          ></DraggableContainer>
        ))}
        {overlay && (
          <DragOverlay>
            <OverlayMaker
              element={overlay.element}
              configs={overlay.configs}
            ></OverlayMaker>
          </DragOverlay>
        )}
      </DndContext>
    </div>
  );
};

export default App;
