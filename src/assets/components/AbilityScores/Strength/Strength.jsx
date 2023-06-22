import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import clsx from "clsx";

export const Strength = ({ configs, isoverlay }) => {
  // logic
  let shortName, longName;
  switch (configs.scoreType) {
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

  const modifier = Math.floor((configs.score - 10) / 2);
  let isModAboveScore = configs.isModAboveScore
    ? configs.isModAboveScore
    : false;
  let isModBig = configs.isModBig ? configs.isModBig : false;
  let modClass = isModBig ? "text-2xl" : "";
  let scoreClass = isModBig ? "" : "text-2xl";

  let isNameBottom = configs.isNameBottom ? configs.isNameBottom : false;

  let bg = configs.bgColor ? " bg-" + configs.bgColor : " bg-primary";
  let textColor = configs.textColor
    ? " text-" + configs.textColor
    : " text-accent";
  let cardContainerClass = clsx(
    "p-4",
    "w-24",
    "absolute",
    "flex",
    "items-center",
    "justify-center",
    "rounded-lg",
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

  let scoreName = configs.isShorthand ? shortName : longName;
  scoreName = configs.isCapital ? scoreName.toUpperCase() : scoreName;

  // render
  return (
    <div name="card-container" className={cardContainerClass}>
      <div className={"text-lg"}>{scoreName}</div>
      <div className={scoreContainerClass} name="score-container">
        <div className={modClass}>{modifier}</div>
        <div className={scoreClass}>{configs.score}</div>
      </div>
    </div>
  );
};
