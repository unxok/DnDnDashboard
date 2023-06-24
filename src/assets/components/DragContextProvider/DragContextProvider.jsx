import React from "react";
import { DraggableProvider } from "../DraggableProvider/DraggableProvider";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";

export const DragContextProvider = ({
  id,
  top,
  left,
  element,
  configs,
  logCoords,
}) => {
  // logic

  const handleDragStart = () => {};

  const handleDragEnd = ({ delta }) => {
    logCoords(delta, id);
  };

  const Element = element || "div";

  // render
  return (
    <DndContext
      key={id}
      onDragStart={handleDragStart}
      onDragCancel={() => {}}
      onDragEnd={handleDragEnd}
    >
      <DraggableProvider
        id={id}
        top={top}
        left={left}
        element={element}
        configs={configs}
      ></DraggableProvider>
      <DragOverlay modifiers={[restrictToParentElement]}>
        <Element configs={configs} isoverlay={true}></Element>
      </DragOverlay>
    </DndContext>
  );
};
