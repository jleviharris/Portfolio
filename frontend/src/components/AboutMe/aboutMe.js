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
       With over four years of experience in the fitness industry, four years as a Combat Engineer in the Marine Corps and a recent career transition into software development, I am a versatile and adaptable professional who can thrive in different environments and challenges. I have a passion for creating user-friendly and responsive web applications that solve real-world problems and enhance customer satisfaction. I graduated from devCodeCamp, a rigorous and immersive coding bootcamp, where I learned and applied various technologies.

<br/><br/>Currently, I am a software developer at Horizon Systems & Services, a leading provider of IT solutions and services for various clients in the Property and Casualty Insurance Industry. In this role, I work with a team of talented and experienced developers to design, develop, test, and deploy applications that meet the specifications and requirements of our customers.{" "}
        </div>
        <div className="allIcons">
          <div className="iconsRow">
            <div className="singleTech">
              <iconify-icon icon="skill-icons:html"></iconify-icon>HTML
            </div>
            <div className="singleTech">
              <iconify-icon icon="skill-icons:css"></iconify-icon>CSS
            </div>{" "}
            <div className="singleTech">
              <iconify-icon icon="skill-icons:javascript"></iconify-icon>JavaScript
            </div>
          </div>
          <div className="iconsRow">
            <div className="singleTech">
         <iconify-icon icon="skill-icons:mongodb"></iconify-icon>
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
               <div className="singleTech">
            <iconify-icon icon="fluent:code-vb-16-filled"></iconify-icon>
              Visual Basic
            </div>
                <div className="singleTech">
            <iconify-icon icon="skill-icons:angular-dark"></iconify-icon>
              Angular
            </div>
                 <div className="singleTech">
            <iconify-icon icon="skill-icons:cs"></iconify-icon>
              C#
            </div>
                    <div className="singleTech">
            <iconify-icon icon="skill-icons:typescript"></iconify-icon>
              TypeScript
            </div>
                      <div className="singleTech">
              <iconify-icon icon="skill-icons:dotnet"></iconify-icon>
              .NET
            </div>
                       <div className="singleTech">
               <iconify-icon icon="devicon:azuredevops"></iconify-icon>
              Azure DevOps
            </div>

                          <div className="singleTech">
                    <iconify-icon icon="devicon:microsoftsqlserver"></iconify-icon>
              Microsoft SQL Server
            </div>
    
          </div>
          <div className="iconsRow">
            <div className="singleTech">
              <iconify-icon icon="skill-icons:react-dark"></iconify-icon>React.js
            </div>
            <div className="singleTech">
              <iconify-icon icon="skill-icons:nodejs-dark"></iconify-icon>Node.js
            </div>
            <div className="singleTech">
              <iconify-icon icon="skill-icons:git"></iconify-icon> Git
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
