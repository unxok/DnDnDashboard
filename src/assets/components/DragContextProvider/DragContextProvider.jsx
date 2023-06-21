import React from "react";
import { DraggableProvider } from "../DraggableProvider/DraggableProvider";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { useState } from "react";
import { SampleCard } from "../SampleCard/SampleCard";

export const DragContextProvider = ({ id, top, left, text, element }) => {
  // logic
  const [coords, setCoords] = useState({
    top: top,
    left: left,
  });

  const handleDragStart = () => {};

  const handleDragEnd = ({ active, delta }) => {
    console.log("active : ", active);
    console.log("delta : ", delta);
    setCoords((prevCoords) => ({
      top: prevCoords.top + delta.y,
      left: prevCoords.left + delta.x,
    }));
  };

  const Element = element || "div";

  // render
  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragCancel={() => {}}
      onDragEnd={handleDragEnd}
    >
      <DraggableProvider
        id={id}
        top={coords.top}
        left={coords.left}
        text={text}
        element={element}
        isoverlay={"false"}
      ></DraggableProvider>
      <DragOverlay modifiers={[restrictToParentElement]}>
        <div className="bg-secondary p-5 absolute flex items-center justify-center rounded-lg text-accent">
          {text}
        </div>
      </DragOverlay>
    </DndContext>
  );
};
