import React from "react";
import clsx from "clsx";

export const HealthPoints = ({
  configs: { required, optional } = {},
  isoverlay,
  updateHp,
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

  let childCardClass = clsx(isNameTop);

  return (
    <div className={cardClass}>
      <div>{nameMap(isShorthand, textCase)}</div>
      <div className="text-3xl font-semibold">{required.score}</div>
      <div className={childCardClass}>
        <button
          onClick={() => {
            updateHp(-1);
          }}
          className="hover:text-red-500 mx-1 rounded-md text-2xl"
        >
          -
        </button>
        <button
          onClick={() => {
            console.log("button clicked");
            updateHp(1);
          }}
          className="hover:text-green-500 mx-1 rounded-md text-2xl"
        >
          +
        </button>
      </div>
    </div>
  );
};
