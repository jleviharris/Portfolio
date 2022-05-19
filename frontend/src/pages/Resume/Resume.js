import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resumePics">
        {" "}
        <img src={require("../Resume/Resume1.png")} />
        <img src={require("../Resume/Resume2.png")} />
      </div>
    </div>
  );
};

export default Resume;
