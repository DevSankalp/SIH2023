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

  const { pages, components, loggedNav, buttonText } = navbarData;
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
          <img
            className="w-16"
            src="data:image/jpeg;base64,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"
            alt="Ministry of Education"
          />
          <img
            className="w-24"
            src="https://amritmahotsav.nic.in/writereaddata/portal/images/logo-poster-1.jpg"
            alt="Ministry of Education"
          />
        </div>

        {/* Nav-Items */}
        <div className="mr-32 hidden lg:block">{navList}</div>

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
                  className={`flex flex-col items-center justify-center absolute z-10 bg-white w-32 shadow-[0_0_5px_rgba(0,0,0,0.2)] top-12 rounded-xl duration-300 overflow-hidden ${
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
