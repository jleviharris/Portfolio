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
        I am a Software Developer currently living in the small state of
        Delaware with my girlfriend and our two cats. After 28 years working a
        handfull of jobs ranging from managing a Planet Fitness to Combat
        Engingeer in the Marine Corps, I stumbled upon my true passion of
        Software Development. Driven, hard-working, problem solver with a high
        attention to detail. Fan of anime, motorcycles, video games, and almost
        any outdoor activity. Currently working with the MERN stack. Proficient
        with HTML, CSS, JavaScript, MongoDB, Express, React, Node.js, Postman,
        Git, and Github. Interested in expanding my knowledge and progressing my
        career as a software engineer.
      </p>
    </div>
  );
};

export default AboutMe;
