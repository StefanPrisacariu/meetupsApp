import { useEffect, useContext } from "react";
import { useState } from "react/cjs/react.development";
import PostsContext from "../../store/PostsContext";
import MainPost from "../main-post/MainPost";
import PostNotification from "../post-notification/PostNotification";
import "./Main.css";

function Main() {
  const postsContext = useContext(PostsContext);
  useEffect(() => {
    setCount(postsContext.posts.length);
  }, [postsContext]);

  const [count, setCount] = useState(0);
  const [hideDelete, setHideDelete] = useState(true);
  const [hideEdit, setHideEdit] = useState(true);

  if (hideEdit === false || hideDelete === false) {
    setTimeout(() => setHideDelete(true), 3000);
    setTimeout(() => setHideEdit(true), 3000);
  }

  return (
    <>
      <div className="main-content">
        {postsContext.posts.length === 0 && (
          <p>You got no posts yet. Start adding some.</p>
        )}
        {postsContext.posts.length > 0 && (
          <MainPost posts={postsContext.posts} />
        )}
      </div>
      <div className="counter">There are {count} posts added</div>
      {!hideDelete && <PostNotification msg="Post Deleted" />}
      {!hideEdit && <PostNotification msg="Post Edited" />}
    </>
  );
}

export default Main;
