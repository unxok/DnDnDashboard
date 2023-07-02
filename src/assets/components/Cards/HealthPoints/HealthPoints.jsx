import React from "react";
import clsx from "clsx";

export const HealthPoints = ({
  configs: { required, optional } = {},
  isoverlay,
  updateFormShow,
}) => {
  // logic

  let isShorthand = false;
  if (optional.isShorthand) {
    isShorthand = optional.isShorthand;
  }
  let textCase = "regular";
  if (optional.textCase) {
    textCase = optional.textCase;
  }

  const nameMap = (isShorthand, textCase) => {
    if (isShorthand) {
      switch (textCase) {
        case "regular":
        case "upper":
          return "HP";
        case "lower":
          return "hp";
      }
    }

    switch (textCase) {
      case "regular":
        return "Health Points";
      case "upper":
        return "HEALTH POINTS";
      case "lower":
        return "Health Points";
    }
  };

  let bgColor = "bg-primary";
  if (optional.bgColor) {
    bgColor = optional.bgColor;
  }

  let textColor = "text-accent";
  if (optional.textColor) {
    textColor = optional.textColor;
  }

  let isNameTop = "flex-col";
  if (optional.isNameTop) {
    isNameTop = "flex-col-reverse";
  }

  let showSlash = true;
  if (optional.showSlash === "false") {
    showSlash = false;
  }

  let pointsFlex = "flex-row";
  if (optional.pointsFlex) {
    pointsFlex = optional.pointsFlex;
  }

  let cardClass = clsx(
    "flex",
    "p-3",
    "text-lg",
    "rounded-lg",
    "text-center",
    { "opacity-50": isoverlay },
    bgColor,
    textColor,
    isNameTop
  );

  let pointsContainerClass = clsx(
    "flex flex-row items-center justify-evenly",
    pointsFlex
  );

  return (
    <div className={cardClass}>
      <div>{nameMap(isShorthand, textCase)}</div>
      <div className={pointsContainerClass}>
        <div className="text-3xl font-semibold">{required.currentPoints}</div>
        <div className="text-xl font-semibold flex flex-row self-center justify-center items-center">
          {showSlash && <span className="text-sm mr-1">/</span>}
          {required.maxPoints}
        </div>
      </div>
      <div className="bg-accent text-black w-max self-center rounded-md mt-1">
        <button
          onClick={() => {
            console.log("setFormShow called");
            updateFormShow("hp", true);
          }}
          className="hover:text-green-500 mx-1 rounded-md"
        >
          +/-
        </button>
      </div>
    </div>
  );
};
