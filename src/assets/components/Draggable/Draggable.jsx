import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const Draggable = ({ top, left, key, id, ...props }) => {
  // logic
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "some-uid",
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    top: top,
    left: left,
  };

  return (
    <div
      className=" absolute bg-primary"
      ref={setNodeRef}
      style={style}
      id={id}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
};
