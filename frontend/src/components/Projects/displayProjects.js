import "../Posts/MyPost.css";

import React from "react";

const DisplayProjects = ({
  projectList,
  setHidden,
  setSingleProject,
  singleProject,
}) => {
  function handleClick() {
    setHidden(true);
  }

  return (
    <div className="postlist">
      {projectList
        .map((project, index) => {
          return (
            <div key={index} className="postbody">
              <button
                className="my-post-button"
                onClick={() => {
                  handleClick(project);
                  setSingleProject(project);
                }}
              >
                {" "}
                <div className="name-container">{project.name}</div>
                <br />
                <p className="post">Post:</p>
                <div className="body-container">{project.body}</div>
              </button>
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default DisplayProjects;
