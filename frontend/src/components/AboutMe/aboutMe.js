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
        <h2 className="about-me-title">About Me</h2>
      </div>
      <p className="about-me-text">
        {" "}
        I am a Software Developer currently living in the small state of
        Delaware with my girlfriend and our two cats. Driven, hard-working, problem solver with a high
        attention to detail. Fan of anime, motorcycles, video games, and almost
        any outdoor activity.
      </p>
    </div>
  );
};

export default AboutMe;
