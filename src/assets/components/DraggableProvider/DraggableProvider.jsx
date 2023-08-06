import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { FormProvider } from "../ToolbarForm/FormProvider";
import { EditCardForm } from "../ToolbarForm/EditCardForm/EditCardForm";

export const DraggableProvider = ({
  id,
  top,
  left,
  text,
  element,
  configs,
  updateHp,
  updateFormShow,
  updateCards,
  selectedTypeConfig,
  setSelectedTypeConfig,
  getCardById,
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
          // attributes={attributes}
          // listeners={listeners}
          defaultClassName="group border-black border"
          {...props}
        >
          <button
            {...attributes}
            {...listeners}
            className="absolute right-2 top-0 opacity-0 hover:cursor-move group-hover:opacity-100"
          >
            ✥
          </button>
          <FormProvider
            form={
              <EditCardForm
                updateCards={updateCards}
                selectedTypeConfig={selectedTypeConfig}
                setSelectedTypeConfig={setSelectedTypeConfig}
                getCardById={getCardById}
                id={id}
              ></EditCardForm>
            }
          >
            <button className="absolute left-2 top-0 opacity-0 hover:cursor-alias group-hover:opacity-100">
              ✎
            </button>
          </FormProvider>
        </Element>
      )}
    </div>
  );
};
