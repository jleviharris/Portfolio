import { useNavigate } from "react-router-dom";
const Project4 = () => {
  const navigate = useNavigate();
  return (
    <div className="projectContainer">
      <button className="backButton" onClick={() => navigate("/projects")}>
        BACK
      </button>
      <h1>Current Portfolio Website</h1>
      <img
        className="projectImg"
        src={require("./imgProjects/CurrentPortfolio.png")}
      />
    </div>
  );
};

export default Project4;
