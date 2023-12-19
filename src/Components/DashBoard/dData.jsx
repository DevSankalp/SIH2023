import React, { useState } from "react";
import Tracker from "./tracker";
import Slider from "react-slick";
import ChapterData from "./chapters.json";
import { FaLink } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";

const Carousel = () => {
  const settings = {
    arrows: true,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 500,
    vertical: true,
  };

  return (
    <Slider {...settings}>
      {Object.keys(ChapterData).map((chapterKey, index) => (
        <div key={index}>
          <div className="flex flex-col items-center justify-center gap-4 px-4 group relative">
            <h2 className="text-2xl md:text-4xl absolute group-hover:opacity-10 duration-500 flex items-center gap-2">
              {ChapterData[chapterKey].title}
              <FaLink className="w-4 h-4 text-gray-400" />
            </h2>
            <p className="text-justify opacity-0 group-hover:opacity-100 duration-500">
              {ChapterData[chapterKey].description}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

function Data() {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full h-full min-h-[300px] grid grid-rows-4 md:grid-rows-[40%_60%] pl-16 p-2 md:p-8 duration-500">
      <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] mb-8">
        <Tracker />
      </div>
      <div className="w-full grid md:grid-cols-3 items-center justify-center gap-8">
        <div
          className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] flex items-center h-full relative text-[#240046] overflow-hidden"
          onMouseEnter={() => setActive((prevActive) => !prevActive)}
          onMouseLeave={() => setActive((prevActive) => !prevActive)}
        >
          {/* Canvas */}
          {/* <div
            className={`absolute glassmorph bg-[rgba(255,255,255,1)] w-full h-full flex items-center justify-center rounded-xl duration-500 ${
              active ? "opacity-0 z-[-1]" : "opacity-100 z-[1]"
            }`}
          >
            <MdMenuBook className="w-24 h-24" />
          </div> */}
          {/* Chapters */}
          <Carousel />
        </div>
        <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] w-full h-full"></div>
        <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] w-full h-full"></div>
      </div>
    </div>
  );
}

export default Data;
