import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
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

  const { logoText, navItems, buttonText } = navbarData;
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 p-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((navbarData, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className={`font-normal relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[1.5px] lg:before:hover:scale-x-100 before:origin-left before:duration-500
          ${navbarData.active ? "before:scale-x-100" : "before:scale-x-0"}
            `}
        >
          <Link
            to={navbarData.link}
            className="p-1 flex items-center text-[16px]"
          >
            {navbarData.text}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="top-0 fixed z-10 h-max max-w-full py-2 px-4 lg:px-8 lg:py-4 text-black glassmorph bg-[rgba(255,255,255,.9)] rounded-none">
      <div className="flex items-center justify-between pl-4 text-blue-gray-900">
        <div className="flex items-center gap-4">
          <Typography
            as="a"
            href="/"
            className="cursor-pointer flex items-center text-xl lg:text-2xl font-['questrial'] font-black"
          >
            {/* <img
            className="w-12"
            src={logo_img}
            alt="logo-image"
          /> */}
            {logoText}
          </Typography>
        </div>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="flex items-center gap-4 p-2">

        {user ? (
        // If user is logged in, display Log Out button
        <button className={`bg-gray-800 rounded-lg p-1 px-4 md:rounded-none md:px-1 md:bg-transparent md:border-0 text-white md:text-black text-[16px] relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-[100%] before:h-[4%] lg:before:hover:scale-x-100 before:origin-left before:duration-500 before:scale-x-0 ${navbarData.class}`} onClick={() => auth.signOut()}>Log Out</button>
      ) : (
        // If user is not logged in, display Log In button
        <Link
            to={navbarData.link}
            className={`bg-gray-800 rounded-lg p-1 px-4 md:rounded-none md:px-1 md:bg-transparent md:border-0 text-white md:text-black text-[16px] relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-[100%] before:h-[4%] lg:before:hover:scale-x-100 before:origin-left before:duration-500 before:scale-x-0 ${navbarData.class}`}
          >
            Log In
          </Link>
      )}


          
          <Button
            size="sm"
            className="hidden lg:inline-block bg-black text-white hover:bg-white hover:text-black drop-shadow-md duration-500"
          >
            <span>{buttonText}</span>
          </Button>
          {/* Mobile-Nav */}
          <button
            className="h-6 w-6 lg:hidden flex items-center"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button size="sm" fullWidth className="bg-black">
          <span>{buttonText}</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
};

export default Nav;
