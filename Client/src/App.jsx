import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import ContactMe from "./components/ContactMe/ContactMe"
import Portfolio from "./components/Portfolio/Portfolio"
import Resume from "./components/Resume/Resume"
import "./App.css"


const App = () => {

  return (
<div>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ContactMe" element={<ContactMe />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Resume" element={<Resume />} />
    </Routes>
  </Router>
</div>

  )
}

export default App

