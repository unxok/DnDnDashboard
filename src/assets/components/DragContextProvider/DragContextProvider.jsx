import React from "react";
import { DraggableProvider } from "../DraggableProvider/DraggableProvider";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { useState } from "react";

export const DragContextProvider = ({
  id,
  top,
  left,
  element,
  configs,
  updateCardContextCoords,
}) => {
  // logic
  const [coords, setCoords] = useState({
    top: top,
    left: left,
  });

  const handleDragStart = () => {};

  const handleDragEnd = ({ delta }) => {
    setCoords((prevCoords) => ({
      top: prevCoords.top + delta.y,
      left: prevCoords.left + delta.x,
    }));
    console.log("delta", delta.x, delta.y);
    updateCardContextCoords(coords, id);
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
        element={element}
        configs={configs}
      ></DraggableProvider>
      <DragOverlay modifiers={[restrictToParentElement]}>
        <Element configs={configs} isoverlay={true}></Element>
      </DragOverlay>
    </DndContext>
  );
};
