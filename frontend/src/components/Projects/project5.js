import { useNavigate } from "react-router-dom";
const Project5 = () => {
  const navigate = useNavigate();
  return (
    <div className="projectContainer">
      <button className="backButton" onClick={() => navigate("/projects")}>
        BACK
      </button>
      <h1>Current Portfolio Website</h1>
      <iframe
        src="https://devjleviharrisgameoflife.herokuapp.com/"
        title="description"
        className="websiteDisplay"
      ></iframe>
    </div>
  );
};

export default Project5;
