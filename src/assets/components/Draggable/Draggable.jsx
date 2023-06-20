import React from "react";
import { useDraggable } from "@dnd-kit/core";

export const Draggable = (props) => {
  // logic

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      className="bg-accent w-max p-5 rounded-lg m-5 text-white"
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </button>
  );
};

export default Draggable;
