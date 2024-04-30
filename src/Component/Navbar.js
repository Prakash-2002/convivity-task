/*import React, { useState } from 'react'
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

export default Navbar*/

import React, { useState } from 'react';
import './Navbar.css';
import { MdOutlineCalendarToday } from 'react-icons/md';

const Navbar = () => {
  const [date, setDate] = useState(formatDate(new Date()));

  // Function to format the date
  function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div className="navbar">

      <div  className="left">
<p>Projects/My project</p>
      <h1>My Project</h1>
      </div>
      <div  className="right">
        <h1><MdOutlineCalendarToday />{date}</h1>
      </div>
      
      
    </div>
  );
};

export default Navbar;
