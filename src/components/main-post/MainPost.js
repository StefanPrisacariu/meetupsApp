import "./MainPost.css";
import MainPostItem from "./MainPostItem";

function MainPost(props) {
  return (
    <>
      {props.posts.map((post) => (
        <MainPostItem
          key={post.id}
          id={post.id}
          image={post.image}
          title={post.title}
          text={post.text}
        />
      ))}
    </>
  );
}

export default MainPost;
