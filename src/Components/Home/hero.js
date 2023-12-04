import React from "react";
import { Parallax } from "react-scroll-parallax";

function Hero({ data }) {
  return (
    <>
      {data.title.map((title, index) => (
        <Parallax
          key={index}
          speed={-30}
          className="absolute flex flex-col top-[20%] md:top-[24%] inset-0 sm:w-[90%] md:w-[70%] lg:w-[50%] px-4 md:pl-12 gap-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
            {title}
          </h1>
          <p className="text-sm md:text-xl text-justify">{data.description}</p>
          <a
            href="/"
            className="flex items-center justify-center text-xl text-transparent font-bold w-max border-2 border-black p-2 pr-12 mt-4 bg-[#7B66FF] hover:bg-clip-border hover:text-white bg-clip-text transition-all duration-300 relative before:absolute before:w-2 before:h-2 before:right-[14px] hover:before:right-[16px] hover:before:top-[16.5px] before:bg-transparent before:border-[#7B66FF] hover:before:border-white before:border-t-2 before:border-r-2 before:-rotate-45 hover:before:rotate-[45deg] before:transition-all before:duration-500 after:absolute after:w-5 after:h-5 after:right-[8.1px] after:bottom-[13px] after:rounded-full after:border-[#7B66FF] after:border-2 hover:after:border-white after:transition-all after:duration-500"
          >
            {data.button}
          </a>
        </Parallax>
      ))}
    </>
  );
}

export default Hero;
