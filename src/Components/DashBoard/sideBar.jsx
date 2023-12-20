import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { TbLogout } from "react-icons/tb";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseCircle, IoHomeOutline } from "react-icons/io5";
import { auth } from "./../../firebase";

const iconArr = [
  <IoHomeOutline className="w-5 h-5" />,
  <LuLayoutDashboard className="w-5 h-5" />,
  <LiaMoneyCheckAltSolid className="w-5 h-5" />,
];

const Sidebar = ({ userData, navData }) => {
  const [openNav, setOpenNav] = useState(false);
  const { userImg } = userData;
  const { items } = navData;

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div
      className={`h-screen w-[75vw] md:w-auto fixed md:static z-10 transition-all duration-500 ${
        openNav ? "left-0" : "-left-[63%]"
      }`}
    >
      <div className="relative h-full w-full transition-all duration-500 flex flex-col justify-around items-center py-8 glassmorph bg-[rgba(255,255,255,.7)]">
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
          {user && (
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                src={userImg}
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover border-white border-2 shadow-[0_0_5px_rgba(0,0,0,0.5)]"
              />
              <h1 className="text-xl">{user.displayName}</h1>
            </div>
          )}
        </div>

        {/* Navigations */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-4 justify-center">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`w-max p-2 shadow-[0_0_5px_rgba(0,0,0,.2)] rounded-md duration-300 ${
                  item.active
                    ? "bg-[#240046] text-white"
                    : "hover:bg-[#240046] hover:text-white active:scale-[.9]"
                }`}
              >
                {iconArr[index]}
              </a>
            ))}
          </div>
        </div>

        {/* Logout-button */}
        <a
          href="/"
          onClick={() => auth.signOut()}
          className="flex items-center justify-center gap-6 cursor-pointer px-4 py-2 hover:bg-[#240046] hover:text-white rounded-lg duration-300 shadow-[0_0_5px_rgba(0,0,0,.2)] active:scale-[.98]"
        >
          LogOut
          <TbLogout />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
