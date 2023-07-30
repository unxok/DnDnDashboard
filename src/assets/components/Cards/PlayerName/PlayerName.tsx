import React from "react";
import clsx from "clsx";
import { defaultCardProps } from "Cards";

type Required = {
  playerName: string;
};

type Optional = {
  preTagline: string;
  postTagline: string;
  bgColor: string;
  textColor: string;
  showBottomLine?: boolean;
};

export const PlayerName = (props: defaultCardProps<Required, Optional>) => {
  // logic
  const { isoverlay, children, defaultClassName } = props;
  const { required, optional = {} as Optional } = props.configs;

  const { playerName } = required;
  const { preTagline, postTagline, bgColor, textColor, showBottomLine } =
    optional;

  let bg = bgColor ? "bg-" + bgColor : "bg-primary";
  let txt = textColor ? "text-" + textColor : "text-accent";

  return (
    <div
      className={clsx(
        "absolute flex flex-col rounded-md p-5 text-center",
        bg,
        txt,
        { "opacity-50": isoverlay },
        defaultClassName
      )}
    >
      {children}
      <div>{preTagline}</div>
      <div className="w-max text-4xl font-bold">{playerName}</div>
      <div className="w-max">{postTagline}</div>
      {showBottomLine && <hr className="mt-2" />}
    </div>
  );
};
