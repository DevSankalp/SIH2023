import React from "react";

const Background = () => {
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
        className=""
      >
        <source
          src="https://video.wixstatic.com/video/11062b_e2ae833a8eaa43e38e4aa6d32eb3b8f7/480p/mp4/file.mp4" //11062b_00a8c83765b041e99f229f795e93bc7e/480p/mp4/file.mp4 <==> 11062b_b89ca112d1dd452b99dba98f9f1e9a7b/1080p/mp4/file.mp4
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Background;
