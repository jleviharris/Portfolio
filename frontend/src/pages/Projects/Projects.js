import React, { useState, useEffect } from "react";
import ErrorBoundary from "../ErrorBoundary";
import AxiosProjects from "../../Routes/projectsRoutes";
import DisplayProjects from "../../components/Projects/displayProjects";
import DisplaySingleProject from "../../components/Projects/displaySingleProject";
import Project1 from "../../components/Projects/project1";

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
      <Project1 />
    </div>
  );
};

export default Projects;
