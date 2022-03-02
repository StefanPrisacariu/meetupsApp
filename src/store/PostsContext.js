import { createContext, useState, useEffect } from "react";
import PostNotification from "../components/post-notification/PostNotification";

const PostsContext = createContext({
  posts: [],
  addPost: (newPost) => {},
  removePost: (postId) => {},
  itemIsPost: (postId) => {},
  editPost: (editedPost, postId) => {},
});

export function PostsContextProvider(props) {
  const [posts, setPosts] = useState([]);
  const [hideCreate, setHideCreate] = useState(true);
  const [hideDelete, setHideDelete] = useState(true);

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
      setHideCreate(false);
      setTimeout(() => setHideCreate(true), 3000);
    });
  }

  function removePostHandler(postId) {
    fetch(
      `https://cosplaybyheart-default-rtdb.firebaseio.com/posts/${postId}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      setHideDelete(false);
      setTimeout(() => setHideDelete(true), 3000);
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
    );
  }

  const context = {
    posts: posts,
    addPost: addPostHandler,
    removePost: removePostHandler,
    itemIsPost: itemIsPostHandler,
    editPost: editPostHandler,
  };

  return (
    <>
      <PostsContext.Provider value={context}>
        {props.children}
      </PostsContext.Provider>
      {!hideCreate && <PostNotification msg="Post Created" />}
      {!hideDelete && <PostNotification msg="Post Deleted" />}
    </>
  );
}

export default PostsContext;
