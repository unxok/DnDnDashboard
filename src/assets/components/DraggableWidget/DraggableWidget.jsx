import React from "react";
import { useDraggable } from "@dnd-kit/core";
// import { CSS } from "@dnd-kit/utilities";

export const DraggableWidget = ({ id, top, left, text, widgetClass }) => {
  // logic
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
  });

  let style = {
    transform: "unset",
    top: top,
    left: left,
  };

  // render
  return (
    <div
      style={style}
      id={id}
      ref={setNodeRef}
      className={widgetClass}
      {...attributes}
      {...listeners}
    >
      {text}
    </div>
  );
};
