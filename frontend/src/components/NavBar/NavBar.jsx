import "./NavBar.css";

import { useNavigate } from "react-router-dom";

import React from "react";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li>
          <button onClick={() => navigate("/aboutMe")}>About Me</button>
        </li>
        <li>
          <button onClick={() => navigate("/projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => navigate("/resume")}>Resume</button>
        </li>
        <li>
          <button onClick={() => navigate("/contact")}>Contact Me</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
