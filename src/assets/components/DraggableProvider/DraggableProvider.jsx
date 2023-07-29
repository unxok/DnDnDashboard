import React from "react";
import { useContext } from "react";
import { DragModeContext } from "../../../App";
import { useDraggable } from "@dnd-kit/core";

export const DraggableProvider = ({
  id,
  top,
  left,
  text,
  element,
  configs,
  updateHp,
  updateFormShow,
  ...props
}) => {
  // logic

  const isDragmode = useContext(DragModeContext);

  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
    disabled: !isDragmode,
  });

  let style = {
    transform: "unset", //CSS.Transform.toString(transform),
    top: top,
    left: left,
  };

  const Element = element || null;

  // render
  return (
    <div ref={setNodeRef} style={style} className="absolute z-10">
      {Element && (
        <Element
          updateHp={updateHp}
          configs={configs}
          text={text}
          {...props}
          updateFormShow={updateFormShow}
          attributes={attributes}
          listeners={listeners}
          defaultClassName="group border-black border"
        >
          <button
            {...attributes}
            {...listeners}
            className="absolute right-2 top-0 opacity-0 group-hover:opacity-100"
          >
            ✥
          </button>
          <button className="absolute left-2 top-0 opacity-0 group-hover:opacity-100">
            ✎
          </button>
        </Element>
      )}
    </div>
  );
};
