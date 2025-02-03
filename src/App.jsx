import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import './App.css'
import Nav from './components/Nav'
import First from './components/First'
import Second from './components/Second'
import Foot from './components/Foot'
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Project from './components/Project';



function AnimatedRoutes() {
  const location = useLocation(); // Get current route

  return (
    <div key={location.pathname} className="page">
       <Routes>
        <Route path="/" element={<First />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/project" element={<Project />} />
        <Route path="/fifth" element={<Fifth />} />
      </Routes>
    </div>
  );
}


function App() {
  

  return (
    <Router>
      <Nav />
      {/* <div className='page'>
      <Routes>
        <Route path="/" element={<First />} /> 
        <Route path="/first" element={<First />} />
        <Route path="/third" element={<Third />} />
        <Route path="/second" element={<Second />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
      </Routes>
      </div> */}

      <AnimatedRoutes />
      <Foot /> 
    </Router>
  )
}

export default App



