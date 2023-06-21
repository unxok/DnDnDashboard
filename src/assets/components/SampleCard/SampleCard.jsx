import React from "react";
import { forwardRef } from "react";

export const SampleCard = ({ children, style }) => {
  // logic

  return (
    <div
      style={style}
      className="bg-secondary p-5 absolute flex items-center justify-center rounded-lg text-accent"
    >
      {children}
    </div>
  );
};
export default SampleCard;
