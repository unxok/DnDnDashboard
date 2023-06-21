import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { list } from "postcss";

export const DraggableWrapper = ({ element, children, id, ...props }) => {
  const Element = element || "div";
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
  });

  return (
    <Element ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </Element>
  );
};
