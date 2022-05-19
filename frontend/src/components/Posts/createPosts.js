import "../Posts/MyPost.css";

import React, { useState } from "react";

import AxiosPosts from "../../Routes/postRoutes";

const CreatePost = ({ handleClick }) => {
  const [value, setValue] = useState("");

  function handlePost(event) {
    event.preventDefault();

    let newPost = {
      body: value,
      name: value,
    };
    createNewPost(newPost);
    setValue("");
    let click = () => {
      handleClick();
    };
    click();
  }
  async function createNewPost(obj) {
    await AxiosPosts.updatePosts(obj);
    return obj;
  }

  return (
    <form className="postContainer" onSubmit={handlePost}>
      <div>
        <textarea
          type="text"
          placeholder="Enter Post Here"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              handlePost(event);
            }
          }}
        />
        <button type="submit" className="postButton">
          Post
        </button>
      </div>
    </form>
  );
};
export default CreatePost;
