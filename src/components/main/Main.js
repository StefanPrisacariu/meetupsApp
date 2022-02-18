import { useEffect, useContext } from "react";
import { useState } from "react/cjs/react.development";
import PostsContext from "../../store/PostsContext";
import MainPost from "../main-post/MainPost";

import "./Main.css";

function Main() {
  const postsContext = useContext(PostsContext);
  useEffect(() => {setCount(postsContext.posts.length)}, [postsContext]);

  const [count, setCount] = useState(0);

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
      <div>There are {count} posts</div>
    </>
  );
}

export default Main;
