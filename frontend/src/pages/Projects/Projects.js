import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="projectsMainCard">
        {/* <div className="projectLists"> */}
        <div className="singleProject">
          <button
            className="projectButton"
            onClick={() => navigate("/project1")}
          >
            <h2 className="projectHeader">Ashes to Vanity Website</h2>{" "}
            <img
              className="projectImg"
              src={require("../../components/Projects/imgProjects/AshesToVanity.png")}
            />
          </button>
        </div>

        <div className="singleProject">
          {" "}
          <button
            className="projectButton"
            onClick={() => navigate("/project2")}
          >
            <h2 className="projectHeader">Sk8 Status</h2>
            <img
              className="projectImg"
              src={require("../../components/Projects/imgProjects/Sk8Status.png")}
            />
          </button>
        </div>
        {/* </div> */}

        <div className="singleProject">
          {" "}
          <button
            className="projectButton"
            onClick={() => navigate("/project3")}
          >
            <h2 className="projectHeader">Portfolio Website</h2>{" "}
            <img
              className="projectImg"
              src={require("../../components/Projects/imgProjects/OriginalPortfolio.png")}
            />
          </button>
        </div>

        <div className="singleProject">
          {" "}
          <button
            className="projectButton"
            onClick={() => navigate("/project4")}
          >
            <h2 className="projectHeader">Updated Portfolio with React</h2>{" "}
            <img
              className="projectImg"
              src={require("../../components/Projects/imgProjects/CurrentPortfolio.png")}
            />
          </button>
        </div>
        <div className="singleProject">
          {" "}
          <button
            className="projectButton"
            onClick={() => navigate("/project5")}
          >
            <h2 className="projectHeader">Conway's Game of Life</h2>{" "}
            <img
              className="projectImg"
              src={require("../../components/Projects/imgProjects/GameOfLife.png")}
            />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
