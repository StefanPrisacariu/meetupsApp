import { useContext } from "react";
import PostsContext from "../../store/PostsContext";
import MainPost from "../main-post/MainPost";
import PostNotification from "../post-notification/PostNotification";
import "./Main.css";

function Main() {
  const postsContext = useContext(PostsContext);

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
      {postsContext.state === false && (
        <PostNotification msg={postsContext.message} />
      )}
    </>
  );
}

export default Main;
