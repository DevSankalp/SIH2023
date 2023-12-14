import React, { useEffect, useState } from "react";
import Nav from "../Components/navbar";
import Background from "../Components/Home/homeBackground";
import Hero from "../Components/Home/hero";
import About from "../Components/Home/about";
import Footer from "../Components/footer";
import ChatBot from "../Components/chatBot";

function Home() {
  // visibility-controller
  const elemArr = ["motto", "about", "chat", "chatInfo", "testimonial"];
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
      navItems: [
        { text: "Home", active: true },
        { text: "Dashboard", link: "/Dashboard" },
        { text: "Application", link: "/Application" },
        { text: "Fee Statement", link: "/Statement" },
        { text: "Stats", link: "/Stats" },
        // Add more navigation items as needed
      ],
      application: ["Templates", "Submitted", "Approved"],
      buttonText: "Get Approved",
    },
    heroData: {
      title: ["Unleash the Power of Innovation!!"],
      description:
        "Ready to revolutionize the way you approve? Your journey starts here, with FusionX. Embrace the future. Embrace efficiency. Embrace success!",
      button: "Explore",
    },
    footerData: {
      navItems: [
        { text: "Dashboard", link: "/Dashboard" },
        { text: "Application", link: "/" },
        { text: "Fee Statement", link: "/" },
        { text: "Stats", link: "/" },
      ],
      info: [
        { text: "Address", link: "Link" },
        { text: "About", link: "Link" },
      ],
    },
  };

  return (
    <div className="Home">
      <Nav navbarData={siteData.navbarData} />
      <Background />
      <Hero data={siteData.heroData} />
      <About animate={inViewport} />
      <Footer data={siteData.footerData} />
      <ChatBot />
    </div>
  );
}

export default Home;
