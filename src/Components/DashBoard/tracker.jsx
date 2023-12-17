import { useState } from "react";

const Tracker = () => {
  const [getPlace, setGetPlace] = useState(0);
  const handleClick = (i) => {
    setGetPlace(i);
  };
  return (
    <div className="z-[0]">
      <section className="h-[200px] flex justify-center items-center m-3">
        <div className="flex justify-center items-center">
          {[0, 1, 2, 3, 4, 5, 6]?.map((item) => {
            return (
              <div
                key={item}
                onClick={() => {
                  if (item % 2 === 0) handleClick(item);
                }}
                className={
                  item % 2 === 0
                    ? "flex justify-center items-center bg-black rounded-full w-[50px] h-[50px] text-white"
                    : "w-[100px] h-[10px] bg-[black]"
                }
                style={{
                  backgroundColor: item <= getPlace ? "blue" : "black",
                }}
              >
                {item % 2 === 0 ? (item / 2) + 1 : ""}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Tracker;
