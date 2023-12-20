import React, { useState } from "react";
import Tracker from "./tracker";
import Slider from "react-slick";
import ChapterData from "./chapters.json";
import { FaLink } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    arrows: false,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    className: "w-2/3",
  };

  return (
    <>
      {/* Buttons */}
      <div className="absolute left-4">
        <CiSaveDown1
          className="w-6 h-6 cursor-pointer rotate-180"
          onClick={sliderRef?.slickPrev}
        />
      </div>
      <div className="absolute right-4">
        <CiSaveDown1
          className="w-6 h-6 cursor-pointer"
          onClick={sliderRef?.slickNext}
        />
      </div>
      <Slider ref={setSliderRef} {...settings}>
        {Object.keys(ChapterData).map((chapterKey, index) => (
          <div key={index}>
            <div className="flex flex-col items-center justify-center group relative h-[20vh]">
              <h2 className="text-2xl md:text-4xl absolute group-hover:opacity-10 duration-500 flex items-center gap-2">
                {ChapterData[chapterKey].title}
                <FaLink className="w-4 h-4 text-gray-400" />
              </h2>
              <p className="text-center opacity-0 group-hover:opacity-100 duration-500 font-bold text-xl">
                {ChapterData[chapterKey].description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

function Data() {
  const [isOpen, setIsOpen] = useState(false);

  const [next, setNext] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setNext(option.value);
    setIsOpen(false);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "A", label: "Grant of Approval for New Institution" },
    {
      value: "B",
      label: "Grant of Extension of Approval for Existing Institutions.",
    },
    { value: "C", label: "Collaboration & Twinning Programmes" },
    { value: "D", label: "Grant of Approval for Universities" },
    {
      value: "E",
      label:
        "Approval for Open and Distance Learning (ODL) / Online Learning (OL)",
    },
  ];

  const links = [
    {
      "Forgotten Password":
        "https://www.aicte-india.org/sites/default/files/approval/2023-24/Affidavit-1.pdf",
      "Application Format":
        "https://www.aicte-india.org/sites/default/files/approval/2023-24/Affidavit-2.pdf",
      "Completion Closure":
        "https://www.aicte-india.org/sites/default/files/approval/2023-24/Affidavit-4.pdf",
      "Release of Security Deposit":
        "https://www.aicte-india.org/sites/default/files/approval/2023-24/Affidavit-3.pdf",
      "Additional course(s)/intake":
        "https://www.aicte-india.org/sites/default/files/approval/2023-24/Affidavit-8.pdf",
    },
  ];

  const [active, setActive] = useState(false);

  return (
    <div className="w-full h-full min-h-[300px] grid grid-rows-4 md:grid-rows-[40%_60%] pl-16 p-2 md:p-8 duration-500">
      {/* Tracker */}
      <div className="mb-8">
        <Tracker />
      </div>
      <div className="w-full grid md:grid-cols-3 items-center justify-center gap-8">
        <div
          className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] flex items-center justify-center h-full relative text-[#240046] overflow-hidden"
          onMouseEnter={() => setActive((prevActive) => !prevActive)}
          onMouseLeave={() => setActive((prevActive) => !prevActive)}
        >
          {/* Canvas */}
          <div
            className={`hidden absolute glassmorph bg-[rgba(255,255,255,1)] w-full h-full md:flex items-center justify-center rounded-xl ${
              active ? "z-[-1] md:hidden" : "z-[1]"
            }`}
          >
            <MdMenuBook className="w-24 h-24" />
          </div>
          {/* Chapters */}
          <Carousel />
        </div>
        <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] w-full h-full"></div>
        <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] w-full h-full">
          <button
            id="dropdownDividerButton"
            onClick={toggleDropdown}
            className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-20"
            style={{ minWidth: "250px" }}
          >
            {selectedOption || "Select an option"}
            <svg
              className={`absolute inset-y-0 right-0 w-5 h-5 mt-2 mr-3 pointer-events-none ${
                isOpen ? "transform rotate-180" : ""
              } text-gray-400 transition-transform duration-300`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isOpen && (
            <ul
              className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full"
              aria-labelledby="dropdownDividerButton"
            >
              {options.map((option) => (
                <li key={option.value}>
                  <button
                    className="block px-4 py-2 w-full text-left hover:bg-gray-100 focus:outline-none"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
          {links.map((items, index) => (
            <a key={index} href={items[1]}>
              {items[0]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Data;
