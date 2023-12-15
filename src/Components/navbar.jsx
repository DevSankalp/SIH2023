import React, { useState, useEffect, useRef } from "react";
import { Navbar, Collapse } from "@material-tailwind/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { auth } from "./../firebase";
import { TbLogout } from "react-icons/tb";

const Nav = ({ navbarData }) => {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <Navbar className="fixed top-0 z-10 h-max max-w-full py-2 px-4 lg:px-8 lg:py-4 text-black glassmorph bg-[rgba(255,255,255,.9)] rounded-none">
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
            <>
              <div className="relative" ref={dropdownRef}>
                {/* Dropdown-button */}
                <button
                  id="dropdownDividerButton"
                  data-dropdown-toggle="dropdownDivider"
                  onClick={toggleDropdown}
                  className={`flex items-center gap-1 text-[24px] hover:bg-[#ccc] duration-300 p-2 rounded-lg ${
                    isDropdownOpen ? "bg-[#ccc]" : ""
                  }`}
                >
                  <FaRegUserCircle />
                  <IoIosArrowBack
                    className={`w-4 h-4 duration-300 ${
                      isDropdownOpen ? "rotate-[270deg]" : "rotate-90"
                    }`}
                  />
                </button>

                {/* Dropdown-menu */}
                <div
                  id="dropdownDivider"
                  className={`flex flex-col items-center justify-center absolute z-10 bg-white w-32 shadow-[0_0_5px_rgba(0,0,0,0.2)] top-12 rounded-xl duration-300 overflow-hidden ${
                    isDropdownOpen ? "h-[140px]" : "h-0"
                  }`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 "
                    aria-labelledby="dropdownDividerButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="w-max block pt-2 relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[1.1px] before:scale-x-0 lg:hover:before:scale-x-100 before:origin-left before:duration-500"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-max block pt-2 relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[1.1px] before:scale-x-0 lg:hover:before:scale-x-100 before:origin-left before:duration-500"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                  <div className="py-2">
                    <button
                      onClick={() => auth.signOut()}
                      className="flex justify-center items-center w-full gap-2 px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-200 cursor-pointer duration-300"
                    >
                      Log Out
                      <TbLogout className="" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // If user is not logged in, display Log In button
            <a
              href="/Login"
              className={`bg-gray-800 rounded-lg p-1 px-4 md:rounded-none md:px-1 md:bg-transparent md:border-0 text-white md:text-black text-[16px] relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-[100%] before:h-[4%] lg:before:hover:scale-x-100 before:origin-left before:duration-500 before:scale-x-0 ${navbarData.class} `}
            >
              Log In
            </a>
          )}
          <button className="hidden lg:inline-block py-2 px-4 rounded-xl bg-black text-white hover:bg-white hover:text-black drop-shadow-md duration-300">
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
