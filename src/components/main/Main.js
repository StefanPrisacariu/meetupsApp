import { useEffect, useContext } from "react";
import PostsContext from "../../store/PostsContext";
import MainPost from "../main-post/MainPost";

import "./Main.css";

function Main() {
  const postsContext = useContext(PostsContext);
  useEffect(() => {
  }, [postsContext]);

  return (
    <div className="main-content">
      {postsContext.posts.length === 0 && (
        <p>You got no posts yet. Start adding some.</p>
      )}
      {postsContext.posts.length > 0 && <MainPost posts={postsContext.posts} />}
    </div>
  );
}

export default Main;
