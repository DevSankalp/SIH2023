import React, { useState, useEffect } from "react"
import logo from "../Assets/logo.png"
import { CgProfile } from "react-icons/cg"
import { LiaMoneyCheckAltSolid } from "react-icons/lia"
import { LuBookMinus } from "react-icons/lu"
import { BiSupport } from "react-icons/bi"
import { TbReportSearch } from "react-icons/tb"

const infoData = {
  title: ["Profile", "Fee Statement", "Handbook", "Support", "Report"],
}

const iconArr = [
  <CgProfile className="text-xl" />,
  <LiaMoneyCheckAltSolid className="text-xl" />,
  <LuBookMinus className="text-xl" />,
  <BiSupport className="text-xl" />,
  <TbReportSearch className="text-xl" />,
]
const Sidebar = () => {
  const sidebarStyles = `
    .sideBarBg {
      position: relative;
      overflow: hidden;
      background: linear-gradient(to top, #000, rgba(0, 0, 0, 0.5)), radial-gradient(circle at 50% 0, #824ad7, rgba(29, 74, 255, 0));
      background-size: 100% 200%, 100% 100%;
      animation: moveBackground 10s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    }

    @keyframes moveBackground {
      0%, 100% {
        background-position: 0 0, 50% 0;
      }
      25% {
        background-position: 20% 30%, 60% 40%;
      }
      50% {
        background-position: 80% 70%, 40% 60%;
      }
      75% {
        background-position: 50% 80%, 20% 10%;
      }
    }
  `

  return (
    <aside>
      <style>{sidebarStyles}</style>
      <div className="sideBarBg first-letter h-full z-[99] w-[300px] transition-all duration-500 overflow-hidden p-8 text-white font-questrial">
        <div className="flex flex-row mb-5">
          <a
            href="/"
            className="flex gap-5 flex-row justify-center items-center text-2xl mb-5 font-questrial font-bold shadow-sm p-5"
          >
            <img src={logo} width={35} height={35} alt="fusionX" />
            FusionX
          </a>
        </div>
        <div class="navigation">
          <ul>
            {infoData.title.map((title, index) => (
              <li
                key={index}
                className="hover:bg-white hover:text-[#824ad7] hover:font-bold group rounded-md p-2 mb-2"
              >
                <a href="#" className="flex gap-2 items-center">
                  <span>{iconArr[index]}</span>
                  <h1 className="title text-lg text-white font-questrial pl-3 group-hover:text-[#824ad7]">
                    {title}
                  </h1>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
