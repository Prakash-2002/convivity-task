import React from "react";
import Navbar from "../Component/Navbar";
import "./Feed.css";
import images from '../Component/user.jpg';

import { MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowUpRightCircle } from "react-icons/bs";
const Feed = () => {

  
  
  
  // Dummy image URL
  

  return (
    <div className="">
      <Navbar />
      <div className="feed">
        <div className="header-input">
          <div className="from-group">
            <div className="input-data">
              {" "}
              <p>Priority</p><div className="detail-data"><p className="sub-sec">Medium</p></div> 
            </div>
            <div className="input-data">
              {" "}
              <p>Due Date</p>
              <div className="detail-data"><p className="sub-sec">28 Apr 2024</p>
              
               </div>
            </div>

            <div className="input-data">
              {" "}
              <p>Tags</p> 
              <div className="detail-data"> <p className="sub-sec">Meetings</p>
              <p className="sub-sec">UI Design</p>
              <p className="sub-sec">Development</p>
              <p className="sub-sec">UX Research</p>
              
              </div>
             
            </div>
            <div className="input-data">
              {" "}
              <p>Assignees</p> 
              <div className="detail-data"> <p className="sub-sec">Prakash kumar</p>
              
              
              </div>
              
              
              
            </div>
          </div>
          <div className="search">
            <input placeholder="Search task or project" />
          </div>
        </div>
<div className="task-card">
  <div className="new-task"><p>New Task <MdKeyboardArrowDown size={20}/>  </p></div>
  <div className="sorting">
<p>Filter<MdKeyboardArrowDown size={20}/>  </p>
<p>Sort<MdKeyboardArrowDown size={20}/>  </p>
<p>Label<MdKeyboardArrowDown size={20}/>  </p>
<p>Category <MdKeyboardArrowDown size={20}/>  </p>
  </div>
</div>
        <div className="container">
        <div className="card">
      
      <div className="card-content">
        <div className="card-date">Today<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Testing and User Feedback</div>
        <div className="card-time">09:00 AM-10:00 AM <div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    <div className="card">
       <div className="card-content">
        <div className="card-date">Today<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Create A Visual Style Guide</div>
        <div className="card-time">09:00 AM-10:00 AM <div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <div className="card-date">1 May 2024<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Meeting with Client</div>
        <div className="card-time">09:00 AM-10:00 AM<div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    
      
     
    <div className="card">
      
      <div className="card-content">
        <div className="card-date">2 May 224<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Create Mockups for Dribbble Shot</div>
        <div className="card-time">09:00 AM-10:00 AM <div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    <div className="card">
      
      <div className="card-content">
        <div className="card-date">3 May 2024<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Slicing Landing Page</div>
        <div className="card-time">09:00 AM-10:00 AM<div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    <div className="card">
      
      <div className="card-content">
        <div className="card-date">3 May 2024<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Analyze Research Data</div>
        <div className="card-time">09:00 AM-10:00 AM<div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    <div className="card">
      
      <div className="card-content">
        <div className="card-date">3 May 2024<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Develop Back-End Systems</div>
        <div className="card-time">09:00 AM-10:00 AM<div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    <div className="card">
      
      <div className="card-content">
        <div className="card-date">3 May 2024<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Optimize Web Performance</div>
        <div className="card-time">09:00 AM-10:00 AM <div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    <div className="card">
      
      <div className="card-content">
        <div className="card-date">3 May 2024<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Testing and feedback</div>
        <div className="card-time">09:00 AM-10:00 AM <div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    <div className="card">
      
      <div className="card-content">
        <div className="card-date">3 May 2024<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">UX Research: Usability Testing</div>
        <div className="card-time">09:00 AM-10:00 AM<div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    <div className="card">
      
      <div className="card-content">
        <div className="card-date">3 May 2024<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Implement Security Features</div>
        <div className="card-time">09:00 AM-10:00 AM <div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    <div className="card">
      
      <div className="card-content">
        <div className="card-date">3 May 2024<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Meeting with Client</div>
        <div className="card-time">09:00 AM-10:00 AM <div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
    <div className="card">
      
      <div className="card-content">
        <div className="card-date">3 May 2024<BsArrowUpRightCircle  size={20}/></div>
        <div className="card-task">Analyze Research Data</div>
        <div className="card-time">09:00 AM-10:00 AM<div className="card-image">
        <img src={images} alt="Placeholder" />
      </div></div>
      </div>
    </div>
         
        </div>
      </div>
    </div>
  );
};

export default Feed;
