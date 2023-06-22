import React from "react";

export const SampleCard = ({ children, text, config, ...props }) => {
  // logic
  const { namePos, modAboveScore, bgColor, textColor } = config || {};

  return (
    <div className="bg-accent text-primary w-max p-5 capitalize" {...props}>
      {text}
    </div>
  );
};
export default SampleCard;
