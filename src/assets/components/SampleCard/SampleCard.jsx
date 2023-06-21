import React from "react";
import { DndContext } from "@dnd-kit/core";

import { Draggable } from "";

const SampleCard = (props) => {
  // logic

  return (
    <div className="bg-primary w-max p-5 rounded-lg">{props.children}</div>
  );
};
export default SampleCard;
