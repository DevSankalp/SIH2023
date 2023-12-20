import React, { useEffect, useState } from "react";

function Features({ animate }) {
  const featureData = [
    {
      head: "Enhanced Clarity and Ease of Understanding",
      description:
        "Transforming complex language and technical jargon into easily understandable information ensures that institutes comprehend AICTE's requirements with clarity.",
    },
    {
      head: "Customized Guidance and Relevant Documentation",
      description:
        "The portal dynamically generates documentation templates and fee structures based on the specific course requirements inputted by the institute, ensuring relevance and accuracy.",
    },
    {
      head: "Time and Resource Efficiency",
      description:
        "By automating the parsing and presentation of information, Fusion significantly reduces the time and effort required to interpret and navigate the Approval Process Handbook.",
    },
    {
      head: "Increased Accuracy and Compliance",
      description:
        "Clear instructions provided by Fusion facilitate accurate adherence to AICTE's guidelines, resulting in higher-quality submissions and reduced need for reworks.",
    },
    {
      head: "Continuous Updates and Real-time Assistance",
      description:
        "The AI-based portal ensures continuous updates to reflect changes in the Approval Process Handbook and offers real-time assistance to address queries during the approval process.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-16 bg-black relative min-h-[60vh] py-8">
      <h1 className="text-white text-6xl relative before:absolute before:w-full before:h-2 before:-bottom-2 gradient-border">
        Features
      </h1>
      <div
        className={`flex flex-col w-[90%] items-center justify-center gap-8 duration-[1500ms] text-justify ${
          animate.about > 250
            ? "translate-x-0 opacity-1"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-center gap-4 ">
          {featureData.map((data, index) =>
            index % 2 === 0 ? (
              <div
                key={index}
                className="cursor-default rounded-none group border-2 border-white p-8 group relative flex items-center justify-center"
              >
                <h1 className="gradient-background bg-clip-text text-transparent hover:text-white font-bold text-3xl text-center opacity-100 group-hover:opacity-20 duration-500 absolute p-4">
                  {data.head}
                </h1>
                <p className="text-md text-white opacity-0 group-hover:opacity-100 duration-500">
                  {data.description}
                </p>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="flex items-center justify-center gap-4">
          {featureData.map((data, index) =>
            index % 2 !== 0 ? (
              <div
                key={index}
                className="cursor-default rounded-none group border-2 border-white p-8 relative flex items-center justify-center"
              >
                <h1 className="gradient-background bg-clip-text text-transparent hover:text-white font-bold text-3xl text-center opacity-100 group-hover:opacity-20 duration-500 absolute p-4">
                  {data.head}
                </h1>
                <p className="text-md text-white opacity-0 group-hover:opacity-100 duration-500">
                  {data.description}
                </p>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;
