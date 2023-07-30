import React from "react";
import clsx from "clsx";
import { defaultCardProps } from "Cards";

type Required = {
  score: number;
};

type Optional = {
  bgColor: string;
  isNameTop: boolean;
  isShorthand: boolean;
  textCase: "regular" | "upper" | "lower";
  textColor: string;
};

export const ArmorClass = (props: defaultCardProps<Required, Optional>) => {
  // logic
  const { isoverlay, children, defaultClassName } = props;
  const { required, optional = {} as Optional } = props.configs;

  const { bgColor, isNameTop, isShorthand, textCase, textColor } = optional;

  let bg = bgColor ? "bg-" + bgColor : "bg-primary";
  let txt = textColor ? "text-" + textColor : "text-accent";

  let cardClass = clsx(
    "flex",
    "p-3",
    "text-lg",
    "rounded-lg",
    "text-center",
    { "opacity-50": isoverlay },
    bg,
    txt,
    { "flex-col": isNameTop },
    { "flex-col-reverse": !isNameTop }
  );

  let armorClassName = "Armor Class";

  if (isShorthand) {
    armorClassName = "AC";
  }

  if (textCase === "lower") {
    armorClassName = armorClassName.toLowerCase();
  } else if (textCase === "upper") {
    armorClassName = armorClassName.toUpperCase();
  }

  return (
    <div className={clsx(cardClass, defaultClassName)}>
      {children}
      <div>{armorClassName}</div>
      <div className="text-3xl font-semibold">{required.score}</div>
    </div>
  );
};
