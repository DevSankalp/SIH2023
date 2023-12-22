import React from "react";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Application from "./Pages/Application";
import Statement from "./Pages/Statement";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { Circle2 } from "react-preloaders";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
  return (
    <React.Fragment>
      <ParallaxProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Application" element={<Application />} />
            <Route path="/Statement" element={<Statement />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </ParallaxProvider>
      <Circle2 time={1000} />
    </React.Fragment>
  );
}

export default App;
