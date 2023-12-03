import React, { useState, useEffect } from "react";

function Count() {
  const [position, setPosition] = useState(400);

  useEffect(() => {
    const handleScroll = () => {
      var newPosition = Math.max(position - window.scrollY + 200, 0);
      setPosition(newPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="h-[20vh] md:h-[30vh] bg-black text-white flex items-center overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1
          className="text-xl sm:text-4xl md:text-5xl w-max text-center relative"
          style={{ transform: `translateX(-${position}px)` }}
        >
          <div className="absolute w-20 md:w-36 h-full -left-4 md:-left-12 -top-2 md:-top-8 border-white border-t-8 border-l-8"></div>
          <div className="absolute w-20 md:w-36 h-full -right-4 md:-right-12 -bottom-2 md:-bottom-8 border-white border-b-8 border-r-8"></div>
          We Help You Achieve Your Goals
        </h1>
      </div>
    </div>
  );
}

export default Count;
