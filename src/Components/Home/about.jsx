import React, { useState, useEffect } from "react";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";

import InfoBot from "./infoBot";

function About({ animate }) {
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
    <>
      <Parallax speed={20} className="sticky top-24 z-[0]">
        {/* About_cont */}
        <div
          id="about"
          className="md:grid md:grid-cols-2 h-[80vh] overflow-hidden bg-[rgba(255,255,255,.8)] md:bg-white"
        >
          {/* About-Us */}
          <div
            className={`flex flex-col items-center justify-start pt-8 duration-[1500ms] relative before:absolute md:before:w-2/3 before:h-1/3 before:left-0 before:bottom-1/3 before:bg-[rgba(123,102,255,0.15)] before:z-[-1] ${
              animate.about > 150
                ? "translate-y-0 opacity-1"
                : "translate-y-1/4 opacity-0"
            }`}
          >
            <div className="w-full flex flex-col items-center gap-4 md:gap-8">
              <h1
                className="text-transparent bg-[linear-gradient(to_right,#5FBDFF,#7B66FF)] bg-clip-text font-bold"
                style={{ fontSize: `${font}px` }}
              >
                About Us
              </h1>
              <div className="w-[90%] md:w-[70%] text-justify flex items-center">
                <p>
                  This platform revolutionizes the AICTE Approval Process
                  Handbook by providing a streamlined interface for educational
                  institutes and stakeholders. It facilitates the effortless
                  submission of specific course and infrastructure details,
                  offering a swift return of all necessary documents and fee
                  structures. Focused on enhancing clarity and efficiency, the
                  platform employs cutting-edge technology to deliver customized
                  guidance throughout the approval journey. Its user-friendly
                  design ensures a seamless experience, optimizing time and
                  resources for institutions. By promoting transparency and
                  keyessibility, the platform empowers educational entities to
                  navigate AICTE approvals with ease, emphasizing their core
                  mission of delivering quality education. In essence, it stands
                  as a pivotal innovation, simplifying complex regulatory
                  processes for the benefit of educational stakeholders.
                </p>
              </div>
            </div>
          </div>

          {/* About-Image */}
          <ParallaxBanner className="h-[100vh] hidden md:block z-[0]">
            {/* Background-Image */}
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
      </Parallax>
      <InfoBot animate={animate} />
    </>
  );
}

export default About;
