import React from "react";
import ParticleSphere from "../particleSphere";

function Links({ data }) {
  var screenSize = window.innerWidth;
  var width = 620;
  var height = 520;
  var particleNumber = 200;
  var maxRadius = 7;
  var minRadius = 1;
  var angleDemul = 500;
  var zAngleDemul = 250;

  if (screenSize < 480) {
    width = screenSize;
  }

  return (
    <div className="md:h-[70vh] w-full md:grid md:grid-cols-[60%_40%] bg-white relative shadow-[0_0_10px_rgba(0,0,0,.3)]">
      <div className="w-full h-full flex flex-col items-center gap-16 md:gap-24 pb-12 md:p-0">
        <h1 className="text-4xl text-center md:text-start md:text-6xl mt-12 md:mt-24 w-[90%] font-bold relative before:absolute before:w-full before:h-1 before:left-0 before:-bottom-4 before:bg-black">
          Quick Links
        </h1>
        <div className="w-[80%] h-max flex flex-col justify-center text-lg md:text-xl gap-8">
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
        className="shadow-[0_0_10px_rgba(0,0,0,0.2)] md:shadow-none relative flex items-center justify-center bg-[#E5D4FF]"
      >
        <h1 className="text-5xl md:text-6xl text-transparent absolute block bg-[linear-gradient(to_right,#7B66FF,#5FBDFF)] bg-clip-text font-bold">
          FusionRizz<span className="block">AI ChatBot</span>
        </h1>
        <ParticleSphere
          width={width}
          height={height}
          particleNumber={particleNumber}
          maxRadius={maxRadius}
          minRadius={minRadius}
          angleDemul={angleDemul}
          zAngleDemul={zAngleDemul}
        />
      </a>
    </div>
  );
}

export default Links;
