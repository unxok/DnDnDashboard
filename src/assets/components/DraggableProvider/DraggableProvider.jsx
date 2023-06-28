import React from "react";
import { useContext } from "react";
import { DragModeContext } from "../../../App";
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

  const isDragmode = useContext(DragModeContext);

  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
    disabled: isDragmode,
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
