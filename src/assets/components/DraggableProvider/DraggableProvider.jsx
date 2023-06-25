import React from "react";
import { useDraggable } from "@dnd-kit/core";
// import { CSS } from "@dnd-kit/utilities";
// import { useEffect } from "react";
// import { useState } from "react";
import SampleCard from "../SampleCard/SampleCard";

export const DraggableProvider = ({
  id,
  top,
  left,
  text,
  element,
  isoverlay,
  configs,
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

  const Element = element || "div";

  // render
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="absolute z-10"
    >
      <Element configs={configs} text={text} {...props}></Element>
    </div>
  );
};
