import React, { useState, useEffect } from "react";
import QualityTrack from "./qualityTrack";
import DocTracker from "./docTrack";
import axios from "axios";
import { IoIosArrowDropup } from "react-icons/io";

const Tracker = ({ formId }) => {
  const [docTrackValue, setDocTrackValue] = useState(25);
  const [qualityTrackValue, setQualityTrackValue] = useState(10);
  const [formData, setFormData] = useState(null);
  console.log(formId);

  const processData = (formData) => {
    let counter = 100;
  
    // Checking A1-A9
    for (let i = 1; i <= 9; i++) {
      const answer = formData[`A${i}`];
      if (answer === "No") {
        counter -= 5;
      }
    }
  
    // Checking G6-G9
    const { G6, G7, G8 } = formData;
    if (G6 !== "100L+") {
      counter -= 5;
    }
    if (G7 !== "35L+") {
      counter -= 5;
    }
    if (G8 === "No") {
      counter -= 20;
    }
  
    return counter;
  };



  useEffect(() => {
    // Fetch data using axios when formId changes
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/forms/${formId}`);
        setFormData(response.data); // Set the retrieved data in state
        const counter = processData(formData);
        setQualityTrackValue(counter)
      } catch (error) {
        console.error("Error fetching form data:", error);
        // Handle errors
      }
    };

    if (formId) {
      fetchData(); // Call fetchData when formId is available
    }
  }, [formId]);

  console.log(formData);
  

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
