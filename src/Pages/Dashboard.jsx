import React, {useState, useEffect} from "react";
import Data from "../Components/DashBoard/data";
import Sidebar from "../Components/DashBoard/sideBar";
import Background from "../Components/DashBoard/background";
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

  if (!user) {
    return(
      <div>
        <h2>Error Page</h2>
        <h3>Redirecting in 3 Seconds</h3>
      </div>
    )
  }

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
