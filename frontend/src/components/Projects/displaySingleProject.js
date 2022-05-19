import "../Posts/MyPost.css";
import React from "react";


const DisplaySingleProject = ({ singleProject, setHidden, handleClick }) => {
 
  return (
    <div className="delete-post">
      {singleProject && singleProject.name} <br />
      {singleProject.body}
    </div>
  );
};

export default DisplaySingleProject;
