import React from "react";
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

  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
  });

  let style = {
    transform: "unset", //CSS.Transform.toString(transform),
    top: top,
    left: left,
  };

  const Element = element || null;

  // render
  return (
    <div ref={setNodeRef} style={style} className="absolute">
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
            className="absolute right-2 top-0 opacity-0 hover:cursor-move group-hover:opacity-100"
          >
            ✥
          </button>
          <button className="absolute left-2 top-0 opacity-0 hover:cursor-alias group-hover:opacity-100">
            ✎
          </button>
        </Element>
      )}
    </div>
  );
};
