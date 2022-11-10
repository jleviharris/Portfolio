import React, { useState } from "react";

const CodeCademyCerts = () => {
  const [arrow, setArrow] = useState("arrow_downward");
  const [hidden, setHidden] = useState(false);

  function handleClick() {
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }

  function handleArrow() {
    if (arrow === "arrow_upward") {
      setArrow("arrow_downward");
    } else if (arrow === "arrow_downward") {
      setArrow("arrow_upward");
    }
  }

  return (
    <div className="certificatesPageInside">
      <h1 >
        <button
          onClick={() => {
            handleClick();
            handleArrow();
          }}
        >
          {" "}
          <span className="material-symbols-outlined">{arrow}</span>
        </button>
        Codecademy (23)
      </h1>

      {hidden && (
        <div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/Python3.png")} />
            <div className="certTitles">
              <p>Learn Python 3 Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/BlockChain.png")} />
            <div className="certTitles">
              <p>Learn the Basics of Blockchain with Python</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/SqlCourse.png")} />
            <div className="certTitles">
              <p>Learn SQL Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img
              src={require("../Certificates/Imgs/learnNodeSQLiteCourse.png")}
            />
            <div className="certTitles">
              <p>Learn Node-SQLite Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/cybersecurity.png")} />
            <div className="certTitles">
              <p>Introduction to Cybersecurity Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img
              src={require("../Certificates/Imgs/cybersecurityForBuisnessCourse.png")}
            />
            <div className="certTitles">
              <p>Cybersecurity for Buisness Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/javascript.png")} />
            <div className="certTitles">
              {" "}
              <p>Learn Asynchronous JavaScript Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/javascriptErrors.png")} />
            <div className="certTitles">
              <p>How To Debug JavaScript Errors Course</p>
            </div>
          </div>

          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/html.png")} />
            <div className="certTitles">
              <p>Learn HTML Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/websiteBuild.png")} />
            <div className="certTitles">
              <p>Build A Website With HTML, CSS, and Github Pages Skill Path</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img
              src={require("../Certificates/Imgs/deployingWebsitesUsingGitAndGithubCourse.png")}
            />
            <div className="certTitles">
              <p>Deploying Websites using Git and GitHub Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/bootstrap.png")} />
            <div className="certTitles">
              {" "}
              <p>Learn Bootstrap Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/css.png")} />
            <div className="certTitles">
              {" "}
              <p>Learn CSS Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img
              src={require("../Certificates/Imgs/cssResponsiveDesignCourse.png")}
            />
            <div className="certTitles">
              <p>Learn CSS: Responsive Design Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img
              src={require("../Certificates/Imgs/cssTransitionsAndAnimationsCourse.png")}
            />
            <div className="certTitles">
              <p>Learn CSS: Transitions and Animations Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img
              src={require("../Certificates/Imgs/cssBoxModelAndLayoutCourse.png")}
            />
            <div className="certTitles">
              <p>Learn CSS: Box Model and Layout Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img
              src={require("../Certificates/Imgs/cssFlexboxAndGridCourse.png")}
            />
            <div className="certTitles">
              <p>Learn CSS: Flexbox and Grid Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img
              src={require("../Certificates/Imgs/cssIntroductionCourse.png")}
            />
            <div className="certTitles">
              <p>Learn CSS: Introduction Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/navigationDesign.png")} />
            <div className="certTitles">
              <p>Learn Navigation Design Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/responsiveDesign.png")} />
            <div className="certTitles">
              {" "}
              <p>Learn Responsive Design Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/codeFoundations.png")} />
            <div className="certTitles">
              <p>Code Foundations Skill Path</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/colorDesign.png")} />
            <div className="certTitles">
              <p>Learn Color Design Course</p>
            </div>
          </div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/learnHowToCode.png")} />
            <div className="certTitles">
              {" "}
              <p>Learn How To Code Course</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeCademyCerts;
