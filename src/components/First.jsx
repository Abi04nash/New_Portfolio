import React from 'react'
import { Link, NavLink } from "react-router-dom";


const First = () => {
  return (
    <div className='first'>
      
      <div className='left1'>
        <h1 className='hello'>Hello I'm </h1>
        <h1 className='name'>Abinash Mishra </h1>
        <h1 className='hello'>And I'm a Passionate Programmer</h1>
        <div className='resume'><a href="https://drive.google.com/file/d/1isxPRaKfDPH9ji6mzzEtd6UUWN0w-bmD/view?usp=sharing">Resume </a></div>
        
      </div>
      <div className='right1'>
        <img className='teacher' src="./images/Me.png" alt="" />
      </div>
      
    </div>
  )
}

export default First
