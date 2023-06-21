import React from "react";
import {
  DraggableWidget,
  DraggableWidgetProps,
} from "../DraggableWidget/DraggableWidget";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";

export const DragContextProvider = ({ id, top, left, text, widgetClass }) => {
  // logic

  // render
  return (
    <DndContext>
      <DraggableWidget
        id={id}
        top={top}
        left={left}
        widgetClass={widgetClass}
        text={text}
      ></DraggableWidget>
    </DndContext>
  );
};
