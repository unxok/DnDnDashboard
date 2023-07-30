import clsx from "clsx";
import React from "react";
import { defaultCardProps } from "Cards";

type Required = {
  alignment: string;
  background: string;
  classs: string;
  race: string;
};

type Optional = {
  cardShape: "square" | "wide" | "tall";
  grandChildBg: string;
  parentBg: string;
  textColor: string;
  textPos: "text-center" | "text-start" | "text-end";
};

export const PlayerDetails = (props: defaultCardProps<Required, Optional>) => {
  // logic

  const { isoverlay, children, defaultClassName } = props;
  const { required, optional = {} as Optional } = props.configs;

  const { alignment, background, classs, race } = required;
  const { cardShape, grandChildBg, parentBg, textColor, textPos } = optional;

  let parentCardShape, childCardShape;
  if (cardShape) {
    switch (cardShape) {
      case "square":
        parentCardShape = "flex-row";
        childCardShape = "flex-col";
        break;
      case "wide":
        parentCardShape = "flex-row";
        childCardShape = "flex-row";
        break;
      case "tall":
        parentCardShape = "flex-col";
        childCardShape = "flex-col";
        break;
      default:
        parentCardShape = "flex-row";
        childCardShape = "flex-col";
        break;
    }
  }

  const pBg = parentBg ? "bg-" + parentBg : "bg-primary";
  const gBg = grandChildBg ? "bg-" + grandChildBg : "bg-base";
  const txt = textColor ? "text-" + textColor : "text-accent";

  let parentCardClass = clsx(
    "flex",
    "w-max",
    "p-1",
    "rounded-lg",
    txt,
    parentCardShape,
    textPos,
    pBg,
    defaultClassName,
    { "opacity-50": isoverlay }
  );
  let childCardClass = clsx("flex", childCardShape, textPos);
  let grandChildCardClass = clsx(
    "p-2",
    "m-1",
    "rounded-md",
    "border border-black",
    textPos,
    gBg
  );

  return (
    <div className={parentCardClass}>
      {children}
      <div className={childCardClass}>
        <div className={grandChildCardClass}>
          <div className="text-sm">Class</div>
          <div className="font-semibold">{classs}</div>
        </div>
        <div className={grandChildCardClass}>
          <div>
            <div className="text-sm">Background</div>
          </div>
          <div className="font-semibold">{background}</div>
        </div>
      </div>
      <div className={childCardClass}>
        <div className={grandChildCardClass}>
          <div className="text-sm">Race</div>
          <div className="font-semibold">{race}</div>
        </div>
        <div className={grandChildCardClass}>
          <div className="text-sm">Aligment</div>
          <div className="font-semibold">{alignment}</div>
        </div>
      </div>
    </div>
  );
};
