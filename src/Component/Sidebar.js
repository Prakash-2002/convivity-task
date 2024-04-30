import React from 'react'
import './Sidebar.css';
import profile from './user.jpg';

import {
  MdKeyboardArrowDown,
  MdOutlineAddTask,
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  
  MdOutlineCalendarToday,
  

  
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
 
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineTask,
 
 
} from "react-icons/md";



const Sidebar = () => {
 

  // closing the navbar when clicked outside the sidebar area
 

 

  return (
    <div className="sidebar">
      <div >
        <div className="sidebar-brand">
          <h1>Task<span >mate</span>
            </h1>
          <p className='sub'>Focus Priority execute</p>
        </div>
        <div className='name-container'>
          <div className='imag'><img src={profile} alt='1'/></div>
          <div className='name'>
            <p className='username'>Prakash kumar</p>
            <p>prakash@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <p className='head-menu'>Menu <MdKeyboardArrowDown size={25}/></p>
          
          <ul className="menu-list">
            <li className="menu-item">
             
               
                  
                  <span className="menu-link-icon">
                <MdOutlineGridView size={18} />
                
                
              </span>
              
             
              <span className="menu-link-text"> Overview</span>
            </li>
            <li className="menu-item">
              
                <span className="menu-link-icon">
                
                  <MdOutlineTask />
                  
                </span>
                <span className="menu-link-text">Task List</span>
              
            </li>
            <li className="menu-item">
              
                <span className="menu-link-icon">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="menu-link-text">Project Overview</span>
            
            </li>
            <li className="menu-item">
              
                <span className="menu-link-icon">
                  <MdOutlineCalendarToday  size={18}/>
                  
                </span>
                <span className="menu-link-text">Calender</span>
           
            </li>
            <li className="menu-item">
              
                <span className="menu-link-icon">
                  <MdOutlineSettings size={18}/>
                </span>
                <span className="menu-link-text">Settings</span>
          
            </li>
            
          </ul>
        </div>
        <div className="sidebar-menu">
        <p className='head-menu'>List <MdKeyboardArrowDown size={25} /></p>
          <ul className="menu-list">
            <li className="menu-item">
             
               
                
                    
              
              
              <span className="menu-link-icon">
              <MdOutlinePeople size={18}/>
                </span>
                <span className="menu-link-text">Personal</span>
            </li>
            <li className="menu-item">
              
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Design</span>
              
            </li>
            <li className="menu-item">
              
                <span className="menu-link-icon">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="menu-link-text">Development</span>
            
            </li>
            <li className="menu-item">
              
                <span className="menu-link-icon">
                  <MdOutlineCurrencyExchange size={18} />
                </span>
                <span className="menu-link-text">Research</span>
           
            </li>
           
            
          </ul>
        </div>
      </div>
      <div>
        <button>Dark</button>
        <button>Light</button>
      </div>
    </div>
  );
};

export default Sidebar;
