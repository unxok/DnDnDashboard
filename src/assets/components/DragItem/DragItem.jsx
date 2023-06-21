import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { useState } from "react";
import { Draggable } from "../Draggable/Draggable";
import { useEffect } from "react";

export const DragItem = ({ xDefault, yDefault, children, ...props }) => {
  const [coords, setCoords] = useState({
    x: xDefault,
    y: yDefault,
  });

  const [activeId, setActiveId] = useState(null);

  const handleDragStart = ({ active }) => {
    setActiveId(active.id);
  };

  const handleDragEnd = ({ delta, active, ...props }) => {
    console.log(active);
    setCoords((prevCoords) => {
      return {
        x: prevCoords.x + delta.x,
        y: prevCoords.y + delta.y,
      };
    });
    setActiveId(null);
  };

  useEffect(() => {
    console.log("state changed:", coords);
  }, [coords]);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="h-screen p-5 bg-secondary">
        <Draggable top={coords.y} left={coords.x} id={"someUID"}>
          {children}
        </Draggable>
      </div>
      <DragOverlay>{}</DragOverlay>
    </DndContext>
  );
};
