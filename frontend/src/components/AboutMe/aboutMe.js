import { useNavigate } from "react-router-dom";
const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="about-me-section" id="About">
      <button className="backButton" onClick={() => navigate("/")}>
        BACK
      </button>
      <div className="about-me-header">
        <img
          id="Headshot"
          className="about-me-img"
          alt="Headshot portfolio image"
          src={require("../AboutMe/20190119_142756.jpg")}
        />
      </div>
      <div className="about-me-text">
        <div className="about-me-history">
          United States Marine Corps
          <i className="fa-solid fa-arrow-down"></i>
          Planet Fitness General Manager
          <i className="fa-solid fa-arrow-down"></i>
          Software Developer
        </div>
        <div></div>
        <div className="allIcons">
          <div className="iconsRow">
            <div className="singleTech">
              <i className="fa-brands fa-html5 icons"></i>HTML
            </div>
            <div className="singleTech">
              <i className="fa-brands fa-css3-alt icons"></i>CSS
            </div>{" "}
            <div className="singleTech">
              <i className="fa-brands fa-square-js icons"></i>JavaScript
            </div>
          </div>
          <div className="iconsRow">
            <div className="singleTech">
              <iconify-icon
                icon="simple-icons:mongodb"
                class="icons"
              ></iconify-icon>
              MongoDB
            </div>
            <div className="middleTech">
              Open to learning
              <br /> new Technologies
            </div>
            <div className="singleTech">
              <iconify-icon
                icon="simple-icons:express"
                class="icons"
              ></iconify-icon>
              Express.js
            </div>
          </div>
          <div className="iconsRow">
            <div className="singleTech">
              <i className="fa-brands fa-react icons"></i>React.js
            </div>
            <div className="singleTech">
              <i className="fa-brands fa-node icons"></i>Node.js
            </div>
            <div className="singleTech">
              <i className="fa-brands fa-github icons"></i> Github
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutMe;
