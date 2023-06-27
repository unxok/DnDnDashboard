import React from "react";
import clsx from "clsx";

export const PlayerName = ({
  configs: { required, optional } = {},
  isoverlay,
}) => {
  // logic

  let { playerName } = required;
  console.log(optional.preTagline);

  let preTagline = optional.preTagline ? optional.preTagline : false;
  let postTagline = optional.postTagline ? optional.postTagline : false;
  let bgColor = optional.bgColor ? "bg-" + optional.bgColor : "bg-primary";
  let textColor = optional.textColor
    ? "text-" + optional.textColor
    : "text-accent";
  let showBottomLine = optional.showBottomLine == "true" ? true : false;

  return (
    <div
      className={clsx(
        "absolute flex flex-col text-center rounded-md p-5",
        bgColor,
        textColor,
        { "opacity-50": isoverlay }
      )}
    >
      <div>{preTagline}</div>
      <div className="text-4xl font-bold w-max">{playerName}</div>
      <div className="w-max">{postTagline}</div>
      {showBottomLine && <hr className="mt-2" />}
    </div>
  );
};
