import React from "react";
import clsx from "clsx";

export const ArmorClass = ({
  configs: { required, optional } = {},
  isoverlay,
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
          return "AC";
        case "lower":
          return "ac";
      }
    }

    switch (textCase) {
      case "regular":
        return "Armor Class";
      case "upper":
        return "ARMOR CLASS";
      case "lower":
        return "armor class";
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

  return (
    <div className={cardClass}>
      <div>{nameMap(isShorthand, textCase)}</div>
      <div className="text-3xl font-semibold">{required.score}</div>
    </div>
  );
};
