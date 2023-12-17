import React from "react";
import Table from "../Components/Statement/table";
import Nav from "../Components/navbar";

function Statement() {
  const navbarData = {
    pages: [
      { text: "Home", link: "/", active: true },
      { text: "Fee Statement", link: "/Statement" },
    ],
    components: [],
    loggedNav: [
      { text: "Dashboard", link: "/Dashboard" },
      { text: "Application", link: "/Application" },
    ],
    buttonText: "Get Approved",
  };

  return (
    <>
      <Nav navbarData={navbarData} />
      <div className="flex flex-col justify-center items-center mt-24">
        <Table />
      </div>
    </>
  );
}

export default Statement;
