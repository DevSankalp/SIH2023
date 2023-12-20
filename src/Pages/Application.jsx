import React, { useState } from "react";
import Nav from "../Components/navbar";
import Table from "../Components/Statement/table";
import Background from "../Components/background";
import Footer from "../Components/footer";
import { FaPlus } from "react-icons/fa";

function Application() {
  const [active, setActive] = useState(false);

  const tableData = {
    application: {
      headers: ["S.No.", "Application", ""],
      rows: [],
    },
  };
  const siteData = {
    navbarData: {
      pages: [
        { text: "Home", link: "/", active: true },
        { text: "Fee Statement", link: "/Statement" },
      ],
      components: [],
      loggedNav: [
        { text: "Dashboard", link: "/Dashboard" },
        { text: "Application", link: "/Application", active: true },
      ],
      buttonText: "Get Approved",
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
    <>
      <div className="Application">
        <Nav navbarData={siteData.navbarData} />
        {tableData.application.rows.length < 1 ? (
          active ? (
            <div className="h-screen w-screen flex items-center justify-center fixed top-12">
              <div className="h-[80vh] w-[90vw] bg-white"></div>
            </div>
          ) : (
            <div className="fixed top-0 flex items-center justify-center h-screen w-screen">
              <div className="bg-white flex items-center justify-center w-1/4 h-1/3 shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-xl">
                <button
                  className="flex flex-col items-center justify-center bg-[#7B66FF] text-white py-2 px-8 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:bg-white hover:text-[#7B66FF] duration-300"
                  onClick={() => setActive(!active)}
                >
                  <FaPlus className="w-12 h-12" />
                  Create New
                </button>
              </div>
            </div>
          )
        ) : (
          <div className="fixed top-24 flex flex-col items-center justify-center w-full">
            {active ? (
              <div className="h-screen w-screen flex items-center justify-center fixed top-12">
                <div className="h-[80vh] w-[90vw] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-xl"></div>
              </div>
            ) : (
              <div className="w-full">
                <div className="w-[90%] flex items-center justify-end my-4">
                  <button
                    className="flex items-center justify-center gap-2 bg-[#7B66FF] text-white py-2 px-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:bg-white hover:text-[#7B66FF] duration-300"
                    onClick={() => setActive(!active)}
                  >
                    New
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>
                <Table tableData={tableData} />
              </div>
            )}
          </div>
        )}

        <Background />
        <Footer data={siteData.footerData} />
      </div>
    </>
  );
}

export default Application;
