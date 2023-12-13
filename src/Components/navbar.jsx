import React, { useState, useEffect } from "react";
import { Navbar, Collapse } from "@material-tailwind/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseCircle } from "react-icons/io5";
import { auth } from './../firebase'; 


const Nav = ({ navbarData }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This effect runs on component mount
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Clean up the observer when component unmounts
    return () => unsubscribe();
  }, []);
  
  const { navItems, buttonText } = navbarData;
  const [openNav, setOpenNav] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 p-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((navData, index) => (
        <div
          key={index}
          className={`font-normal relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[1.5px] lg:before:hover:scale-x-100 before:origin-left before:duration-500
          ${navData.active ? "before:scale-x-100" : "before:scale-x-0"}
            `}
        >
          <a href={navData.link} className="p-1 flex items-center text-[16px]">
            {navData.text}
          </a>
        </div>
      ))}
    </ul>
  );

  return (
    <Navbar className="top-0 fixed z-10 h-max max-w-full py-2 px-4 lg:px-8 lg:py-4 text-black glassmorph bg-[rgba(255,255,255,.9)] rounded-none">
      <div className="flex items-center justify-between pl-4 text-blue-gray-900">
        {/* Logo-text */}
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="cursor-pointer flex items-center text-xl lg:text-2xl font-['questrial'] font-black"
          >
            {/* <img
            className="w-12"
            src={logo_img}
            alt="logo-image"
          /> */}
            FusionX
          </a>
        </div>

        {/* Nav-Items */}
        <div className="mr-4 hidden lg:block">{navList}</div>

        {/* Nav-end */}
        <div className="flex items-center gap-4 p-2">
        {user ? (
        // If user is logged in, display Log Out button
        <button className={`bg-gray-800 rounded-lg p-1 px-4 md:rounded-none md:px-1 md:bg-transparent md:border-0 text-white md:text-black text-[16px] relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-[100%] before:h-[4%] lg:before:hover:scale-x-100 before:origin-left before:duration-500 before:scale-x-0 ${navbarData.class}`} onClick={() => auth.signOut()}>Log Out</button>
      ) : (
        // If user is not logged in, display Log In button
        <a
            href="/Login"
            className={`bg-gray-800 rounded-lg p-1 px-4 md:rounded-none md:px-1 md:bg-transparent md:border-0 text-white md:text-black text-[16px] relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-[100%] before:h-[4%] lg:before:hover:scale-x-100 before:origin-left before:duration-500 before:scale-x-0 ${navbarData.class}`}
          >
            Log In
          </a>
      )}
          <button className="hidden lg:inline-block py-2 px-4 rounded-xl bg-black text-white hover:bg-white hover:text-black drop-shadow-md duration-500">
            <span>{buttonText}</span>
          </button>

          {/* Mobile-Nav-Toggle */}
          <button
            className="h-6 w-6 lg:hidden flex items-center"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <IoCloseCircle className="w-full h-full" />
            ) : (
              <HiOutlineMenuAlt3 className="w-full h-full" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile-Nav */}
      <Collapse open={openNav}>
        {navList}
        <button className="bg-black w-full text-white py-2 rounded-xl">
          <span>{buttonText}</span>
        </button>
      </Collapse>
    </Navbar>
  );
};

export default Nav;
