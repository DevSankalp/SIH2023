import React, { useState, useEffect } from "react";
import Data from "../Components/DashBoard/data";
import Sidebar from "../Components/DashBoard/sideBar";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
        setTimeout(() => {
          navigate("/Login");
        }, 3000);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const dashBoardData = {
    userData: {
      userName: "DemoUser",
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
      {/* background-bg */}
      <div className="background-bg-dash fixed top-0 z-[0] h-screen w-screen">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
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
