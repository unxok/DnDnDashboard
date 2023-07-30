import React from "react";
import clsx from "clsx";
import { defaultCardProps } from "Cards";

type Required = {
  score: number;
};

type Optional = {
  bgColor: string;
  isNameTop?: boolean;
  isShorthand?: boolean;
  textCase: "regular" | "upper" | "lower";
  textColor: string;
};

export const Initiative = (props: defaultCardProps<Required, Optional>) => {
  // logic

  const { isoverlay, children, defaultClassName } = props;
  const { required, optional = {} as Optional } = props.configs;
  const { score } = required;
  const { bgColor, isNameTop, isShorthand, textCase, textColor } = optional;

  const bg = bgColor ? "bg-" + bgColor : "bg-primary";
  const txt = textColor ? "text-" + textColor : "text-accent";

  let initiativeName = "Initiative";
  if (isShorthand) {
    initiativeName = "Init";
  }
  if (textCase === "lower") {
    initiativeName = initiativeName.toLowerCase();
  } else if (textCase === "upper") {
    initiativeName = initiativeName.toUpperCase();
  }

  let cardClass = clsx(
    "flex",
    "p-3",
    "text-lg",
    "rounded-lg",
    "text-center",
    { "opacity-50": isoverlay },
    bg,
    txt,
    { "flex-col-reverse": isNameTop },
    { "flex-col": !isNameTop },
    defaultClassName
  );

  return (
    <div className={cardClass}>
      {children}
      <div>{initiativeName}</div>
      <div className="text-3xl font-semibold">{score}</div>
    </div>
  );
};
