import React, { useEffect, useState } from "react";
import Nav from "../Components/navbar";
import Background from "../Components/background";
import Hero from "../Components/Home/hero";
import About from "../Components/Home/about";
import Features from "../Components/Home/features";
import Testimonials from "../Components/Home/testimonials";
import ChatBot from "../Components/chatBot";
import Footer from "../Components/footer";
import { IoIosArrowDropup } from "react-icons/io";
import FAQ from "../Components/Home/faq";

function Home() {
  // visibility-controller
  const elemArr = ["about", "chat", "chatInfo", "testimonial"];
  const initialState = elemArr.reduce((key, elementId) => {
    key[elementId] = 0;
    return key;
  }, {});
  const [inViewport, setInViewport] = useState(initialState);
  const calculateInViewport = (elementIds) => {
    elementIds.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        const elH = element.offsetHeight;
        const H = window.innerHeight;
        const r = element.getBoundingClientRect();
        const t = r.top;
        const b = r.bottom;

        setInViewport((prevValues) => ({
          ...prevValues,
          [elementId]: Math.max(
            0,
            t > 0 ? Math.min(elH, H - t) : Math.min(b, H)
          ),
        }));
      }
    });
  };
  useEffect(() => {
    calculateInViewport(elemArr);

    const handleScrollResize = () => {
      calculateInViewport(elemArr);
    };

    window.addEventListener("scroll", handleScrollResize);
    window.addEventListener("resize", handleScrollResize);

    return () => {
      window.removeEventListener("scroll", handleScrollResize);
      window.removeEventListener("resize", handleScrollResize);
    };
  }, elemArr);

  const siteData = {
    navbarData: {
      pages: [
        { text: "Home", link: "/", active: true },
        { text: "Fee Statement", link: "/Statement" },
      ],
      components: [
        { text: "About", position: 680 },
        { text: "ChatBot", position: 1000 },
        { text: "FAQ", link: "/", position: 2700 },
      ],
      loggedNav: [
        { text: "Dashboard", link: "/Dashboard" },
        { text: "Application", link: "/Application" },
      ],
      buttonText: "Get Approved",
    },
    heroData: {
      title: ["Simplify AICTE Approval with AI Assistance"],
      description:
        "Simplify AICTE approval with our user-friendly portal. Navigate requirements effortlessly, streamline documentation, and accelerate your institution's journey to quality technical education. Join us for a seamless approval process!",
      button: "Explore",
    },
    footerData: {
      navItems: [
        { text: "Dashboard", link: "/Dashboard" },
        { text: "Application", link: "/" },
        { text: "Fee Statement", link: "/Statement" },
        { text: "Stats", link: "/" },
      ],
    },
  };

  return (
    <div className="Home">
      <Nav navbarData={siteData.navbarData} />
      <Background />
      <Hero data={siteData.heroData} />
      <About animate={inViewport} />
      <Features animate={inViewport} />
      <Testimonials animate={inViewport} />
      <FAQ />
      <ChatBot />
      <Footer data={siteData.footerData} />

      {/* Scroll-Top-Button */}
      <button
        className={`flex items-center justify-center fixed bottom-14 left-8 bg-blue-700 text-white shadow-[0_0_5px_rgba(0,0,0,.4)] hover:bg-white hover:text-black w-10 h-10 rounded-xl z-20 transition-transform duration-500 ${
          window.scrollY > 700 ? "translate-x-0" : "-translate-x-[80px]"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IoIosArrowDropup className="w-2/3 h-2/3" />
      </button>
    </div>
  );
}

export default Home;
