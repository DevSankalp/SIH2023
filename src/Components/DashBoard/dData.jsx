import React from "react";
import Tracker from "./tracker";

function Data() {
  return (
    <div className="w-full h-full grid grid-rows-4 md:grid-rows-[30%_70%] pl-16 p-2 md:p-8 duration-500">
      <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] mb-8">
        <Tracker />
      </div>
      <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)]"></div>
    </div>
  );
}

export default Data;
