import axios from "axios";

async function getAllProjects() {
  try {
    let response = await axios.get("http://localhost:3007/api/project/");
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log("Error getting projects: " + error);
  }
}

async function getAProject(projectId) {
  try {
    let response = await axios.get(
      "http://localhost:3007/api/project/" + projectId
    );
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log("Error getting project: " + error);
  }
}

async function updateImage(projectId, formData) {
  console.log(`http://localhost:3007/api/project/updateImage/${projectId}`);
  try {
    let response = await axios.put(
      `http://localhost:3007/api/project/updateImage/${projectId}`,
      formData
    );
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log("Error updating user: " + error);
  }
}

const AxiosProjects = {
  getAllProjects,
  getAProject,
  updateImage,
};
export default AxiosProjects;
