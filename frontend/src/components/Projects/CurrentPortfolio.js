import { useNavigate } from "react-router-dom";

const OldPortfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="projectContainer">
      <button className="backButton" onClick={() => navigate("/projects")}>
        BACK
      </button>
      <h1>
        Current Portfolio Website{" "}
        <a target="_blank" href="https://github.com/jleviharris/Portfolio">
          <i className="fa-brands fa-github gitHubProjLink"></i>
        </a>
      </h1>
      <div className="projectIcons">
        <div className="singleTech">
          <i className="fa-brands fa-html5 icons"></i>HTML
        </div>
        <div className="singleTech">
          <i className="fa-brands fa-css3-alt icons"></i>CSS
        </div>{" "}
        <div className="singleTech">
          <i className="fa-brands fa-square-js icons"></i>JavaScript
        </div>
        <div className="singleTech">
          <i className="fa-brands fa-react icons"></i>React.js
        </div>
        <div className="singleTech">
          <i className="fa-brands fa-node icons"></i>Node.js
        </div>
        <div className="singleTech">
          <i className="fa-brands fa-github icons"></i> Github
        </div>
        <div className="singleTech">
          <iconify-icon icon="simple-icons:netlify"></iconify-icon>
          Netlify
        </div>
      </div>
      <p>
        Full redo of Personal portfolio site. Updated from a single page website
        to a React application.
      </p>
    </div>
  );
};

export default OldPortfolio;
