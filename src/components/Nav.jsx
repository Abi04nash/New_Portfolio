import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='nav'>
      <div className='head'>Portfolio</div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>


      <div className={`list ${isOpen ? "open" : ""}`}>
  <NavLink to="/first" className={({ isActive }) => isActive ? "active" : ""}>
    <li><i className="fa-solid fa-house"></i> Home</li>
  </NavLink>
  <NavLink to="/third" className={({ isActive }) => isActive ? "active" : ""}>
    <li><i className="fa-solid fa-address-card"></i> About</li>
  </NavLink>
  <NavLink to="/second" className={({ isActive }) => isActive ? "active" : ""}>
    <li><i className="fa-solid fa-chalkboard-user"></i> Education</li>
  </NavLink>
  <NavLink to="/fourth" className={({ isActive }) => isActive ? "active" : ""}>
    <li><i className="fa-solid fa-school"></i> Skills</li>
  </NavLink>
  <NavLink to="/project" className={({ isActive }) => isActive ? "active" : ""}>
    <li><i className="fa-solid fa-chalkboard-user"></i> Projects</li>
  </NavLink>
  <NavLink to="/fifth" className={({ isActive }) => isActive ? "active" : ""}>
    <li><i className="fa-solid fa-address-book"></i> Connect</li>
  </NavLink>
</div>

    </div>
  )
}

export default Nav



