import React from "react";

const WidgetBase = (props) => {
  // logic

  return (
    <div className="bg-secondary p-5 rounded-lg m-1">{props.children}</div>
  );
};

export default WidgetBase;
