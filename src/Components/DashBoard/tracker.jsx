import React from "react";
import DocTracker from "./docTrack";

const Tracker = () => {
  const docTrackValue = 75;

  return (
    <section className="z-[0] min-h-[200px] h-full w-full grid grid-cols-[25%_75%] items-center justify-center">
      <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] h-full flex flex-col gap-4 p-4">
        <h1 className="text-xl font-bold">Document Track:</h1>
        <div className="flex items-center justify-center relative">
          <DocTracker value={docTrackValue} />
          <p className="text-6xl absolute">{docTrackValue}%</p>
        </div>
      </div>
      <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] h-full ml-8"></div>
    </section>
  );
};

export default Tracker;
