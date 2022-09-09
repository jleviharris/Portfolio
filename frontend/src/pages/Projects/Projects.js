import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="projectsPage">
      <button className="backButton" onClick={() => navigate("/")}>
        BACK
      </button>
      <div className="projectsMainCard">
        <div className="singleProject">
          <button
            className="projectButton"
            onClick={() => navigate("/project1")}
          >
            Ashes to Vanity Website
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
            Sk8 Status
            <img
              className="projectImg"
              src={require("../../components/Projects/imgProjects/Sk8Status.png")}
            />
          </button>
        </div>
        <div className="singleProject">
          {" "}
          <button
            className="projectButton"
            onClick={() => navigate("/project5")}
          >
            Conway's Game of Life
            <img
              className="projectImg"
              src={require("../../components/Projects/imgProjects/GameOfLife.png")}
            />
          </button>
        </div>

        <div className="singleProject">
          {" "}
          <button
            className="projectButton"
            onClick={() => navigate("/project3")}
          >
            Portfolio Website
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
            Updated Portfolio with React
            <img
              className="projectImg"
              src={require("../../components/Projects/imgProjects/CurrentPortfolio.png")}
            />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
