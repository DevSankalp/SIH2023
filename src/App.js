import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SIH2023" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
