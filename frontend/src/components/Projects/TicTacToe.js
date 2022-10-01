import { useNavigate } from "react-router-dom";
const TicTacToe = () => {
  const navigate = useNavigate();
  return (
    <div className="projectContainer">
      <button className="backButton" onClick={() => navigate("/projects")}>
        BACK
      </button>
      <h1>
        Tic Tac Toe{" "}
        <a target="_blank" href="https://github.com/jleviharris/tictactoe.git">
          <i className="fa-brands fa-github gitHubProjLink"></i>
        </a>
      </h1>
      <p>
        Technologies used: React.js, Node.js, JavaScript, HTML, CSS, GitHub,
        Netlify
      </p>
      <p>
        Mobile and desktop responsice React.js application of the game Tic Tak
        Toe hosted on Netlify
      </p>
      <iframe
        src="https://devjonharristictactoe.netlify.app/"
        title="description"
        className="websiteDisplay"
      ></iframe>

      <a
        className="websiteLinks"
        target="_blank"
        href="https://devjonharristictactoe.netlify.app/"
      >
        Visit site here
      </a>
    </div>
  );
};

export default TicTacToe;
