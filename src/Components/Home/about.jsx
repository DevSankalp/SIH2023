import React, { useState, useEffect } from "react";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";

function About() {
  const [font, setFont] = useState(1);
  const [position, setPosition] = useState(400);

  // text-scroll
  useEffect(() => {
    const handleScroll = () => {
      var newPosition = Math.max(position - window.scrollY + 200, 0);
      setPosition(newPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
      {/* {Motto} */}
      <div className="z-[2] relative h-[20vh] md:h-[30vh] bg-black text-white flex items-center overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1
            className="text-xl sm:text-4xl md:text-5xl w-max text-center relative"
            style={{ transform: `translateX(-${position}px)` }}
          >
            <div className="absolute w-20 md:w-36 h-full -left-4 md:-left-12 -top-2 md:-top-8 border-white border-t-8 border-l-8"></div>
            <div className="absolute w-20 md:w-36 h-full -right-4 md:-right-12 -bottom-2 md:-bottom-8 border-white border-b-8 border-r-8"></div>
            We Help You Achieve Your Goals
          </h1>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 h-[50vh] md:h-[70vh] overflow-hidden bg-[rgba(255,255,255,.8)] md:bg-white sticky top-0 z-[-1]">
        {/* About */}
        <Parallax
          speed={20}
          className="flex flex-col items-center justify-start"
        >
          <div className="w-full flex flex-col items-center gap-4 md:gap-12">
            <h1
              className="text-transparent bg-[linear-gradient(to_right,#5FBDFF,#7B66FF)] bg-clip-text font-bold"
              style={{ fontSize: `${font}px` }}
            >
              About Us
            </h1>
            <div className="w-[70%] text-justify flex items-center">
              <p>
                This platform enables institutes and stakeholders to input
                specific course and infrastructure details, receiving in return
                all required documents and fee structures. Its core objective is
                to simplify AICTE's Approval Process Handbook, offering benefits
                such as enhanced clarity, customized guidance, and streamlined
                processes, resulting in time and resource efficiency.
              </p>
            </div>
          </div>
        </Parallax>

        {/* About-Image */}
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
    </>
  );
}

export default About;
