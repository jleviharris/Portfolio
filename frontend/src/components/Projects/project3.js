import { useNavigate } from "react-router-dom";
const Project3 = () => {
  const navigate = useNavigate();

  return (
    <div className="projectContainer">
      <button className="backButton" onClick={() => navigate("/projects")}>
        BACK
      </button>
      <h1>
        Portfolio Website{" "}
        <a
          target="_blank"
          href="https://github.com/jleviharris/devCodeCampPortfolio"
        >
          <i className="fa-brands fa-github gitHubProjLink"></i>
        </a>
      </h1>
      <p>Technologies used: HTML, CSS, JavaScript, GitHub, GitHub Pages</p>
      <p>Mobile and desktop responsive portfolio website</p>

      {/* <img className="projectImg" src={require("./imgProjects/OriginalPortfolio.png")} /> */}
      <iframe
        src="https://jleviharris.github.io/devCodeCampPortfolio/"
        title="description"
        className="websiteDisplay"
      ></iframe>
    </div>
  );
};

export default Project3;
