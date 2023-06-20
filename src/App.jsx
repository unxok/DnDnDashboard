import { useState } from "react";
import "./App.css";
import SampleCard from "./assets/components/SampleCard/SampleCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const App = () => {
  return (
    <DragDropContext
      onDragEnd={() => {
        console.log("Drag drop event occurred");
      }}
    >
      <Droppable droppableId="root" type="group">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-base h-screen p-5"
          >
            <Draggable draggableId="someUID" key="someUID" index={1}>
              {(provided) => (
                <div
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                >
                  <SampleCard>This is a sample!</SampleCard>
                </div>
              )}
            </Draggable>
            <Draggable draggableId="someUID2" key="someUID2" index={2}>
              {(provided) => (
                <div
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                >
                  <SampleCard>This is a sample!</SampleCard>
                </div>
              )}
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default App;
