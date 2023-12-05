import React from "react"
import "./App.css"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ParallaxProvider } from "react-scroll-parallax"

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SIH2023" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  )
}

export default App
