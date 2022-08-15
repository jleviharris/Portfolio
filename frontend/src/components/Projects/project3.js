import { useNavigate } from "react-router-dom";
const Project3 = () => {
  const navigate = useNavigate();

  return (
    <div className="projectContainer">
      <button className="backButton" onClick={() => navigate("/projects")}>
        BACK
      </button>
      <h1>Portfolio Website</h1>
      <p>
        Mobile and desktop responsive portfolio website built using HTML, CSS,
        JavaScript and Github pages
      </p>
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
