import { useContext, useState } from "react";
import PostsContext from "../../store/PostsContext";
import Card from "../Card/Card";
import "./MainPostItem.css";
import Overlay from "../overlay/Overlay";

function MainPostItem(props) {
  const postsCtx = useContext(PostsContext);
  const [hideOverlay, setHideOverlay] = useState(true);
  const [hideEdit, setHideEdit] = useState(true);
  const [hideButtons, setHideButtons] = useState(true);
  

  return (
    <>
      <Card key={props.id}>
        <div
          onMouseOver={() => setHideButtons(false)}
          onMouseLeave={() => setHideButtons(true)}
        >
          {hideButtons === false && (
            <>
              <button
                className="delete"
                onClick={() => setHideOverlay(!hideOverlay)}
              >
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/trash+bin+icon-1320086460670911435.png"
                  alt=""
                />
              </button>
              <button
                className="edit"
                onClick={() => {
                  setHideEdit(!hideEdit);
                }}
              >
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/edit+document+edit+file+edited+editing+icon-1320191040211803620.png"
                  alt=""
                />
              </button>
            </>
          )}
          <div className="image">
            <img
              src={props.image}
              alt=""
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Comic_image_missing.svg/1264px-Comic_image_missing.svg.png";
              }}
            />
          </div>
          <div className="title">
            <h2>{props.title}</h2>
          </div>
          <div className="text">
            <p>{props.text}</p>
          </div>
        </div>
      </Card>
      {hideOverlay === false && (
        <Overlay
          toggleOverlay={() => setHideOverlay(!hideOverlay)}
          elem={postsCtx}
          elemId={props.id}
          action="delete"
        />
      )}
      {hideEdit === false && (
        <Overlay
          toggleOverlay={() => setHideEdit(!hideEdit)}
          elem={props}
          elemId={props.id}
          action="edit"
        />
      )}
    </>
  );
}

export default MainPostItem;
