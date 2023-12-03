import React, { useState, useEffect } from "react";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";

function About({ data }) {
  const [font, setFont] = useState(1);

  // text-size-controller
  useEffect(() => {
    const handleScroll = () => {
      var newfont = font;
      if (window.innerWidth < 480) {
        newfont = Math.min(font + window.scrollY / 10, 50);
      } else {
        newfont = Math.min(font + window.scrollY / 10, 70);
      }
      setFont(newfont);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:grid md:grid-cols-2 h-[70vh] overflow-hidden bg-[rgba(255,255,255,.8)] md:bg-white sticky top-0 z-[-1]">
      <Parallax speed={20} className="flex flex-col items-center justify-start">
        {data.title.map((title, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center gap-4 md:gap-12"
          >
            <h1
              className="text-transparent bg-[linear-gradient(to_right,#5FBDFF,#7B66FF)] bg-clip-text font-bold"
              style={{ fontSize: `${font}px` }}
            >
              {title}
            </h1>
            <div className="w-[70%] text-justify flex items-center">
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </Parallax>
      <ParallaxBanner className="h-[100vh] hidden md:block">
        <ParallaxBannerLayer
          speed={-10}
          className="w-full h-full overflow-hidden"
          style={{ inset: "-150px 0" }}
        >
          <img
            src="https://static.wixstatic.com/media/c837a6_38f0ee339302476e9f04ad2cab58a10e~mv2.png/v1/fill/w_759,h_828,al_bl,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_38f0ee339302476e9f04ad2cab58a10e~mv2.png"
            alt=""
            className="w-full"
          />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}

export default About;
