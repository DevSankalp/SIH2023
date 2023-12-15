import React from "react";
import Nav from "../Components/navbar";
import Background from "../Components/Home/homeBackground";
import Hero from "../Components/Home/hero";
import About from "../Components/Home/about";
import InfoBot from "../Components/Home/infoBot";
import Footer from "../Components/footer";
import ChatBot from "../Components/chatBot";

function Home() {
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
        { text: "Fee Statement", link: "/Statement" },
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
      <About />
      <InfoBot />
      <Footer data={siteData.footerData} />
      <ChatBot />
    </div>
  );
}

export default Home;
