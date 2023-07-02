import React from "react";
import { useState } from "react";

export const HpForm = ({ updateHp, updateFormShow, triggerAlert }) => {
  // logic

  const [changeAmount, setChangeAmount] = useState(0);

  const handleSubmit = () => {
    let num = Number(changeAmount);
    if (isNaN(num)) {
      triggerAlert("error", "Please enter a valid number");
    } else {
      updateHp(num);
      updateFormShow("hp", false);
    }
  };

  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-gray-500 bg-opacity-50 z-40">
      <div className="p-5 bg-primary shadow-lg border border-gray-700 z-50 flex flex-col rounded-lg items-center justify-center">
        <div className="bg-base text-white p-3 m-3 w-96 flex flex-col rounded-xl shadow-lg border border-gray-800">
          <div className="flex justify-between">
            Change HP by
            <input
              onChange={(e) => {
                setChangeAmount(e.target.value);
              }}
              className="rounded-md text-black text-end"
              type="number"
            />
          </div>
          {/*<div className="text-center bg-gray-500 mt-3 flex flex-row justify-center items-center w-max self-center py-1 px-2 rounded-md">
            <img className="mr-1" src={info} width="30vh" height="auto"></img>
            You can enter things like '+5+5+6'
  </div>*/}
        </div>
        <button
          onClick={handleSubmit}
          className="self-center bg-accent text-black p-2 rounded-lg border border-gray-800 shadow-lg transition ease-in-out delay-75 hover:scale-110 hover:bg-green-400 hover:shadow-md hover:shadow-gray-950 disabled:opacity-25 disabled:hover:scale-90 disabled:hover:bg-gray-300 disabled:hover:shadow-none disabled:hover:cursor-not-allowed active:scale-90 active:delay-0 active:shadow-none"
        >
          update
        </button>
      </div>
    </div>
  );
};
