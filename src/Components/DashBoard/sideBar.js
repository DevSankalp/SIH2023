import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { LuBookMinus } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";

const infoData = {
  title: ["Profile", "Fee Statement", "Handbook", "Support", "Report"],
};

const iconArr = [
  <CgProfile className="text-xl" />,
  <LiaMoneyCheckAltSolid className="text-xl" />,
  <LuBookMinus className="text-xl" />,
  <BiSupport className="text-xl" />,
  <TbReportSearch className="text-xl" />,
];

const Sidebar = () => {
  return (
    <aside>
      <div className="sideBarBg h-full w-full transition-all duration-500 p-8 text-white font-questrial">
        <div className="flex flex-row mb-5">
          <a
            href="/"
            className="flex gap-5 flex-row justify-center items-center text-2xl mb-5 font-questrial font-bold shadow-sm p-5"
          >
            <img src={logo} alt="fusionX" className="rounded-full w-10 h-10" />
            FusionX
          </a>
        </div>
        <div class="navigation">
          <div className="w-full flex flex-col items-center gap-2">
            {infoData.title.map((title, index) => (
              <a
                key={index}
                href=""
                className="w-full hover:bg-white hover:text-[#824ad7] group rounded-md p-2 transition-all duration-500"
              >
                <div className="flex gap-2 items-center">
                  <span>{iconArr[index]}</span>
                  <h1 className="title text-lg text-white font-questrial pl-3 group-hover:text-[#824ad7]">
                    {title}
                  </h1>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
