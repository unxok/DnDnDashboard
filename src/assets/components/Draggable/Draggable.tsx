import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const Draggable = ({
  top,
  left,
  key,
  id,
  className,
  text,
  ...props
}) => {
  // logic
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "some-uid",
  });

  const style = {
    transform: "unset", //CSS.Transform.toString(transform),
    top: top,
    left: left,
  };

  return (
    <div
      className={className}
      ref={setNodeRef}
      style={style}
      id={id}
      {...listeners}
      {...attributes}
    >
      {text}
    </div>
  );
};
