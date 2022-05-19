import "../Posts/MyPost.css";

import AxiosPosts from "../../Routes/postRoutes";
import React from "react";

const DisplaySinglePost = ({ singlePost, setHidden, handleClick, userId }) => {
  async function deleteAPost(postId) {
    await AxiosPosts.deletePost(postId);
    setHidden(false);
    let click = () => {
      handleClick();
    };
    click();
    return postId;
  }

  return (
    <div className="delete-post">
      {singlePost && singlePost.name} <br />
      {singlePost.body}
      {console.log(singlePost.name)}
      <button
        className="my-post-button"
        onClick={() => {
          if (singlePost.userId === userId) {
            deleteAPost(singlePost._id);
          } else alert("Not authorized to delete post");
        }}
      >
        Delete Post
      </button>
    </div>
  );
};

export default DisplaySinglePost;
