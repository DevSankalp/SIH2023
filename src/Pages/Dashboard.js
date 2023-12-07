import React from "react";
import User from "../Components/DashBoard/user";
import Main from "../Components/DashBoard/main";
import logoImg from "../Components/Assets/logo.png";

function Dashboard() {
  const navbarData = {
    logoText: "FusionX",
    navItems: [
      { text: "Home", link: "/" },
      { text: "Dashboard", link: "/Dashboard", active: true },
      { text: "Application", link: "/" },
      { text: "Fee Statement", link: "/" },
      { text: "Stats", link: "/" },
      // Add more navigation items as needed
    ],
    application: ["Templates", "Submitted", "Approved"],
    buttonText: "Get Approved",
  };

  return (
    <div className="Dashboard h-[100vh] flex flex-col items-end bg-[#f3f6fd]">
      <div className="flex items-center w-full h-max p-4 gap-8 pl-10">
        <a href="/">
          <img src={logoImg} alt="" className="w-10 rounded-full" />
        </a>
        <h1>DashBoard</h1>
      </div>
      <div className="grid grid-rows-[30%65%] gap-8 h-[87%] w-5/6 px-12">
        <User />
        <Main />
      </div>
    </div>
  );
}

export default Dashboard;
