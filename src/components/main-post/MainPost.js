import "./MainPost.css";
import MainPostItem from "./MainPostItem";
import { useState } from "react";
import PaginationElem from "../PaginationElem/PaginationElem";

function MainPost(props) {
  const mainPosts = props.posts.filter((post) => post.location === "main");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const postsNumber = mainPosts.length;

  const postsToMap = [];

  for (
    let i = postsPerPage * (currentPage - 1);
    i < Math.min(currentPage * postsPerPage, postsNumber);
    i++
  ) {
    postsToMap.push(mainPosts[i]);
  }

  return (
    <>
      <div className="main-posts">
        {postsToMap.map((post) => (
          <MainPostItem
            key={post.id}
            id={post.id}
            image={post.image}
            title={post.title}
            text={post.text}
            date={post.date}
          />
        ))}
      </div>
      <div className="pagination-elem">
        <PaginationElem
          numberOfPosts={postsNumber}
          postsOnPage={postsPerPage}
          setPostsOnPage={setPostsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default MainPost;
