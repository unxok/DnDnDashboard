// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useState, createContext, useEffect } from "react";
import { DraggableProvider } from "./assets/components/DraggableProvider/DraggableProvider";
import { Toolbar } from "./assets/components/Toolbar/Toolbar";
import { Alert } from "./assets/components/Alert/Alert";
import { getElementByName } from "./assets/components/ConfigMap/ConfigMap";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { OverlayMaker } from "./assets/components/OverlayMaker/OverlayMaker";
import "./App.css";
import * as Toast from "@radix-ui/react-toast";
import { useRef } from "react";

export const AlertContext = createContext();

export const App = () => {
  const [cards, setCards] = useState([]);
  const [selectedTypeConfig, setSelectedTypeConfig] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const [overlay, setOverlay] = useState(null);
  const [alertVisibility, setAlertVisibility] = useState(false);
  const alertTimerRef = useRef(0);
  const alertRef = useRef();
  const [alertDetail, setAlertDetail] = useState(null);

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
  // autosave
  useEffect(() => {
    if (!firstLoad) {
      const saveString = JSON.stringify(
        cards.map((obj) => {
          const newObj = { ...obj };
          newObj.element = newObj.element ? newObj.name : undefined;
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

  const getCardById = (id) => {
    let result = null;
    cards.forEach((card) => {
      if (card.id === id) {
        result = card;
      }
    });
    return result;
  };

  const triggerAlert = (aType, aText) => {
    console.log("trigger alert activated");
    setAlertDetail({
      alertType: aType,
      alertText: aText,
    });
    setAlertVisibility(false);
    window.clearTimeout(alertTimerRef.current);
    alertTimerRef.current = window.setTimeout(() => {
      setAlertVisibility(true);
    }, 100);
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

  const handleDragStart = ({ active: { id } }) => {
    cards.forEach((card) => {
      if (card.id === id) {
        setOverlay({ element: card.element, configs: card.configs });
      }
    });
  };
  const updateCardsFromUpload = (upload) => {
    setCards(upload);
  };

  const updateHp = (num) => {
    console.log("hp update triggered");
    let hpCards = cards.filter((card) => card.name === "HealthPoints");
    let nonHpCards = cards.filter((card) => card.name !== "HealthPoints");

    hpCards = hpCards.map((card) => ({
      ...card,
      configs: {
        ...card.configs,
        required: {
          ...card.configs.required,
          currentPoints: Number(card.configs.required.currentPoints) + num,
        },
      },
    }));
    console.log("hpCards = ", hpCards);

    setCards(hpCards.concat(nonHpCards));
  };

  useEffect(() => {
    console.log("cards : ", cards);
  }, [cards]);

  return (
    <Toast.Provider swipeDirection="right" duration={3000}>
      <AlertContext.Provider value={triggerAlert}>
        <Toast.Viewport className="fixed right-10 w-max" />
        <div className="grid-container flex h-screen w-screen items-start justify-center bg-base">
          <Toolbar
            updateCards={updateCards}
            cards={cards}
            selectedTypeConfig={selectedTypeConfig}
            setSelectedTypeConfig={setSelectedTypeConfig}
            updateCardsFromUpload={updateCardsFromUpload}
          ></Toolbar>
          <Alert
            alertVisibility={alertVisibility}
            setAlertVisibility={setAlertVisibility}
            alertDetail={alertDetail}
            ref={alertRef}
          ></Alert>

          <DndContext
            key="primaryDndContext"
            onDragStart={handleDragStart}
            onDragCancel={() => {}}
            onDragEnd={handleDragEnd}
          >
            {cards.map((card) => (
              <DraggableProvider
                id={card.id}
                key={card.id}
                top={card.top}
                left={card.left}
                element={card.element}
                configs={card.configs}
                logCoords={logCoords}
                updateCards={updateCards}
                selectedTypeConfig={selectedTypeConfig}
                setSelectedTypeConfig={selectedTypeConfig}
                getCardById={getCardById}
              ></DraggableProvider>
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
      </AlertContext.Provider>
    </Toast.Provider>
  );
};

export default App;
