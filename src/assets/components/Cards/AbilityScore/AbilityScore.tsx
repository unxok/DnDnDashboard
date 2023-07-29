import React, { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  isoverlay: boolean;
  configs: {
    required: Required;
    optional?: Optional;
  };
  children: ReactNode;
  defaultClassName: string;
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

  const { isoverlay, defaultClassName } = props;
  const { required, optional = {} as Optional } = props.configs;

  const { score, scoreType } = required;

  const {
    isModAboveScore,
    isModBig,
    isNameBottom,
    isShorthand,
    textCase,
    bgColor,
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

  let bg = bgColor ? " bg-" + bgColor : " bg-primary";
  let txt = textColor ? " text-" + textColor : " text-accent";

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
    { "opacity-50": isoverlay }
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

  console.log(props.defaultClassName);

  // render
  return (
    <div className={clsx(cardContainerClass, defaultClassName)}>
      <div className={"text-lg"}>{scoreName}</div>
      <div className={scoreContainerClass}>
        <div className={modClass}>{modifier}</div>
        <div className={scoreClass}>{required.score}</div>
      </div>
      {props.children}
    </div>
  );
};
