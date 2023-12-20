import React, { useEffect, useState } from "react";
import ParticleSphere from "../particleSphere";

function InfoBot(animate) {
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
    <div className="md:h-[70vh] w-full grid md:grid-cols-[40%_60%] bg-white relative shadow-[0_0_10px_rgba(0,0,0,.3)] z-[2] overflow-hidden">
      {/* Chatbot */}
      <div
        className="shadow-[0_0_10px_rgba(0,0,0,0.2)] md:shadow-none relative flex items-center justify-center bg-[#E5D4FF] overflow-hidden"
        id="chat"
      >
        <h1 className="text-5xl md:text-6xl font-bold absolute cursor-pointer">
          <span
            className={`z-[1] border-4 duration-500 transition-all py-1 px-4 relative after:absolute after:w-full after:h-full after:border-4 after:border-[#7B66FF] after:z-[-1] after:duration-500 ${
              animate.animate.chat > 320
                ? "text-[#7B66FF] bg-white border-[#7B66FF] inset-[-12px_12px] after:inset-[16px_-16px] hover:inset-0 hover:after:inset-0"
                : "text-white bg-[#7B66FF] border-white inset-0 after:inset-0"
            }`}
          >
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

      {/* About-ChatBot */}
      <div
        className={`flex flex-col justify-center gap-8 w-full md:w-2/3 justify-self-center p-8 md:p-0 duration-[1500ms] ${
          animate.animate.chatInfo > 200
            ? "translate-x-0 opacity-1"
            : "translate-x-1/4 opacity-0"
        }`}
        id="chatInfo"
      >
        <h1 className="text-3xl md:text-6xl text-transparent bg-[linear-gradient(to_right,#5FBDFF,#7B66FF)] bg-clip-text font-bold">
          AI ChatBot
        </h1>
        <p className="text-justify">
          Meet Chanakaya, your dedicated guide through the intricate maze of
          gaining approval for your institution from the All India Council for
          Technical Education (AICTE). Whether you're a seasoned administrator
          or a newcomer navigating the complex world of educational approvals,
          Chanakaya is here to simplify the process for you. From assisting with
          document preparation and online submissions to providing insights into
          inspections and compliance checks, Chanakaya ensures you have a
          seamless experience. With a user-friendly interface and instant
          assistance, Chanakaya keeps you updated on the latest AICTE
          regulations, making your approval journey efficient and stress-free.
          Ready to embark on the path to AICTE approval? Let Chanakaya be your
          trusted companion every step of the way.
        </p>
      </div>
    </div>
  );
}

export default InfoBot;
