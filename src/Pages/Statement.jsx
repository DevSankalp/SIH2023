import React from "react";
import Table from "../Components/Statement/table";
import Nav from "../Components/navbar";

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
      <Table />
    </>
  );
}

export default Statement;
