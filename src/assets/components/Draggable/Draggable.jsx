import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useEffect } from "react";

export const Draggable = (props) => {
  // logic
  const { attributes, listeners, setNodeRef, transform, translate } =
    useDraggable({
      id: "some-uid",
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    top: props.top,
    left: props.left,
  };

  return (
    <div
      className=" absolute bg-primary"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      Can you drag me?
    </div>
  );
};
