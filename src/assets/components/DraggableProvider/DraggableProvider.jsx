import React from "react";
import { useDraggable } from "@dnd-kit/core";

export const DraggableProvider = ({
  id,
  top,
  left,
  text,
  element,
  isoverlay,
  configs,
  updateHp,
  ...props
}) => {
  // logic
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
  });

  let style = {
    transform: "unset", //CSS.Transform.toString(transform),
    top: top,
    left: left,
  };

  const Element = element || null;

  // render
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="absolute z-10"
    >
      {Element && (
        <Element
          updateHp={updateHp}
          configs={configs}
          text={text}
          {...props}
        ></Element>
      )}
    </div>
  );
};
