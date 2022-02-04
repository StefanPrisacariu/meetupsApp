import { useContext, useState } from "react";
import PostsContext from "../../store/PostsContext";
import Card from "../Card/Card";
import "./MainPostItem.css";
import Overlay from "../overlay/Overlay";

function MainPostItem(props) {
  const postsCtx = useContext(PostsContext);
  const [hideOverlay, setHideOverlay] = useState(true);

  return (
    <>
      <Card>
          <button
            className="delete"
            onClick={
              () =>
                setHideOverlay(!hideOverlay) /*postsCtx.removePost(props.id)*/
            }
          >
            <img
              src="https://icons-for-free.com/iconfiles/png/512/trash+bin+icon-1320086460670911435.png"
              alt=""
            />
          </button>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="text">
          <p>{props.text}</p>
        </div>
      </Card>
      {hideOverlay === false && (
        <Overlay
          toggleOverlay={() => setHideOverlay(!hideOverlay)}
          elem={postsCtx}
          elemId={props.id}
        />
      )}
    </>
  );
}

export default MainPostItem;
