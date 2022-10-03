import { useNavigate } from "react-router-dom";

const Sk8Status = () => {
  const navigate = useNavigate();

  return (
    <div className="projectContainer">
      <button className="backButton" onClick={() => navigate("/projects")}>
        BACK
      </button>
      <h1>
        Sk8 Status{" "}
        <a target="_blank" href="https://github.com/jleviharris/Capstone">
          <i className="fa-brands fa-github gitHubProjLink"></i>
        </a>
      </h1>
      <div className="sk8Icons">
        <div className="sk8SingleTech">
          <i className="fa-brands fa-html5 icons"></i>HTML
        </div>
        <div className="sk8SingleTech">
          <i className="fa-brands fa-css3-alt icons"></i>CSS
        </div>{" "}
        <div className="sk8SingleTech">
          <i className="fa-brands fa-square-js icons"></i>JavaScript
        </div>
        <div className="sk8SingleTech">
          <iconify-icon
            icon="simple-icons:mongodb"
            class="icons"
          ></iconify-icon>
          MongoDB
        </div>
        <div className="sk8SingleTech">
          <iconify-icon
            icon="simple-icons:express"
            class="icons"
          ></iconify-icon>
          Express.js
        </div>
        <div className="sk8SingleTech">
          <i className="fa-brands fa-react icons"></i>React.js
        </div>
        <div className="sk8SingleTech">
          <i className="fa-brands fa-node icons"></i>Node.js
        </div>
        <div className="sk8SingleTech">
          <iconify-icon icon="cib:postman"></iconify-icon>Postman
        </div>
        <div className="sk8SingleTech">
          <iconify-icon icon="simple-icons:axios"></iconify-icon>Axios
        </div>
        <div className="sk8SingleTech">
          <iconify-icon icon="cib:json"></iconify-icon>JSON Web Token{" "}
        </div>
        <div className="sk8SingleTech">
          <iconify-icon icon="mdi:google-maps"></iconify-icon>Google Maps Api
        </div>
        <div className="sk8SingleTech">
          <iconify-icon icon="akar-icons:bootstrap-fill"></iconify-icon>
          Bootstrap
        </div>
        <div className="sk8SingleTech">
          <i className="fa-brands fa-github icons"></i> Github
        </div>
      </div>
      <p>
        Sk8 Status is a full stack web application that I developed during a 14
        day sprint for my capstone project while at devCodeCamp. The application
        was designed for skateboarders to connect with one another.
      </p>
      <p>Application features include:</p>
      <ul>
        <li>
          -User account registration, login, and logout (Authentication & JWT)
        </li>
        <li>-Edit user profile including Name, About Me, and Stance</li>
        <li>
          -Individual skatepark pages, displaying skatepark info and reviews
          section allowing to write and view reviews
        </li>
        <li>
          -Integrated react-google-maps/api to display maps of skatepark
          location
        </li>
        <li>
          -Friends page allowing to accept/deny/send/cancel friend requests
        </li>
        <li>
          -Set a “Skate Status” so friends can see which skatepark your skating
          at and for how long
        </li>
      </ul>
      <div className="videoDiv" id="videoDiv">
        <video className="video" controls="controls">
          <source
            src={require("../../components/Projects/Videos/CapstoneVideo.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Sk8Status;
