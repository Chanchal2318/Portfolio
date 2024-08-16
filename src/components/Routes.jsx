import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Project from './components/Project';
import Home from './components/Home';
import { Router } from 'express';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import About from './components/About';
import Experience from './components/Experience';

function Routes() {
  return (
    <>
       <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        </Routes>
       </Router>
    </>
  )
}

export default Routes
