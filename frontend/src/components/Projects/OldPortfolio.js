import { useNavigate } from "react-router-dom";

const OldPortfolio = () => {
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
      <iframe
        src="https://jleviharris.github.io/devCodeCampPortfolio/"
        title="description"
        className="websiteDisplay"
      ></iframe>
      <a
        className="websiteLinks"
        target="_blank"
        href="https://jleviharris.github.io/devCodeCampPortfolio/"
      >
        Visit site here
      </a>
    </div>
  );
};

export default OldPortfolio;
