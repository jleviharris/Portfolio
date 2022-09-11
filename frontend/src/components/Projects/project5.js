import { useNavigate } from "react-router-dom";
const Project5 = () => {
  const navigate = useNavigate();
  return (
    <div className="projectContainer">
      <button className="backButton" onClick={() => navigate("/projects")}>
        BACK
      </button>
      <h1>
        Conway's Game of Life{" "}
        <a target="_blank" href="https://github.com/jleviharris/lifeReactGame">
          <i className="fa-brands fa-github gitHubProjLink"></i>
        </a>
      </h1>
      <p>
        Mobile and Desktop responsive React application of Conway's{" "}
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
        >
          Game of Life
        </a>
        .
      </p>
      <p>Technologies used: React.js, Node.js, JavaScript, HTML, CSS</p>
      <p>
        * Project deployed using Heroku, may take up to 30 seconds for the dyno
        to wake back up if loading for the first time{" "}
      </p>
      <iframe
        src="https://devjleviharrisgameoflife.herokuapp.com/"
        title="description"
        className="websiteDisplay"
      ></iframe>
    </div>
  );
};

export default Project5;
