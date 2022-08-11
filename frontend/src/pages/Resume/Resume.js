import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resumePics">
        {" "}
        {/* <img src={require("../Resume/Resume1.png")} />
        <img src={require("../Resume/Resume2.png")} /> */}
        <iframe
        className="resumePreview"
          frameborder="0"
          scrolling="no"
          src={require("../Resume/resume.pdf")}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
