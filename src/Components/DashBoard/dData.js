import React from "react";
import userImg from "../Assets/profile1.webp";
import Tracker from "./tracker";

function Data() {
  return (
    <div className="w-full h-full grid grid-rows-[30%_70%] p-8">
      <Tracker />
      <div className="bg-white rounded-xl overflow-hidden shadow-[0_0_5px_rgba(0,0,0,.2)]"></div>
    </div>
  );
}

export default Data;
