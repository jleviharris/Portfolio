import React from "react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();
  return (
    <div className="resume">
      <div className="resumePics">
        {" "}
        {/* <img src={require("../Resume/Resume1.png")} />
        <img src={require("../Resume/Resume2.png")} /> */}
        <button className="backButton" onClick={() => navigate("/")}>
          BACK
        </button>
        <iframe
          className="resumePreview"
          frameborder="0"
          scrolling="no"
          src={require("../Resume/resume.pdf")}
        ></iframe>
        <a
          className="mobileResume"
          href={require("../Resume/resume.pdf")}
          download="Jon-Harris-resume.pdf"
        >
          Click here to download
        </a>
        <img className="resumePictures" src={require("../Resume/resumePic1.jpg")} />
        <img className="resumePictures" src={require("../Resume/resumePic2.jpg")} />
      </div>
    </div>
  );
};

export default Resume;
