// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { React, useRef } from "react";
import { DragContextProvider } from "./assets/components/DragContextProvider/DragContextProvider";
import SampleCard from "./assets/components/SampleCard/SampleCard";
import { Strength } from "./assets/components/AbilityScores/Strength/Strength";

const someConfig = {
  isNameBottom: true,
  isModAboveScore: false,
  isModBig: true,
  bgColor: "primary",
  textColor: "accent",
  isShorthand: true,
  isCapital: true,
  scoreType: "str",
};

const someConfig1 = {
  isNameBottom: false,
  isModAboveScore: null,
  isModBig: null,
  bgColor: "secondary",
  textColor: "primary",
  isShorthand: true,
  isCapital: false,
  scoreType: "wis",
};

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
      <DragContextProvider
        id={"str"}
        top={200}
        left={200}
        element={Strength}
        text={20}
        configs={someConfig}
      ></DragContextProvider>
      <DragContextProvider
        id={"str"}
        top={200}
        left={200}
        element={Strength}
        text={18}
        configs={someConfig1}
      ></DragContextProvider>
    </div>
  );
};

export default App;
