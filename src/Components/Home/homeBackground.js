import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function Background() {
  return (
    <ParallaxBanner
      className="h-[100vh] top-0 z-[-1]"
      style={{ position: "sticky" }}
    >
      <ParallaxBannerLayer
        speed={-30}
        className="md:h-max"
        style={{ inset: "-200px 0" }}
      >
        <img
          src="https://static.wixstatic.com/media/84770f_994ffe746a074d1f8a2ec9456a8bf1ff~mv2.png/v1/fill/w_1210,h_960,al_br,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_994ffe746a074d1f8a2ec9456a8bf1ff~mv2.png"
          alt=""
          className="w-full h-full md:h-auto object-cover"
        />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        speed={-10}
        className="md:h-max"
        style={{ inset: "-150px 0" }}
      >
        <img
          src="https://static.wixstatic.com/media/84770f_994ffe746a074d1f8a2ec9456a8bf1ff~mv2.png/v1/fill/w_1210,h_960,al_br,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_994ffe746a074d1f8a2ec9456a8bf1ff~mv2.png"
          alt=""
          className="w-full h-full md:h-auto object-cover"
        />
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}

export default Background;
