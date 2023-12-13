import React, { useEffect, useState } from "react";
import ParticleSphere from "../particleSphere";

function InfoBot({ data }) {
  const [width, setWidth] = useState(window.innerWidth);
  var height = 520;
  var particleNumber = 200;
  var maxRadius = 7;
  var minRadius = 1;
  var angleDemul = 500;
  var zAngleDemul = 250;

  // Particle-Width-Controller
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth < 480 && setWidth(window.innerWidth - 20)
    );
  }, []);

  return (
    <div className="md:h-[70vh] w-full md:grid md:grid-cols-[60%_40%] bg-white relative shadow-[0_0_10px_rgba(0,0,0,.3)]">
      <div className="flex flex-col justify-center p-8">
        <h1 className="text-4xl text-transparent bg-[linear-gradient(to_right,#5FBDFF,#7B66FF)] bg-clip-text font-bold">
          AI ChatBot
        </h1>
        <p></p>
      </div>

      {/* Chatbot-Info */}
      <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] md:shadow-none relative flex items-center justify-center bg-[#E5D4FF] overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold absolute cursor-pointer">
          <span className="z-[1] text-white hover:text-[#7B66FF] bg-[#7B66FF] hover:bg-white border-4 border-white hover:border-[#7B66FF] duration-500 transition-all py-1 px-4 inset-0 hover:-inset-2 relative after:absolute after:w-full after:h-full after:inset-0 hover:after:inset-[-20px_20px] after:border-4 after:border-[#7B66FF] after:z-[-1] after:duration-500">
            CHANAKAYA
          </span>
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
      </div>
    </div>
  );
}

export default InfoBot;
