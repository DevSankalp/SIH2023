import React from "react";
import Data from "../Components/DashBoard/data";
import Sidebar from "../Components/DashBoard/sideBar";
import Background from "../Components/DashBoard/background";

function Dashboard() {
  const dashBoardData = {
    userData: {
      userName: "DemoUser",
      userImg:
        "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg",
    },
    navData: {
      items: [
        { title: "Home", link: "/Home" },
        { title: "Dashboard", active: true },
        { title: "Statement", link: "/Statement" },
      ],
    },
  };

  return (
    <div className="Dashboard md:h-[100vh] flex flex-col items-end bg-transparent">
      <Background />
      <div className="grid md:grid-cols-[20%_80%] h-full w-full bg-transparent">
        <Sidebar
          userData={dashBoardData.userData}
          navData={dashBoardData.navData}
        />
        <Data />
      </div>
    </div>
  );
}

export default Dashboard;
