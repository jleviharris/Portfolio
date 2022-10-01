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
          {" "}
          <button
            className="projectButton"
            onClick={() => navigate("/GameOfLife")}
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
            onClick={() => navigate("/CryptoSite")}
          >
            Crypto Site
            <img
              className="projectImg"
              src={require("../../components/Projects/imgProjects/CryptoSite.png")}
            />
          </button>
        </div>
        <div className="singleProject">
          {" "}
          <button
            className="projectButton"
            onClick={() => navigate("/100DaysOfJavaScript")}
          >
            100 Days Of JavaScript
            <img
              className="projectImg"
              src={require("../../components/Projects/imgProjects/javascript.png")}
            />
          </button>
        </div>
        <div className="singleProject">
          {" "}
          <button
            className="projectButton"
            onClick={() => navigate("/Sk8Status")}
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
            onClick={() => navigate("/TicTacToe")}
          >
            Tic Tac Toe
            <img
              className="projectImg"
              src={require("../../components/Projects/imgProjects/tictactoe.png")}
            />
          </button>
        </div>
        <div className="singleProject">
          <button
            className="projectButton"
            onClick={() => navigate("/AshesToVanity")}
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
            onClick={() => navigate("/OldPortfolio")}
          >
            First Portfolio Website
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
            onClick={() => navigate("/CurrentPortfolio")}
          >
            Current Personal Portfolio
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
