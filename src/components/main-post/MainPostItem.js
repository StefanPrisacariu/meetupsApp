import { useContext } from "react";
import PostsContext from "../../store/PostsContext";
import Card from "../Card/Card";
import "./MainPostItem.css";

function MainPostItem(props) {
  const postsCtx = useContext(PostsContext);
  return (
    <Card>
      <div className="image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="text">
        <p>{props.text}</p>
      </div>
      <button className="delete" onClick={() => postsCtx.removePost(props.id)}>X</button>
    </Card>
    
  );
}

export default MainPostItem;
