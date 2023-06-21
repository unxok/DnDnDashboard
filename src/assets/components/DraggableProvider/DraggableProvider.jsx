import React from "react";
import { useDraggable } from "@dnd-kit/core";
// import { CSS } from "@dnd-kit/utilities";
// import { useEffect } from "react";
// import { useState } from "react";
import SampleCard from "../SampleCard/SampleCard";

export const DraggableProvider = ({ id, top, left, text, element }) => {
  // logic
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
  });

  let style = {
    transform: "unset", //CSS.Transform.toString(transform),
    top: top,
    left: left,
  };

  // render
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-secondary p-5 absolute flex items-center justify-center rounded-lg text-accent"
    >
      {text}
    </div>
  );
};
