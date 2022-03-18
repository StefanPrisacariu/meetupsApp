import { useContext, useState } from "react";
import PostsContext from "../../store/PostsContext";
import { Card, Button } from "react-bootstrap";
import "./MainPostItem.css";
import Overlay from "../overlay/Overlay";

function MainPostItem(props) {
  const postsCtx = useContext(PostsContext);
  const [hideOverlay, setHideOverlay] = useState(true);
  const [hideEdit, setHideEdit] = useState(true);
  const [hideButtons, setHideButtons] = useState(true);

  return (
    <>
      <Card>
        <div
          className="card-width"
          onMouseOver={() => setHideButtons(false)}
          onMouseLeave={() => setHideButtons(true)}
        >
          {hideButtons === false && (
            <>
              <Button
                className="delete"
                variant="danger"
                style={{ padding: 0 }}
                onClick={() => setHideOverlay(!hideOverlay)}
              >
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/trash+bin+icon-1320086460670911435.png"
                  alt=""
                />
              </Button>
              <Button
                className="edit"
                variant="success"
                style={{ padding: 0 }}
                onClick={() => {
                  setHideEdit(!hideEdit);
                }}
              >
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/edit+document+edit+file+edited+editing+icon-1320191040211803620.png"
                  alt=""
                />
              </Button>
            </>
          )}
          <Card.Body style={{ padding: 0 }}>
            <Card.Img
              className="card-img"
              src={props.image}
              variant="top"
              alt=""
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png";
              }}
            />
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="mb-2 text-muted">{props.text}</Card.Text>
          </Card.Body>
        </div>
        <small className="text-muted card-date">{props.date}</small>
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
