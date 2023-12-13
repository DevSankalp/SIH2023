import React from "react";
import Nav from "../Components/navbar";
import Background from "../Components/Home/homeBackground";
import Hero from "../Components/Home/hero";
import About from "../Components/Home/about";
import Links from "../Components/Home/quickLinks";
import Footer from "../Components/footer";
import ChatBot from "../Components/chatBot";

function Home() {
  const siteData = {
    navbarData: {
      navItems: [
        { text: "Home", active: true },
        { text: "Dashboard", link: "/Dashboard" },
        { text: "Application", link: "/" },
        { text: "Fee Statement", link: "/" },
        { text: "Stats", link: "/" },
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
    aboutData: {
      title: ["About Us"],
      description:
        "This platform enables institutes and stakeholders to input specific course and infrastructure details, receiving in return all required documents and fee structures. Its core objective is to simplify AICTE's Approval Process Handbook, offering benefits such as enhanced clarity, customized guidance, and streamlined processes, resulting in time and resource efficiency.",
    },
    linksData: {
      title: ["Guidelines/ Information", "Eligibility", "TER Changes"],
      links: ["/", "/", "/"],
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
      <About data={siteData.aboutData} />
      <Links data={siteData.linksData} />
      <Footer data={siteData.footerData} />
      <ChatBot />
    </div>
  );
}

export default Home;
