import { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const PostsContext = createContext({
  posts: [],
  addPost: (newPost) => {},
  removePost: (postId) => {},
  itemIsPost: (postId) => {},
  editPost: (editedPost, postId) => {},
  state: "",
  message: "",
});

export function PostsContextProvider(props) {
  const [posts, setPosts] = useState([]);
  const [hideNotif, setHideNotif] = useState(true);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    fetch("https://cosplaybyheart-default-rtdb.firebaseio.com/posts.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = [];
        for (const key in data) {
          const post = {
            id: key,
            ...data[key],
          };
          posts.push(post);
        }
        setPosts(posts);
      });
  });

  function addPostHandler(newPost) {
    fetch("https://cosplaybyheart-default-rtdb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        ContentType: "application/json",
      },
    }).then(() => {
      posts.push(newPost);
      setPosts(posts);
      notificationStateHandler(false);
      setMsg(t("alert-create"));
    });
  }

  function removePostHandler(postId) {
    fetch(
      `https://cosplaybyheart-default-rtdb.firebaseio.com/posts/${postId}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      notificationStateHandler(false);
      setMsg(t("alert-delete"));
    });
  }

  function itemIsPostHandler(postId) {
    return posts.some((post) => post.id === postId);
  }

  function editPostHandler(editedPost, postId) {
    return fetch(
      `https://cosplaybyheart-default-rtdb.firebaseio.com/posts/${postId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(editedPost),
        headers: {
          ContentType: "application/json",
        },
      }
    ).then(() => {
      notificationStateHandler(false);
      setMsg(t("alert-edit"));
    });
  }

  function notificationStateHandler(state) {
    setHideNotif(state);
    setTimeout(() => setHideNotif(!state), 3000);
  }

  const context = {
    posts: posts,
    addPost: addPostHandler,
    removePost: removePostHandler,
    itemIsPost: itemIsPostHandler,
    editPost: editPostHandler,
    state: hideNotif,
    message: msg,
  };

  return (
    <>
      <PostsContext.Provider value={context}>
        {props.children}
      </PostsContext.Provider>
    </>
  );
}

export default PostsContext;
