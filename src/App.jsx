import "./App.css";
import SampleCard from "./assets/components/SampleCard/SampleCard";
import WidgetBase from "./assets/components/WidgetBase/WidgetBase";

import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./assets/components/Draggable/Draggable.jsx";
import { Droppable } from "./assets/components/Droppable/Droppable.jsx";
import { useState } from "react";

const App = () => {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState(null);

  const handleDragEnd = (event) => {
    const { over } = event;

    setParent(over ? over.id : null);
  };

  const draggableMarkup = <Draggable id="draggable">Drag Me</Draggable>;

  return (
    <DndContext className="bg-base h-screen p-5" onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : "Drop Here"}
        </Droppable>
      ))}
    </DndContext>
  );
};

export default App;
