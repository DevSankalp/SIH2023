import React, { useState, useEffect } from "react";

const infoData = {
  title: ["Home", "Dashboard", "Customers", "Active"],
};

const Sidebar = () => {
  return (
    <div className="h-full w-full transition-all duration-500 overflow-hidden p-8 bg-[#512da8]">
      Sidebar
      <div class="navigation">
        <ul>
          {infoData.title.map((title) => (
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="react-icon"></ion-icon>
                </span>
                <span class="title">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
