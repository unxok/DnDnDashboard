import React from "react";

const SampleCard = (props) => {
  // logic

  return (
    <div className="bg-primary w-max p-5 rounded-lg">{props.children}</div>
  );
};
export default SampleCard;
