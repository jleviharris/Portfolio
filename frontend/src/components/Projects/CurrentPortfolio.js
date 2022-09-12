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

      <p>
        Technologies used: HTML, CSS, JavaScript, React.js, Node.js, GitHub,
        Netlify
      </p>
      <p>
        Full redo of Personal portfolio site. Updated from a single page website
        to a React application.
      </p>
    </div>
  );
};

export default OldPortfolio;
