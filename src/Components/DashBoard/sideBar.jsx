import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { LuBookMinus, LuLayoutDashboard } from "react-icons/lu";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { TbReportSearch, TbLogout } from "react-icons/tb";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseCircle, IoHomeOutline } from "react-icons/io5";
import { auth } from "./../../firebase";


const iconArr = [
  <IoHomeOutline />,
  <LuLayoutDashboard />,
  <LiaMoneyCheckAltSolid />,
  <LuBookMinus />,
  <BiSupport />,
  <TbReportSearch />,
];

const Sidebar = ({ userData, navData }) => {
  const [openNav, setOpenNav] = useState(false);
  const { userName, userImg } = userData;
  const { items } = navData;

  return (
    <div
      className={`h-screen py-2 md:pl-8 md:py-8 w-[75vw] md:w-auto fixed md:static z-10 transition-all duration-500 ${
        openNav ? "left-0" : "-left-[63%]"
      }`}
    >
      <div className="relative h-full w-full transition-all duration-500 flex flex-col justify-around items-center py-8 glassmorph rounded-r-xl md:rounded-xl">
        {/* Mobile-Toggle-btn */}
        <button
          className="h-6 w-6 md:hidden flex items-center absolute top-4 right-4"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <IoCloseCircle className="w-full h-full" />
          ) : (
            <HiOutlineMenuAlt3 className="w-full h-full" />
          )}
        </button>

        <div className="flex flex-col items-center justify-center gap-8">
          {/* Logo */}
          <a href="/" className="flex gap-2 justify-center items-center">
            <img src={logo} alt="fusionXLogo" className="w-8 h-8" />
            <p className="text-3xl font-bold">FusionX</p>
          </a>

          {/* User-Profile */}
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src={userImg}
              alt="Avatar"
              className="w-32 h-32 rounded-full object-cover border-white border-2 shadow-[0_0_5px_rgba(0,0,0,0.5)]"
            />
            <h1 className="text-xl">{userName}</h1>
          </div>
        </div>

        {/* Navigations */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 justify-center">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`w-max rounded-md transition-all duration-300 relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-[100%] before:h-[6%] before:origin-left before:duration-500 ${
                  item.active
                    ? ""
                    : "before:scale-x-0 md:before:hover:scale-x-100"
                }`}
              >
                <div className="flex gap-2 items-center justify-center text-[16px]">
                  <span>{iconArr[index]}</span>
                  <h1 className="h-max">{item.title}</h1>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Logout-button */}
        <a
          onClick={() => auth.signOut()}
          className="flex items-center justify-center gap-6 cursor-pointer px-4 py-2 hover:bg-[#240046] hover:text-white rounded-lg duration-300 shadow-[0_0_5px_rgba(0,0,0,.2)] active:scale-[.98]"
        >
          <h1>LogOut</h1>
          <TbLogout />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
