import React from "react";
import clsx from "clsx";

type Props = {
  isoverlay: boolean;
  configs: {
    required: Required;
    optional?: Optional;
  };
};

type Required = {
  scoreType: string;
  score: number;
};

type Optional = {
  bgColor: boolean | null;
  isModAboveScore: boolean | null;
  isModBig: boolean | null;
  isNameBottom: boolean | null;
  isShorthand: boolean | null;
  textCase: string;
  textColor: boolean | null;
};

export const AbilityScore = (props: Props) => {
  // logic

  const { required, optional = {} as Optional } = props.configs;

  const { score, scoreType } = required;

  const {
    isModAboveScore,
    isModBig,
    isNameBottom,
    isShorthand,
    textCase,
    textColor,
  } = optional;

  let shortName, longName;
  switch (scoreType) {
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

  const modifier = Math.floor((score - 10) / 2);

  let modClass = isModBig ? "text-2xl" : "";
  let scoreClass = isModBig ? "" : "text-2xl";

  let bg = optional.bgColor ? " bg-" + optional.bgColor : " bg-primary";
  let txt = optional.textColor ? " text-" + optional.textColor : " text-accent";

  let cardContainerClass = clsx(
    "p-4",
    { "w-24": isShorthand },
    { "w-28": !isShorthand },
    "absolute",
    "flex",
    "items-center",
    "justify-center",
    "rounded-lg",
    { "w-24": isShorthand },
    { "w-28": !isShorthand },
    bg,
    txt,
    { "flex-col-reverse": isNameBottom },
    { "flex-col": !isNameBottom },
    { "opacity-50": props.isoverlay }
  );

  let scoreContainerClass = clsx("flex", "items-center", "justify-center", {
    "flex-col": isModAboveScore,
    "flex-col-reverse": !isModAboveScore,
  });

  let scoreName = isShorthand ? shortName : longName;
  switch (textCase) {
    case "regular":
      break;
    case "lower":
      scoreName = scoreName.toLowerCase();
    case "upper":
      scoreName = scoreName.toUpperCase();
    default:
      break;
  }

  // render
  return (
    <div className={cardContainerClass}>
      <div className={"text-lg"}>{scoreName}</div>
      <div className={scoreContainerClass}>
        <div className={modClass}>{modifier}</div>
        <div className={scoreClass}>{required.score}</div>
      </div>
    </div>
  );
};
