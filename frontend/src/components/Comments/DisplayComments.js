import "../Posts/MyPost.css";
import AxiosPosts from "../../Routes/postRoutes";
import { useEffect, useState } from "react";

import React from "react";

const DisplayComments = ({

}) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, [postList]);

  

  async function getAllPosts() {
    let posts = await AxiosPosts.getAllPosts();
    if (posts) {
      setPostList(posts);
    }
  }

  return (
    <div className="allReviewsList">
      {postList
        .map((post, index) => {
          return (
            <div key={index} className="allReviewsBody">
            
                {" "}
                <div className="name-container-posts">{post.name}</div>
                <div className="name-container-posts">{post.time}</div>
                <br />
                <div className="postBody-container">{post.body}</div>
             
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default DisplayComments;
