import { createContext, useState, useEffect } from "react";

const PostsContext = createContext({
  posts: [],
  addPost: (newPost) => {},
  removePost: (postId) => {},
  itemIsPost: (postId) => {},
});

export function PostsContextProvider(props) {
  const [posts, setPosts] = useState([]);

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
      alert("Post Created");
      posts.push(newPost);
      setPosts(posts);
    });
  }

  function removePostHandler(postId) {


    // fetch("https://cosplaybyheart-default-rtdb.firebaseio.com/posts.json", {
    //   method: "DELETE",
    //   body: JSON.stringify((posts) => posts.id === postId),
    //   headers: {
    //     ContentType: "application/json",
    //   },
    // }).then(() => {
    //   posts.filter((posts) => posts.id === postId);
    //   setPosts(posts);
    // });
  }

  function itemIsPostHandler(postId) {
    return posts.some((post) => post.id === postId);
  }

  const context = {
    posts: posts,
    addPost: addPostHandler,
    removePost: removePostHandler,
    itemIsPost: itemIsPostHandler,
  };

  return (
    <PostsContext.Provider value={context}>
      {props.children}
    </PostsContext.Provider>
  );
}

export default PostsContext;
