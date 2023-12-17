import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";

function Hero({ data }) {
  const [active, setActive] = useState(false);
  const explore = [
    { text: "Schemes", link: "/" },
    { text: "Internships", link: "/" },
    { text: "Scholarships", link: "/" },
  ];

  return (
    <div className="grid grid-cols-[60%_40%] items-center justify-center absolute top-0 md:-top-[20%] w-full h-screen">
      {data.title.map((title, index) => (
        <Parallax
          key={index}
          speed={-30}
          className="flex flex-col px-4 md:pl-12 gap-6 "
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
            {title}
          </h1>
          <p className="text-sm md:text-xl text-justify">{data.description}</p>
          <div
            className="cursor-default flex items-center justify-center text-xl text-transparent font-bold w-max border-2 border-black p-2 pr-12 mt-4 bg-[#7B66FF] hover:bg-clip-border hover:text-white bg-clip-text transition-all duration-300 relative before:absolute before:w-2 before:h-2 before:right-[14px] hover:before:right-[16px] hover:before:top-[16.5px] before:bg-transparent before:border-[#7B66FF] hover:before:border-white before:border-t-2 before:border-r-2 before:-rotate-45 hover:before:rotate-[45deg] before:transition-all before:duration-300 after:absolute after:w-5 after:h-5 after:right-[8.1px] after:bottom-[13px] after:rounded-full after:border-[#7B66FF] after:border-2 hover:after:border-white after:transition-all after:duration-300"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            {data.button}
            <div
              className={`absolute -top-2 left-full duration-300 overflow-hidden ${
                active ? "w-[140%]" : "w-0"
              }`}
            >
              <div
                className={`relative w-[80%] flex flex-col justify-center left-4 text-black p-4 bg-white rounded-xl duration-300 before:absolute before:w-6 before:h-6 before:top-4 before:-left-1 before:bg-white before:rotate-45 before:z-[-1]`}
              >
                {explore.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-[18px] w-max relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:duration-300"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Parallax>
      ))}
    </div>
  );
}

export default Hero;
