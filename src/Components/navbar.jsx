import React, { useState, useEffect, useRef } from "react";
import { Navbar, Collapse } from "@material-tailwind/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { auth } from "./../firebase";
import { TbLogout } from "react-icons/tb";
import MOE from "./Assets/MOE.png";
import Independence from "./Assets/Independence.png";

const Nav = ({ navbarData }) => {
  const [user, setUser] = useState(null);

  // Handle-Dropdown
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

  const { pages, components, loggedNav } = navbarData;
  const [openNav, setOpenNav] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="mb-4 mt-2 p-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {pages.map((items, index) => (
        <a
          key={index}
          href={items.link}
          className={`font-normal px-1 relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[1.5px] lg:hover:before:scale-x-100 before:origin-left before:duration-500
          ${items.active ? "before:scale-x-100" : "before:scale-x-0"}
            `}
        >
          {items.text}
        </a>
      ))}
      {/* Page-Components */}
      {components.map((items, index) => (
        <button
          key={index}
          className={`font-normal text-start px-1 relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[1.5px] lg:hover:before:scale-x-100 before:origin-left before:duration-500 ${
            window.scrollY >= items.position &&
            window.scrollY < items.position + 499
              ? "before:scale-x-100"
              : "before:scale-x-0"
          }`}
          onClick={() =>
            window.scrollTo({
              top: items.position + (items.text === "About" ? 10 : 250),
              behavior: "smooth",
            })
          }
        >
          {items.text}
        </button>
      ))}
    </div>
  );

  return (
    <Navbar className="fixed top-0 z-10 h-max max-w-full py-2 px-4 lg:px-8 lg:py-4 text-black glassmorph bg-[rgba(255,255,255,.9)] rounded-none">
      <div className="flex items-center justify-between pl-4 text-blue-gray-900">
        {/* Logo-text */}
        <div className="flex items-center justify-center gap-4">
          <a href="/" className="cursor-pointer text-xl lg:text-4xl font-bold">
            AssistIQ
          </a>
          <img
            className="w-24"
            src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Ministry_of_Education_India.svg"
            alt="Ministry of Education"
          />
          <img className="w-16 hidden md:block" src={MOE} alt="MOE" />
          <img
            className="w-24 hidden md:block"
            src={Independence}
            alt="75th Independence"
          />
        </div>

        {/* Nav-Items */}
        <div className="mr-72 hidden lg:block">{navList}</div>

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

                {/* Dropdown-Menu */}
                <div
                  id="dropdownDivider"
                  className={`flex flex-col items-center justify-center absolute z-10 bg-white w-32 shadow-[0_0_5px_rgba(0,0,0,0.2)] top-12 right-0 rounded-xl duration-300 overflow-hidden ${
                    isDropdownOpen ? "h-[140px]" : "h-0"
                  }`}
                >
                  {/* Logged-Nav-Items */}
                  {loggedNav.map((items, index) => (
                    <a
                      key={index}
                      href={items.link}
                      className={`w-max block pt-2 relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:origin-left before:duration-300 ${
                        items.active
                          ? ""
                          : "before:scale-x-0 lg:hover:before:scale-x-100"
                      }`}
                    >
                      {items.text}
                    </a>
                  ))}

                  {/* LogOut-Button */}
                  <div className="py-2">
                    <button
                      onClick={() => auth.signOut()}
                      className="flex justify-center items-center w-full gap-2 px-2 py-2 text-md text-gray-700 hover:bg-gray-200 cursor-pointer duration-300"
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
              className={`bg-gray-800 rounded-lg px-4 md:rounded-none md:px-1 md:bg-transparent md:border-0 text-white md:text-black text-[16px] relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-[100%] before:h-[8%] lg:before:hover:scale-x-100 before:origin-left before:duration-500 before:scale-x-0 ${navbarData.class} `}
            >
              Log In
            </a>
          )}

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
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
};

export default Nav;
