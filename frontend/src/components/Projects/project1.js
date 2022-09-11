import { useNavigate } from "react-router-dom";
const Project1 = () => {
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
      <p>Technologies used: JavaScript, HTML, CSS, GitHub, Netlify</p>

      <p>
        Mobile and Desktop responsive website built for the band Ashes to
        Vanity. This was one of the first projects I started and Im still
        updating to this day.
      </p>

      {/* <img className="projectImg" src={require("./imgProjects/AshesToVanity.png")} /> */}
      <iframe
        src="https://ashestovanity.netlify.app/"
        title="description"
        className="websiteDisplay"
      ></iframe>
    </div>
  );
};

export default Project1;
