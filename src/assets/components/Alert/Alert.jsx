import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import error from "../../svgs/error.svg";
import info from "../../svgs/info.svg";
import success from "../../svgs/success.svg";
import warning from "../../svgs/warning.svg";
import clsx from "clsx";

export const Alert = ({ alertType, children, isAlertVisible }) => {
  // logic
  let alertTypeClass;
  let icon;
  switch (alertType) {
    case "info":
      alertTypeClass = ["bg-accent", "text-black"];
      icon = info;
      break;
    case "warning":
      alertTypeClass = ["bg-yellow-500", "text-black"];
      icon = warning;
      break;
    case "error":
      alertTypeClass = ["bg-red-500", "text-black"];
      icon = error;
      break;
    case "success":
      alertTypeClass = ["bg-green-500", "text-black"];
      icon = success;
      break;
    default:
      alertTypeClass = ["bg-accent", "text-black"];
      icon = info;
      break;
  }

  let elClass = clsx(
    "mt-5 p-2 border border-black shadow-lg rounded-lg text-black transition-opacity duration-2500 flex flex-row items-center justify-center z-50",
    {
      "opacity-100": isAlertVisible,
      "opacity-0": !isAlertVisible,
    },
    alertTypeClass
  );

  return (
    <div className={elClass}>
      <img className="mr-1" src={icon} width="30vh" height="auto"></img>
      {children}
    </div>
  );
};
