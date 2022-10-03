import { useNavigate } from "react-router-dom";
const CryptoSite = () => {
  const navigate = useNavigate();
  return (
    <div className="projectContainer">
      <button className="backButton" onClick={() => navigate("/projects")}>
        BACK
      </button>
      <h1>
        Crypto Website{" "}
        <a target="_blank" href="https://github.com/jleviharris/cryptoSite.git">
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
        Mobile and Desktop responsive React application connecting to Coin Geiko
        api to display cyrpto coins
      </p>

      <iframe
        src="https://devjonharriscryptosite.netlify.app/"
        title="description"
        className="websiteDisplay"
      ></iframe>
      <a
        className="websiteLinks"
        target="_blank"
        href="https://devjonharriscryptosite.netlify.app/"
      >
        Visit site here
      </a>
    </div>
  );
};

export default CryptoSite;
