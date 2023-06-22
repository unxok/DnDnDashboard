import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Strength = ({ text, configs, isoverlay }) => {
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

  const modifier = Math.floor((text - 10) / 2);
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
  let cardContainerClass =
    "p-4 w-24 absolute flex items-center justify-center rounded-lg" +
    bg +
    textColor +
    (isNameBottom ? " flex-col-reverse " : " flex-col") +
    (isoverlay ? " opacity-50" : "");

  let scoreContainerClass =
    "flex items-center justify-center " +
    (isModAboveScore ? "flex-col" : "flex-col-reverse");

  let scoreName = configs.isShorthand ? shortName : longName;
  scoreName = configs.isCapital ? scoreName.toUpperCase() : scoreName;

  useEffect(() => {
    console.log(configs);
  }, []);
  // render
  return (
    <div name="card-container" className={cardContainerClass}>
      <div className={"text-lg"}>{scoreName}</div>
      <div className={scoreContainerClass} name="score-container">
        <div className={modClass}>{modifier}</div>
        <div className={scoreClass}>{text}</div>
      </div>
    </div>
  );
};
