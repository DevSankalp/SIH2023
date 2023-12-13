import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer({ data }) {
  const iconArr = [
    {
      icon: (
        <FaFacebook className="w-8 h-8 p-[2px] text-[#240046] hover:-translate-y-1 duration-300" />
      ),
      link: "/",
    },
    {
      icon: (
        <FaInstagram className="w-8 h-8 p-[1px] text-[#240046] hover:-translate-y-1 duration-300" />
      ),
      link: "/",
    },
    {
      icon: (
        <FaSquareXTwitter className="w-8 h-8 p-[1px] text-[#240046] hover:-translate-y-1 duration-300" />
      ),
      link: "/",
    },
    {
      icon: (
        <FaLinkedin className="w-8 h-8 p-[1px] text-[#240046] hover:-translate-y-1 duration-300" />
      ),
      link: "/",
    },
  ];
  const { navItems, info } = data;

  return (
    <footer className="flex flex-col items-center py-8 md:pt-12 md:pb-4 bg-white">
      <div className="w-[90%] flex flex-col gap-6 sm:gap-0 sm:flex-row items-center sm:items-start justify-between border-y-[1px] border-[rgba(0,0,0,.5)] p-8 md:p-16 md:pb-24">
        {/* Logo */}
        <a href="/" className="text-3xl font-bold">
          FusionX
        </a>

        {/* Nav-Items */}
        <div className="flex flex-col gap-8 sm:gap-12">
          <ul className="flex flex-col gap-2 items-center sm:items-start">
            {navItems.map((items, index) => (
              <li
                key={index}
                className="w-max relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[7%] before:scale-x-0 lg:before:hover:scale-x-100 before:origin-left before:duration-300"
              >
                <a href={items.link}>{items.text}</a>
              </li>
            ))}
          </ul>
          <button className="w-full bg-black text-white hover:text-black hover:bg-white py-2 px-4 rounded-xl duration-300 shadow-[0_0_5px_rgba(0,0,0,0.2)] active:scale-[.95]">
            Get Approved
          </button>
        </div>

        {/* Mobile-View-Line */}
        <hr className="block sm:hidden h-[1px] w-full border-black" />

        {/* More-Informations */}
        {info.map((items, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 sm:gap-12 items-center sm:items-start"
          >
            <p>{items.text}</p>
            <a
              href={items.link}
              className="w-max relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[7%] sm:before:scale-x-0 sm:before:hover:scale-x-100 before:origin-left before:duration-300"
            >
              {items.link}
            </a>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="flex flex-col sm:flex-row w-[80%] items-center sm:justify-between">
        <p className="py-2 sm:py-8">© 2023 by FusionX</p>
        <div className="flex items-center justify-end gap-2 sm:w-[40%] sm:py-8">
          {iconArr.map((content, index) => (
            <a key={index} href={content.link}>
              {content.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
