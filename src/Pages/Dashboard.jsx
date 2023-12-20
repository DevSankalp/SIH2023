import React from "react";
import Data from "../Components/DashBoard/data";
import Sidebar from "../Components/DashBoard/sideBar";
import Background from "../Components/DashBoard/background";

function Dashboard() {
  const dashBoardData = {
    userData: {
      userImg:
        "https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/19/a085de15eefb93d066b02667bd43a9cb1674146311370208_original.jpg?impolicy=abp_cdn&imwidth=650",
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
