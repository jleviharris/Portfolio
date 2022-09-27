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
      <p>
        Technologies used: React.js, Node.js, JavaScript, HTML, CSS, GitHub,
        Netlify
      </p>
      <p>
        Mobile and Desktop responsive React application connecting to Coin Geiko api to display cyrpto coins
      </p>

      <iframe
        src="https://devjonharriscryptosite.netlify.app/"
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

export default CryptoSite;