import React from "react";
import Data from "../Components/DashBoard/dData";
import Sidebar from "../Components/DashBoard/sideBar";
import logoImg from "../Components/Assets/logo.png";

function Dashboard() {
  const dashBoardData = {};

  return (
    <div className="Dashboard h-[100vh] flex flex-col items-end bg-[#f3f6fd]">
      <div className="grid grid-cols-[20%_80%] h-full w-full">
        <Sidebar />
        <Data />
      </div>
    </div>
  );
}

export default Dashboard;
