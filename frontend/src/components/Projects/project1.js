const Project1 = () => {
  return (
    <div className="projectContainer">
      <h1>Ashes To Vanity website</h1>
      <p>
        Mobile and Desktop responsive website built for the band Ashes to
        Vanity. This was one of the first projects I started and Im still
        updating to this day. I built this website from scratch using HTML, CSS,
        and JavaScript. The site is currently hosted by Netlify.
      </p>
      <p>Technologies used: JavaScript, HTML, CSS</p>
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
