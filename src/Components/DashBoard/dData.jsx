import Tracker from "./tracker";
import Slider from "react-slick";
import ChapterData from "./chapters.json";

function Data() {
  const settings = {
    arrows: true,
    fade: true,
  };

  return (
    <div className="w-full h-full grid grid-rows-4 md:grid-rows-[40%_60%] pl-16 p-2 md:p-8 duration-500">
      <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] mb-8">
        <Tracker />
      </div>
      <div className="w-full flex items-center justify-center gap-8">
        <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] w-full h-full">
          <Slider {...settings}>
            {/* {ChapterData.map((items, index) => (
              <div key={index}>{items.Chapters}</div>
            ))} */}
            {console.log(ChapterData)}
          </Slider>
        </div>
        <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] w-full h-full"></div>
        <div className="glassmorph rounded-xl shadow-[0_0_5px_rgba(0,0,0,.2)] bg-[rgba(255,255,255,.7)] w-full h-full"></div>
      </div>
    </div>
  );
}

export default Data;
