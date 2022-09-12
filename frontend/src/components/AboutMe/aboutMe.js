import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
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
        <div className="about-me-para">
          I'm Jonathan, a full stack web developer working in the MERN stack. My
          experiance ranges from Combat Engineer in the Marine Corps to GM of a
          franchise Planet Fitness and now to Software Developer. My coding
          journey began in late 2021 with the discovery of freeCodeCamp and
          codecademy. By Feb 2022 I was enrolled with the coding bootcamp
          devCodeCamp and I had graduted by the end of May. Now I am searching
          for a position where I can further grow and learn as a developer.{" "}
        </div>
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
      <Footer />
    </div>
  );
};

export default AboutMe;
