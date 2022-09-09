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
        {" "}
        <br /> United States Marine Corps <i class="fa-solid fa-arrow-down"></i>{" "}
        Planet Fitness General Manager <i class="fa-solid fa-arrow-down"></i>{" "}
        Software Developer
        <br />
        <br /> Driven, hard-working, problem solver with a high attention to
        detail.
        <br />
        <br /> Currently working with the MERN stack. Proficient with HTML, CSS,
        JavaScript, MongoDB, Express, React, Node.js, Postman, Git, and Github.
        Open to learning new Technologies.
      </div>
    </div>
  );
};

export default AboutMe;
