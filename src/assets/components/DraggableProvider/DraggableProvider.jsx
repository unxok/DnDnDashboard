import React from "react";
import { useDraggable } from "@dnd-kit/core";
import SampleCard from "../SampleCard/SampleCard";
import { CSS } from "@dnd-kit/utilities";
import { useEffect } from "react";
import { useState } from "react";

export const DraggableProvider = ({ id, top, left, text, element }) => {
  // logic
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  let style = {
    transform: "unset", //CSS.Transform.toString(transform),
    top: top,
    left: left,
  };

  // render
  return (
    <div ref={setNodeRef} {...attributes} {...listeners}>
      <SampleCard style={style} id={id}>
        {text}
      </SampleCard>
    </div>
  );
};
