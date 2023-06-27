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
  updateHp,
}) => {
  // logic

  // render
  return (
    <DraggableProvider
      id={id}
      key={id}
      top={top}
      left={left}
      element={element}
      configs={configs}
      updateHp={updateHp}
    ></DraggableProvider>
  );
};
