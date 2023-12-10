import React from "react";
import Tracker from "./tracker";

function Data() {
  return (
    <div className="w-full h-full grid grid-rows-4 md:grid-rows-[30%_70%] pl-16 p-2 md:p-8 duration-500">
      <Tracker />
      <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)]"></div>
    </div>
  );
}

export default Data;
