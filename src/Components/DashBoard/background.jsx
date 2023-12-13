import React from "react";

const Background = () => {
  const video =
    "https://video.wixstatic.com/video/11062b_e2ae833a8eaa43e38e4aa6d32eb3b8f7/1080p/mp4/file.mp4";

  return (
    <div className="fixed top-0 z-[-1] h-[100vh] w-full">
      <video
        role="presentation"
        crossOrigin="anonymous"
        playsInline
        preload="auto"
        muted
        loop
        tabIndex="-1"
        autoPlay
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 1,
        }}
        src={video}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
