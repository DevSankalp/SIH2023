import React from "react";
import Nav from "../Components/navbar";
import Table from "../Components/Statement/table";
import tableData from "../Components/Statement/table.json";

function Statement() {
  const navbarData = {
    pages: [
      { text: "Home", link: "/" },
      { text: "Fee Statement", active: true },
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
      <div className="mt-24 w-full">
        <Table tableData={tableData} />
      </div>
    </>
  );
}

export default Statement;
