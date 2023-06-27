import React from "react";

export const PlayerDetails = ({
  configs: { required, optional } = {},
  isoverlay,
}) => {
  // logic

  return (
    <div className="flex-col flex w-max">
      <div className="flex-row flex">
        <div className="m-2">{required.class}</div>
        <div className="m-2">{required.background}</div>
      </div>
      <div className="flex-row flex">
        <div className="m-2">{required.race}</div>
        <div className="m-2">{required.alignment}</div>
      </div>
    </div>
  );
};
