import React from "react";
import ParticleSphere from "./particleSphere";

function Links({ data }) {
  // var screenSize = window.innerWidth;

  const width = 620;
  const height = 520;
  return (
    <div className="h-[70vh] w-full grid grid-cols-[60%_40%] bg-white relative shadow-[0_0_10px_rgba(0,0,0,.3)]">
      <div className="w-full h-full flex flex-col items-center gap-24">
        <h1 className="text-6xl mt-24 w-[90%] font-bold relative before:absolute before:w-full before:h-1 before:left-0 before:-bottom-4 before:bg-black">
          Quick Links
        </h1>
        <div className="w-[80%] h-max flex flex-col justify-center text-xl gap-8">
          {data.title.map((title, index) => (
            <a
              key={index}
              href={data.links[index]}
              className="w-max relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:duration-500"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
      <a
        href="/"
        className="relative flex items-center justify-center bg-[#E5D4FF]"
      >
        <h1 className="text-6xl text-transparent absolute block bg-[linear-gradient(to_right,#7B66FF,#5FBDFF)] bg-clip-text font-bold">
          FusionRizz<span className="block">AI ChatBot</span>
        </h1>
        <ParticleSphere width={width} height={height} />
      </a>
    </div>
  );
}

export default Links;
