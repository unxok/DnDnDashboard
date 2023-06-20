import React from "react";

const SampleCard = (props) => {
  // logic

  return (
    <div className="text-white bg-primary w-max p-5 rounded-lg m-1">
      {props.children}
    </div>
  );
};

export default SampleCard;
