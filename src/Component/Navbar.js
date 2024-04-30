import React, { useState } from 'react'
import './Navbar.css';
const Navbar = () => {
  const [date, setDate] = useState(Date());
 
  
  return (
    <div  className="navbar">
      <p>Projects/My project</p>
      <h1>My Project</h1>
      <h1>{date}</h1>
    </div>
  )
}

export default Navbar
