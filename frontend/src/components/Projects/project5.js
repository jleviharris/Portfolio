import { useNavigate } from "react-router-dom";
const Project5 = () => {
  const navigate = useNavigate();
  return (
    <div className="projectContainer">
      <button className="backButton" onClick={() => navigate("/projects")}>
        BACK
      </button>
      <h1>Conway's Game of Life</h1>
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
        * Project deployed using Heroku, if loading for the first time please
        allow a few seconds for the dyno to wake back up{" "}
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
