import React from "react";
import clsx from "clsx";
import { defaultCardProps } from "Cards";

type Required = {
  spellLevel: string;
  maxPoints: number;
  currentPoints: number;
};

type Optional = {
  isNameTop?: boolean;
  bgColor: string;
  textColor: string;
  showSlash: boolean;
  pointsFlex: string;
};

export const SpellPoints = (props: defaultCardProps<Required, Optional>) => {
  // logic

  const { isoverlay, children, defaultClassName } = props;
  const { required, optional = {} as Optional } = props.configs;
  const { currentPoints, maxPoints, spellLevel } = required;
  const {
    bgColor,
    textColor,
    isNameTop,
    showSlash = true,
    pointsFlex,
  } = optional;

  const bg = bgColor ? "bg-" + bgColor : "bg-primary";
  const txt = textColor ? "text-" + textColor : "text-accent";

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
    { "flex-col-reverse": isNameTop },
    defaultClassName
  );

  let pointsContainerClass = clsx(
    "flex flex-row items-center justify-evenly"
    // { "flex-row": pointsFlex }
    // { "flex-col": !pointsFlex }
  );

  return (
    <div className={cardClass}>
      {children}
      <div>
        <div>Spell Points</div>
        <div>{spellLevel}</div>
      </div>
      <div className={pointsContainerClass}>
        <div className='text-3xl font-semibold'>{currentPoints}</div>
        <div className='flex flex-row items-center justify-center self-center text-xl font-semibold'>
          {showSlash && <span className='mr-1 text-sm'>/</span>}
          {maxPoints}
        </div>
      </div>
      <div className='mt-1 w-max self-center rounded-md bg-accent text-black'></div>
    </div>
  );
};
