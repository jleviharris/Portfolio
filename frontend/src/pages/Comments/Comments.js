import React, { useContext, useEffect, useState } from "react";
import CreateComment from "../../components/Comments/CreateComment";
import DisplayComments from "../../components/Comments/DisplayComments";
import AxiosPosts from "../../Routes/postRoutes";
import ErrorBoundary from "../ErrorBoundary";


const Comments = () => {
  const [postList, setPostList] = useState([]);
  const [update, setUpdate] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [singlePost, setSinglePost] = useState();

  useEffect(() => {
    getAllPosts();
  }, [update]);

  function handleClick() {
    setUpdate(!update);
  }

  async function getAllPosts() {
    let posts = await AxiosPosts.getAllPosts();
    if (posts) {
      setPostList(posts);
    } else setPostList({ Object: "No Posts" });
  }

  return (

        <div>
          <CreateComment handleClick={handleClick} />
          <ErrorBoundary>
            <DisplayComments
             
            />
          </ErrorBoundary>
        </div>
   
  );
};

export default Comments;
