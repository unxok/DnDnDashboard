// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useRef } from "react";
import { DraggableWidget } from "./assets/components/DraggableWidget/DraggableWidget";
import { DragContextProvider } from "./assets/components/DragContextProvider/DragContextProvider";

export const App = () => {
  const myEl = useRef();

  return (
    <div className="w-screen h-screen bg-base">
      <DragContextProvider
        id={"myEl"}
        top={100}
        left={100}
        text={"this is a test"}
        widgetClass={
          "bg-primary p-5 absolute flex items-center justify-center rounded-lg text-accent"
        }
      ></DragContextProvider>
    </div>
  );
};

export default App;
