import React from "react";

export const SampleCard = ({ children, style }) => {
  // logic

  return (
    <div
      style={style}
      className="bg-secondary p-5 absolute flex items-center justify-center rounded-lg text-accent"
    >
      {children + "can you see me??"}
    </div>
  );
};
export default SampleCard;
