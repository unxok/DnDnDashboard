import React, { forwardRef } from "react";
import error from "../../svgs/error.svg";
import info from "../../svgs/info.svg";
import success from "../../svgs/success.svg";
import warning from "../../svgs/warning.svg";
import clsx from "clsx";
import * as Toast from "@radix-ui/react-toast";

type AlertProps = {
  alertVisibility: boolean;
  setAlertVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  alertDetail: AlertDetail;
};

type AlertDetail = {
  alertType: string;
  alertText: string;
};

export const Alert = forwardRef((props: AlertProps, ref: any) => {
  // logic

  const { alertDetail, alertVisibility, setAlertVisibility, ...restProps } =
    props;

  const { alertType, alertText } = alertDetail || {};

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
    "z-[2147483647] mt-5 p-2 px-4 border border-black shadow-lg rounded-lg text-black transition-opacity duration-2500 flex flex-row items-center data-[state='open']:animate-slide-from-right data-[state='closed']:animate-slide-to-left data-[swipe='move']:translate-x-[--radix-toast-swipe-move-x] hover:cursor-grab active:cursor-grabbing",
    alertTypeClass
  );

  return (
    <Toast.Root
      className={elClass}
      open={alertVisibility}
      onOpenChange={setAlertVisibility}
      ref={ref}
      {...restProps}
    >
      <Toast.Title className="">
        <img
          className="mr-1"
          src={icon}
          alt="alertType"
          width="30vh"
          height="auto"
        ></img>
      </Toast.Title>
      <Toast.Description>{alertText}</Toast.Description>
      {/* <Toast.Close className="absolute right-2 top-4">
        <span aria-hidden className="animate-fade-in">
        ×
        </span>
      </Toast.Close> */}
    </Toast.Root>
  );
});
