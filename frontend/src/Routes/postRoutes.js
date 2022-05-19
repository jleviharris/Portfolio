import axios from "axios";

async function getAllPosts() {
  try {
    let response = await axios.get("http://localhost:3007/api/posts/");
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log("Error getting posts: " + error);
  }
}

async function getAPost(postId) {
  try {
    let response = await axios.get("http://localhost:3007/api/posts/" + postId);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log("Error getting posts: " + error);
  }
}

async function updatePosts(obj) {
  try {
    let response = await axios.post("http://localhost:3007/api/posts/", obj);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log("Error adding post: " + error);
  }
}

async function updateAPost(postId, obj) {
  try {
    let response = await axios.put(
      "http://localhost:3007/api/posts/" + postId,
      obj
    );
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log("Error adding post: " + error);
  }
}

async function deletePost(postId) {
  try {
    let response = await axios.delete(
      "http://localhost:3007/api/posts/" + postId
    );
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log("Error deleting post: " + error);
  }
}

const AxiosPosts = {
  getAllPosts,
  deletePost,
  updatePosts,
  getAPost,
  updateAPost,
};
export default AxiosPosts;
