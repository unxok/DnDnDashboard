import React from "react";
import { useDroppable } from "@dnd-kit/core";

export const DroppableTest = () => {
  const { setNodeRef } = useDroppable({
    id: "test=id",
  });

  return (
    <div ref={setNodeRef} className="bg-white">
      test droppable
    </div>
  );
};
