import "../Posts/MyPost.css";

import React from "react";

const DisplayPosts = ({ postList, setHidden, setSinglePost }) => {
  function handleClick() {
    setHidden(true);
  }

  return (
    <div className="postlist">
      {postList
        .map((post, index) => {
          return (
            <div key={index} className="postbody">
              <button
                className="my-post-button"
                onClick={() => {
                  handleClick(post);
                  setSinglePost(post);
                }}
              >
                {" "}
                <div className="name-container">{post.name}</div>
                <br />
                <p className="post">Post:</p>
                <div className="body-container">{post.body}</div>
              </button>
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default DisplayPosts;
