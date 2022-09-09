const AboutMe = () => {
  return (
    <div className="about-me-section" id="About">
      <div className="about-me-header">
        <img
          id="Headshot"
          className="about-me-img"
          alt="Headshot portfolio image"
          src={require("../AboutMe/20190119_142756.jpg")}
        />
      </div>
      <p className="about-me-text">
        {" "}
        Software Developer located in Delaware.
        <br />
        <br /> United States Marine Corps Sergeant{" "}
        <i class="fa-solid fa-arrow-right"></i> Planet Fitness General Manager{" "}
        <i class="fa-solid fa-arrow-right"></i> Software Developer
        <br />
        <br /> Driven, hard-working, problem solver with a high attention to
        detail.
        <br />
        <br /> Currently working with the MERN stack. Proficient with HTML, CSS,
        JavaScript, MongoDB, Express, React, Node.js, Postman, Git, and Github.
        Open to learning new Technologies.
      </p>
    </div>
  );
};

export default AboutMe;
