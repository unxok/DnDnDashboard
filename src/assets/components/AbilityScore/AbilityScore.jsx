import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import clsx from "clsx";
export const AbilityScore = ({
  configs: { required, optional },
  isoverlay,
}) => {
  // logic
  let shortName, longName;
  switch (required.scoreType) {
    case "str":
      shortName = "Str";
      longName = "Strength";
      break;
    case "dex":
      shortName = "Dex";
      longName = "Dexterity";
      break;
    case "con":
      shortName = "Con";
      longName = "Constitution";
      break;
    case "int":
      shortName = "Int";
      longName = "Intelligence";
      break;
    case "wis":
      shortName = "Wis";
      longName = "Wisdom";
      break;
    case "cha":
      shortName = "Cha";
      longName = "Charisma";
      break;
    default:
      shortName = "Invalid";
      longName = "Invalid Ability Score";
      break;
  }

  required.score = required.score ? required.score : 0;
  const modifier = Math.floor((required.score - 10) / 2);
  let isModAboveScore = optional.isModAboveScore
    ? optional.isModAboveScore
    : false;
  let isModBig = optional.isModBig ? optional.isModBig : false;
  let modClass = isModBig ? "text-2xl" : "";
  let scoreClass = isModBig ? "" : "text-2xl";
  let isShorthand = optional.isShorthand ? optional.isShorthand : false;
  let isNameBottom = optional.isNameBottom ? optional.isNameBottom : false;

  let bg = optional.bgColor ? " bg-" + optional.bgColor : " bg-primary";
  let textColor = optional.textColor
    ? " text-" + optional.textColor
    : " text-accent";
  let cardContainerClass = clsx(
    "p-4",
    "w-24",
    "absolute",
    "flex",
    "items-center",
    "justify-center",
    "rounded-lg",
    { "w-24": isShorthand },
    { "w-28": !isShorthand },
    bg,
    textColor,
    { "flex-col-reverse": isNameBottom },
    { "flex-col": !isNameBottom },
    { "opacity-50": isoverlay }
  );

  let scoreContainerClass = clsx("flex", "items-center", "justify-center", {
    "flex-col": isModAboveScore,
    "flex-col-reverse": !isModAboveScore,
  });

  let scoreName = optional.isShorthand ? shortName : longName;
  scoreName = optional.isCapital ? scoreName.toUpperCase() : scoreName;

  // render
  return (
    <div name="card-container" className={cardContainerClass}>
      <div className={"text-lg"}>{scoreName}</div>
      <div className={scoreContainerClass} name="score-container">
        <div className={modClass}>{modifier}</div>
        <div className={scoreClass}>{required.score}</div>
      </div>
    </div>
  );
};
