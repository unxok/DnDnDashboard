import "./App.css";
// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { useState } from "react";
import { Draggable } from "./assets/components/Draggable/Draggable";
import { useEffect } from "react";

const App = () => {
  const [langs, setLangs] = useState([
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "C",
    "Ruby",
    "Go",
    "Rust",
  ]);

  const [coords, setCoords] = useState({
    x: 25,
    y: 25,
  });

  const handleDragEnd = ({ delta }) => {
    console.log("drag ended");
    console.log("delta.x : ", delta.x);
    console.log("delta.y : ", delta.y);
    setCoords((prevCoords) => {
      return {
        x: prevCoords.x + delta.x,
        y: prevCoords.y + delta.y,
      };
    });
  };

  useEffect(() => {
    console.log("state changed:", coords);
  }, [coords]);

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="h-screen p-5 bg-secondary">
        <h1>Languages</h1>
        <Draggable top={coords.y} left={coords.x}></Draggable>
      </div>
    </DndContext>
  );
};

export default App;
