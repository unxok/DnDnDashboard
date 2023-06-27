import clsx from "clsx";
import React from "react";

export const PlayerDetails = ({
  configs: { required, optional } = {},
  isoverlay,
}) => {
  // logic

  let parentCardShape = "flex-row";
  let childCardShape = "flex-col";
  if (optional.cardShape) {
    switch (optional.cardShape) {
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
  let textColor = "text-accent";
  if (optional.textColor) {
    textColor = optional.textColor;
  }
  let textPos = "text-center";
  if (optional.textPos) {
    textPos = optional.textPos;
  }

  let parentBg = "bg-primary";
  if (optional.parentBg) {
    parentBg = optional.parentBg;
  }
  let grandChildBg = "bg-base";
  if (optional.grandChildBg) {
    grandChildBg = optional.grandChildBg;
  }

  let parentCardClass = clsx(
    "flex",
    "w-max",
    "p-1",
    "rounded-lg",
    textColor,
    parentCardShape,
    textPos,
    parentBg
  );
  let childCardClass = clsx("flex", childCardShape, textPos);
  let grandChildCardClass = clsx(
    "p-2",
    "m-1",
    "rounded-md",
    textPos,
    grandChildBg
  );

  return (
    <div className={parentCardClass}>
      <div className={childCardClass}>
        <div className={grandChildCardClass}>
          <div className="text-sm">Class</div>
          <div className="font-semibold">{required.class}</div>
        </div>
        <div className={grandChildCardClass}>
          <div>
            <div className="text-sm">Background</div>
          </div>
          <div className="font-semibold">{required.background}</div>
        </div>
      </div>
      <div className={childCardClass}>
        <div className={grandChildCardClass}>
          <div className="text-sm">Race</div>
          <div className="font-semibold">{required.race}</div>
        </div>
        <div className={grandChildCardClass}>
          <div className="text-sm">Aligment</div>
          <div className="font-semibold">{required.alignment}</div>
        </div>
      </div>
    </div>
  );
};
