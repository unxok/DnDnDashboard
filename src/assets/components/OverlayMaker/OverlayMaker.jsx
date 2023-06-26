import React from "react";

export const OverlayMaker = ({ element, configs }) => {
  // logic

  const Element = element;

  return <Element configs={configs} isoverlay="true"></Element>;
};
