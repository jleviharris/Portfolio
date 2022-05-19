import React, { useState, useEffect } from "react";
import ErrorBoundary from "../ErrorBoundary";
import AxiosProjects from "../../Routes/projectsRoutes";
import DisplayProjects from "../../components/Projects/displayProjects";
import DisplaySingleProject from "../../components/Projects/displaySingleProject";

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [update, setUpdate] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [singleProject, setSingleProject] = useState();

  useEffect(() => {
    getAllProjects();
  }, [update]);

  function handleClick() {
    setUpdate(!update);
  }

  async function getAllProjects() {
    let projects = await AxiosProjects.getAllProjects();
    if (projects) {
      setProjectList(projects);
    } else setProjectList({ Object: "No Projects" });
  }

  return (
    <div>
      {hidden === false && (
        <div>
          <ErrorBoundary>
            <DisplayProjects
              projectList={projectList}
              setHidden={setHidden}
              setSingleProject={setSingleProject}
            />
          </ErrorBoundary>
        </div>
      )}
      {hidden && (
        <DisplaySingleProject
          singleProject={singleProject}
          setHidden={setHidden}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default Projects;
