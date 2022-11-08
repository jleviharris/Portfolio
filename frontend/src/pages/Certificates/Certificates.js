import React from "react";
import { useNavigate } from "react-router-dom";

const Certificates = () => {
  const navigate = useNavigate();
  return (
    <div className="certificatesPage">
      {" "}
      <button className="backButton" onClick={() => navigate("/")}>
        BACK
      </button>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/devCodeCamp.png")} />
        <div className="certTitles">
          <h1>devCodeCamp</h1>
          <p>Full Stack Web Development </p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/Python3.png")} />
        <div className="certTitles">
          <h1>Codecademy</h1>
          <p>Python 3</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/BlockChain.png")} />
        <div className="certTitles">
          <h1>Codecademy</h1>
          <p>Learn the Basics of Blockchain with Python</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/codingInterview.jpeg")} />
        <div className="certTitles">
          <h1>Udemy</h1>
          <p>Mastering the Coding Interview: Data Structures and Algorithms</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/cybersecurity.png")} />
        <div className="certTitles">
          <h1>Codecademy</h1>
          <p>Introduction to Cybersecurity Course</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/freeCodeCamp.png")} />
        <div className="certTitles">
          {" "}
          <h1>freeCodeCamp</h1>
          <p>Responsive Web Design</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/bootstrap.png")} />
        <div className="certTitles">
          {" "}
          <h1>Codecademy</h1>
          <p>Learn Bootstrap Course</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/codeFoundations.png")} />
        <div className="certTitles">
          <h1>Codecademy</h1>
          <p>Code Foundations Skill Path</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/colorDesign.png")} />
        <div className="certTitles">
          <h1>Codecademy</h1>
          <p>Learn Color Design Course</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/css.png")} />
        <div className="certTitles">
          {" "}
          <h1>Codecademy</h1>
          <p>Learn CSS Course</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/html.png")} />
        <div className="certTitles">
          <h1>Codecademy</h1>
          <p>Learn HTML Course</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/javascript.png")} />
        <div className="certTitles">
          {" "}
          <h1>Codecademy</h1>
          <p>Learn Asynchronous JavaScript Course</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/javascriptErrors.png")} />
        <div className="certTitles">
          <h1>Codecademy</h1>
          <p>How To Debug JavaScript Errors Course</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/learnHowToCode.png")} />
        <div className="certTitles">
          {" "}
          <h1>Codecademy</h1>
          <p>Learn How To Code Course</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/navigationDesign.png")} />
        <div className="certTitles">
          <h1>Codecademy</h1>
          <p>Learn Navigation Design Course</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/responsiveDesign.png")} />
        <div className="certTitles">
          {" "}
          <h1>Codecademy</h1>
          <p>Learn Responsive Design Course</p>
        </div>
      </div>
      <div className="certContainer">
        {" "}
        <img src={require("../Certificates/Imgs/websiteBuild.png")} />
        <div className="certTitles">
          <h1>Codecademy</h1>
          <p>Build A Website With HTML, CSS, and Github Pages Skill Path</p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
