import { useNavigate } from "react-router-dom";
const GameOfLife = () => {
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
        Technologies used: React.js, Node.js, JavaScript, HTML, CSS, GitHub,
        Netlify
      </p>
      <p>
        Mobile and Desktop responsive React application of{" "}
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
        >
          Conway's Game of Life
        </a>
        .
      </p>

      <iframe
        src="https://devjonharrisgameoflife.netlify.app/"
        title="description"
        className="websiteDisplay"
      ></iframe>
      <a
        className="websiteLinks"
        target="_blank"
        href="https://devjonharrisgameoflife.netlify.app/"
      >
        Visit site here
      </a>
    </div>
  );
};

export default GameOfLife;
