import React from "react";
import Nav from "../Components/navbar";
import Table from "../Components/Statement/table";
import tableData from "../Components/Statement/table.json";
import Footer from "../Components/footer";

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

  const footerData = {
    navItems: [
      { text: "Dashboard", link: "/Dashboard" },
      { text: "Application", link: "/" },
      { text: "Fee Statement", link: "/Statement" },
      { text: "Stats", link: "/" },
    ],
  };

  return (
    <>
      <Nav navbarData={navbarData} />
      <div className="mt-24 w-full">
        <Table tableData={tableData} />
      </div>
      <Footer data={footerData} />
    </>
  );
}

export default Statement;
