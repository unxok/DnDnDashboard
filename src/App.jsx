// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useRef } from "react";
import { DragContextProvider } from "./assets/components/DragContextProvider/DragContextProvider";
import SampleCard from "./assets/components/SampleCard/SampleCard";

export const App = () => {
  return (
    <div className="w-screen h-screen bg-base">
      <DragContextProvider
        id={"myEl"}
        top={100}
        left={100}
        element={SampleCard}
        text={"this is a test"}
      ></DragContextProvider>
    </div>
  );
};

export default App;
