import React, { useState, useEffect } from "react";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import Testimonials from "./testimonials";
import InfoBot from "./infoBot";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
    <>
      <Parallax speed={20} className="sticky top-0 z-[0]">
        {/* {Motto} */}
        <div
          className="h-[20vh] md:h-[25vh] bg-black text-white flex items-center overflow-hidden"
          id="motto"
        >
          <div
            className={`w-full h-full flex flex-col items-center justify-center duration-[1500ms] ${
              animate.motto > 100
                ? "translate-x-0 opacity-1"
                : "-translate-x-1/4 opacity-0"
            }`}
          >
            <h1 className="text-xl sm:text-4xl md:text-5xl w-max text-center relative">
              <div className="absolute w-20 md:w-36 h-full -left-4 md:-left-12 -top-2 md:-top-8 border-white border-t-8 border-l-8"></div>
              <div className="absolute w-20 md:w-36 h-full -right-4 md:-right-12 -bottom-2 md:-bottom-8 border-white border-b-8 border-r-8"></div>
              We Help You Achieve Your Goals
            </h1>
          </div>
        </div>

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

            {/* Features-Carousel */}
            <div
              className={`absolute top-[18%] left-[20%] w-2/3 h-full bg-transparent duration-[1500ms] text-justify ${
                animate.about > 250
                  ? "translate-x-0 opacity-1"
                  : "translate-x-full opacity-0"
              }`}
            >
              <Slider {...settings}>
                {featureData.map((data, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl">
                    <h1 className="text-4xl mb-4 text-center">{data.head}</h1>
                    <p className="text-md">{data.description}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </ParallaxBanner>
        </div>
      </Parallax>
      <InfoBot animate={animate} />
      <Testimonials animate={animate} />
    </>
  );
}

export default About;
