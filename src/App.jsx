//import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import ProjectList from './components/ProjectList/ProjectList';
import Contact from './components/Contact/Contact';
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  

  return (
    <>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App


