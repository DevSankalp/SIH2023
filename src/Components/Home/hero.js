import React from "react";
import { Parallax } from "react-scroll-parallax";

function Hero({ data }) {
  return (
    <>
      {data.title.map((title, index) => (
        <Parallax
          key={index}
          speed={-30}
          className="absolute flex flex-col top-[20%] md:top-[24%] inset-0 sm:w-[90%] md:w-[70%] lg:w-[50%] px-4 md:pl-12 gap-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
            {title}
          </h1>
          <p className="text-sm md:text-xl text-justify">{data.description}</p>
          <a
            href="/"
            className="px-4 py-2 text-lg rounded-lg bg-[#7B66FF] text-white w-max hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
          >
            {data.button}
          </a>
        </Parallax>
      ))}
    </>
  );
}

export default Hero;
