import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { useState } from "react";
import { Draggable } from "../Draggable/Draggable";
import { useEffect } from "react";
import { useRef } from "react";

export const DragItem = ({ xDefault, yDefault, children, ...props }) => {
  let draggablesArray = [];

  let draggablesArrayRefs = draggablesArray.reduce((acc, obj) => {
    acc[obj.id] = useRef();
    return acc;
  });

  const [dragState, setDragState] = useState({});

  useEffect(() => {
    const initialState = draggablesArray.reduce((acc, obj) => {
      acc[obj.id] = obj;
      return acc;
    }, {});
    setDragState(initialState);
  }, []);

  const [activeId, setActiveId] = useState(null);

  const handleDragStart = ({ active }) => {
    setActiveId(active.id);
  };

  const handleDragEnd = ({ delta, active, ...props }) => {
    console.log(active.id);
    setDragState((prevState) => {
      return {
        ...prevState,
        [active.id]: prevState[active.id].top + delta.y,
        [active.id]: prevState[active.id].left + delta.x,
      };
    });

    console.log("dragState after update : ", dragState);
    setActiveId(null);
  };

  useEffect(() => {
    console.log("drag state : ", dragState);
  }, [dragState]);

  useEffect(() => {
    console.log("activeId : ", activeId);
  }, [activeId]);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="h-screen p-5 bg-secondary">
        {draggablesArray.map(
          ({ id, element, text, top, left, className, ...props }) => {
            <element>
              <Draggable
                top={top}
                left={left}
                id={id}
                ref={id}
                className={className}
              >
                {text}
              </Draggable>

              <DragOverlay>
                {true ? (
                  <div className=" absolute bg-primary">
                    This should be an overlay
                  </div>
                ) : null}
              </DragOverlay>
            </element>;
          }
        )}
      </div>
    </DndContext>
  );
};
