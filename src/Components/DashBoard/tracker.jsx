import React from "react";
import QualityTrack from "./qualityTrack";
import DocTracker from "./docTrack";
import { IoIosArrowDropup } from "react-icons/io";

const Tracker = () => {
  const docTrackValue = 25;
  const qualityTrackValue = 10;

  return (
    <section className="z-[0] min-h-[200px] h-full w-full grid grid-cols-[25%_75%] items-center justify-center">
      <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] h-full flex flex-col gap-2 p-4">
        <h1 className="text-2xl font-bold text-center">Quality Track</h1>
        <div className="flex items-center justify-center relative">
          <QualityTrack value={qualityTrackValue} />
          <p className="text-6xl absolute">{qualityTrackValue}%</p>
        </div>
      </div>
      <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] h-full ml-8 flex flex-col items-center justify-start gap-4 p-4 relative">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center mb-12">
            Document Track
          </h1>
          <DocTracker value={docTrackValue} />
        </div>
        {/* Stages */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl flex flex-col items-center justify-center">
            <IoIosArrowDropup
              className={docTrackValue === 0 ? "animate-bounce" : ""}
            />
            Stage 1
          </h1>
          <h1 className="text-2xl flex flex-col items-center justify-center">
            <IoIosArrowDropup
              className={docTrackValue === 25 ? "animate-bounce" : ""}
            />
            Stage 2
          </h1>
          <h1 className="text-2xl flex flex-col items-center justify-center">
            <IoIosArrowDropup
              className={docTrackValue === 50 ? "animate-bounce" : ""}
            />
            Stage 3
          </h1>
          <h1 className="text-2xl flex flex-col items-center justify-center">
            <IoIosArrowDropup
              className={docTrackValue === 75 ? "animate-bounce" : ""}
            />
            Stage 4
          </h1>
          <h1 className="text-2xl flex flex-col items-center justify-center">
            <IoIosArrowDropup
              className={docTrackValue === 100 ? "animate-bounce" : ""}
            />
            Stage 5
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Tracker;
