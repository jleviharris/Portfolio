import "./NavBar.css";

import { useNavigate } from "react-router-dom";

import React from "react";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      
      <ul>
        <li><button onClick={() => navigate("/")}>Home</button></li>
        <li>    
            <button onClick={() => navigate("/projects")}>Projects</button>  
        </li>
        <li>    
            <button onClick={() => navigate("/resume")}>Resume</button>  
        </li>
        <li>    
            <button onClick={() => navigate("/previousJobs")}>Previous Jobs</button>  
        </li>
        <li>    
            <button onClick={() => navigate("/personalLife")}>Personal Life</button>  
        </li>
        <li>    
            <button onClick={() => navigate("/comments")}>Comments</button>  
        </li>
        <li>    
            <button onClick={() => navigate("/contact")}>Contact Me</button>  
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
