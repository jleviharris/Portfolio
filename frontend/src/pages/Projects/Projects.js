import React, { useState, useEffect } from "react";
import ErrorBoundary from "../ErrorBoundary";
import AxiosProjects from "../../Routes/projectsRoutes";
import DisplayProjects from "../../components/Projects/displayProjects";
import DisplaySingleProject from "../../components/Projects/displaySingleProject";
import Project1 from "../../components/Projects/project1";
import Project2 from "../../components/Projects/project2";
import Project3 from "../../components/Projects/project3";
import Project4 from "../../components/Projects/project4";


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
    <div className="projectsMainCard">
        <Project1 />
   
        <Project2 />
     
        <Project3 />
  
        <Project4 />
     
    </div>
  );
};

export default Projects;
