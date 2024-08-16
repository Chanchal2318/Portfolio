import React from 'react';
// import  Navbar from './components/Navbar';
// import  Home from './components/Home';
// import About from './components/About';
import {Route,Routes} from "react-router-dom";
import Project from './components/Project';
import Home from './components/Home';
// import { Router } from 'express';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App(){
  return (
    <>
      {/* <Navbar/> 
       <Home/>
      <About/>  */}
      <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  )
}

export default App;