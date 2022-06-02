import "../Posts/MyPost.css";

import React, { useState } from "react";

import AxiosPosts from "../../Routes/postRoutes";

const CreateComment = ({ handleClick }) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}
   at ${padTo2Digits(current.getHours())}:${padTo2Digits(
    current.getMinutes()
  )}`;

  function padTo2Digits(num) {
    return String(num).padStart(2, "0");
  }

  function handlePost(event) {
    event.preventDefault();

    let newPost = {
      body: value,
      name: name,
      time: date,
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
     
      <label class="form-text">Name:</label>
      <br />
      <input type="text" name="name" placeholder="Name" required />
      <label class="form-text">Message:</label>
      <br />
      <input type="text" name="message" placeholder="Write your message here" />
      <button id="submit" class="submit" type="submit">
        Post
      </button>

      {/* <textarea
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
         
        />
        <textarea
          type="text"
          placeholder="Write a review"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              handlePost(event);
            }
          }}
        /> */}
    </form>
  );
};
export default CreateComment;
