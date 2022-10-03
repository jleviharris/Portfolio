import { useNavigate } from "react-router-dom";
const AshesToVanity = () => {
  const navigate = useNavigate();
  return (
    <div className="projectContainer">
      <button className="backButton" onClick={() => navigate("/projects")}>
        BACK
      </button>
      <h1>
        Ashes To Vanity website{" "}
        <a
          target="_blank"
          href="https://github.com/jleviharris/AshesToVanityBandPage"
        >
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
          <i className="fa-brands fa-github icons"></i> Github
        </div>
        <div className="singleTech">
          <iconify-icon icon="simple-icons:netlify"></iconify-icon>
          Netlify
        </div>
      </div>
      <p>
        Mobile and Desktop responsive website built for the band Ashes to
        Vanity. This was one of the first projects I started and Im still
        updating to this day.
      </p>
      <iframe
        src="https://ashestovanity.netlify.app/"
        title="description"
        className="websiteDisplay"
      ></iframe>

      <a
        className="websiteLinks"
        target="_blank"
        href="https://ashestovanity.netlify.app/"
      >
        Visit site here
      </a>
    </div>
  );
};

export default AshesToVanity;
