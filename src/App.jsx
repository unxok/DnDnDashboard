// import SampleCard from "./assets/components/SampleCard/SampleCard";
// import WidgetBase from "./assets/components/WidgetBase/WidgetBase";
import { DragItem } from "./assets/components/DragItem/DragItem";

export const App = () => {
  return (
    <div className="w-screen h-screen bg-primary">
      <DragItem xDefault={25} yDefault={25}>
        Drag me! 1
      </DragItem>
      <DragItem xDefault={100} yDefault={100}>
        Drag me! 2
      </DragItem>
    </div>
  );
};

export default App;
