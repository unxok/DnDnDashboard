import React from "react";
import { useDroppable } from "@dnd-kit/core";

export const Droppable = (props) => {
  // logic

  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      className="bg-primary w-max p-5 rounded-lg m-5 text-white"
      style={style}
    >
      {props.children}
    </div>
  );
};

export default Droppable;
