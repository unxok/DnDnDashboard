import React from "react";
import { DraggableProvider } from "../DraggableProvider/DraggableProvider";
import { DragOverlay } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";

export const DraggableContainer = ({
  id,
  top,
  left,
  element,
  configs,
  logCoords,
}) => {
  // logic

  const Element = element || "div";
  console.log("Element = ", Element);

  // render
  return (
    <div>
      <DraggableProvider
        id={id}
        key={id}
        top={top}
        left={left}
        element={element}
        configs={configs}
      ></DraggableProvider>
    </div>
  );
};
