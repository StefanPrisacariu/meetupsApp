import { useContext } from "react";
import PostsContext from "../../store/PostsContext";
import MainPost from "../main-post/MainPost";
import PostNotification from "../post-notification/PostNotification";
import { useTranslation } from "react-i18next";
import "./Main.css";

function Main() {
  const postsContext = useContext(PostsContext);


  const { t } = useTranslation();

  return (
    <>
      <div className="main-content">
        {postsContext.posts.length === 0 && <p>{t("main-no-post")}</p>}
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
