import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="projectsMainCard">
      {/* <div className="projectLists"> */}
      <div className="singleProject">
        <button onClick={() => navigate("/project1")}>
          <p>Ashes to Vanity Website</p>{" "}
          <img
            className="projectImg"
            src={require("../../components/Projects/imgProjects/AshesToVanity.png")}
          />
        </button>
      </div>

      <div className="singleProject">
        {" "}
        <button onClick={() => navigate("/project2")}>
          <p>Sk8 Status</p>
          <img
            className="projectImg"
            src={require("../../components/Projects/imgProjects/Sk8Status.png")}
          />
        </button>
      </div>
      {/* </div> */}

      <div className="singleProject">
        {" "}
        <button onClick={() => navigate("/project3")}>
          <p>Portfolio Website</p>{" "}
          <img
            className="projectImg"
            src={require("../../components/Projects/imgProjects/OriginalPortfolio.png")}
          />
        </button>
      </div>

      <div className="singleProject">
        {" "}
        <button onClick={() => navigate("/project4")}>
          <p>Updated Portfolio with React</p>{" "}
          <img
            className="projectImg"
            src={require("../../components/Projects/imgProjects/CurrentPortfolio.png")}
          />
        </button>
      </div>
    </div>
  );
};

export default Projects;
