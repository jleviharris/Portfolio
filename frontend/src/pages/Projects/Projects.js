import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="projectsMainCard">
      <ul>
        <li>
          <button onClick={() => navigate("/project1")}>
            Ashes to Vanity Website
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/project2")}>Sk8 Status</button>
        </li>
        <li>
          <button onClick={() => navigate("/project3")}>
            Portfolio Website
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/project4")}>
            Updated Portfolio with React
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
