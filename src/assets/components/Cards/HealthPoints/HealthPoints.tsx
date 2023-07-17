import React from "react";
import clsx from "clsx";

type Props = {
  isoverlay: boolean;
  updateFormShow: (formType: string, bool: boolean) => void;
  configs: {
    required: Required;
    optional?: Optional;
  };
};

type Required = {
  currentPoints: number;
  maxPoints: number;
};

type Optional = {
  bgColor: string;
  isNameTop?: boolean;
  isShorthand?: boolean;
  pointsFlex?: boolean;
  showSlash?: boolean;
  textCase: string;
  textColor: string;
};

export const HealthPoints = (props: Props) => {
  // logic

  const { isoverlay, updateFormShow } = props;
  const { required, optional = {} as Optional } = props.configs;

  const { currentPoints, maxPoints } = required;

  const {
    bgColor,
    isNameTop,
    isShorthand,
    pointsFlex,
    showSlash,
    textCase,
    textColor,
  } = optional;

  const bg = bgColor ? "bg-" + bgColor : "bg-primary";
  const txt = textColor ? "text-" + textColor : "text-accent";

  let healthPointsName = "Health Points";
  if (isShorthand) {
    healthPointsName = "HP";
  }
  if (textCase === "lower") {
    healthPointsName = healthPointsName.toLowerCase();
  } else if (textCase === "upper") {
    healthPointsName = healthPointsName.toUpperCase();
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
    { "flex-col": !isNameTop },
    { "flex-col-reverse": isNameTop }
  );

  let pointsContainerClass = clsx(
    "flex items-center justify-evenly",
    { "flex-col": pointsFlex },
    { "flex-row": !pointsFlex }
  );

  return (
    <div className={cardClass}>
      <div>{healthPointsName}</div>
      <div className={pointsContainerClass}>
        <div className="text-3xl font-semibold">{currentPoints}</div>
        <div className="flex flex-row items-center justify-center self-center text-xl font-semibold">
          {!showSlash && <span className="mr-1 text-sm">/</span>}
          {maxPoints}
        </div>
      </div>
      <div className="mt-1 w-max self-center rounded-md bg-accent text-black">
        <button
          onClick={() => {
            console.log("setFormShow called");
            updateFormShow("hp", true);
          }}
          className="mx-1 rounded-md hover:text-green-500"
        >
          +/-
        </button>
      </div>
    </div>
  );
};
