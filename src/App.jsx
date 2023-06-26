// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useState, createContext, useContext } from "react";
import { DraggableContainer } from "./assets/components/DragContextProvider/DragContextProvider";
import { AddCardForm } from "./assets/components/AddCardForm/AddCardForm";
import { useEffect } from "react";
import { Toolbar } from "./assets/components/Toolbar/Toolbar";
import { Alert } from "./assets/components/Alert/Alert";
import { UploadSaveForm } from "./assets/components/UploadSaveForm/UploadSaveForm";
import { EditCardForm } from "./assets/components/EditCardForm/EditCardForm";
import { getElementByName } from "./assets/components/ConfigMap/ConfigMap";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { OverlayMaker } from "./assets/components/OverlayMaker/OverlayMaker";

export const App = () => {
  const [isModalShow, setModalShow] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedTypeConfig, setSelectedTypeConfig] = useState(null);
  const [isFormInvalid, setFormInvalid] = useState(false);
  const [isAlertVisible, toggleAlertVisible] = useState(false);
  const [isUploadModalShow, setUploadModalShow] = useState(false);
  const [{ alertType, alertText }, setAlertType] = useState({});
  const [firstLoad, setFirstLoad] = useState(true);
  const [overlay, setOverlay] = useState(null);
  const [isEditMode, setEditMode] = useState(false);
  const [isEditModalShow, setEditModalShow] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      toggleAlertVisible(false);
    }, 2600);
  }, [isAlertVisible]);

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

  const handleDragStart = ({ active: { id } }) => {
    cards.forEach((card) => {
      if (card.id === id) {
        setOverlay({ element: card.element, configs: card.configs });
        if (isEditMode) {
          setEditId(card);
          setEditModalShow(true);
          console.log("edit mode should be enabled for id: ", editId);
        }
      }
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

  const updateModalShow = (bool) => {
    setModalShow(bool);
  };

  const updateUploadModalShow = (bool) => {
    setUploadModalShow(bool);
  };

  const updateCardsFromUpload = (upload) => {
    setCards(upload);
  };

  const updateEditModalShow = () => {
    setEditModalShow((prev) => {
      return !prev;
    });
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
    console.log("cards : ", cards);
  }, [cards]);

  useEffect(() => {
    if (isUploadModalShow) {
      console.log("alert should trigger ");
      triggerAlert("info", "Current Dashboard will be overwritten!");
    }
  }, [isUploadModalShow]);

  return (
    <div className="w-screen h-screen bg-base flex justify-center items-start">
      <Toolbar
        updateModalShow={updateModalShow}
        updateUploadModalShow={updateUploadModalShow}
        updateEditMode={updateEditMode}
        isEditMode={isEditMode}
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
          updateCardsFromUpload={updateCardsFromUpload}
        />
      )}
      {isEditModalShow && (
        <EditCardForm
          updateEditModalShow={updateEditModalShow}
          isEditModalShow={isEditModalShow}
          selectedTypeConfig={selectedTypeConfig}
          updateCards={updateCards}
          updateSelectedTypeConfig={updateSelectedTypeConfig}
          isFormInvalid={isFormInvalid}
          updateFormInvalid={updateFormInvalid}
          triggerAlert={triggerAlert}
          existingCard={editId}
        />
      )}
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
