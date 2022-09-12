import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import React from "react";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li>
          <button onClick={() => navigate("/aboutMe")}>about me</button>
        </li>
        <li>
          <button onClick={() => navigate("/projects")}>projects</button>
        </li>
        <li>
          <button onClick={() => navigate("/resume")}>resume</button>
        </li>
        <li>
          <button onClick={() => navigate("/contact")}>contact me</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
