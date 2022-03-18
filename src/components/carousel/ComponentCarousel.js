import { Carousel, Button } from "react-bootstrap";
import { useContext, useState } from "react/cjs/react.development";
import PostsContext from "../../store/PostsContext";
import Overlay from "../overlay/Overlay";
import "./Carousel.css";

function ComponentCarousel() {
  const carouselContext = useContext(PostsContext);
  const [hideOverlay, setHideOverlay] = useState(true);
  const [hideEdit, setHideEdit] = useState(true);
  const [hideButtons, setHideButtons] = useState(true);
  const [postId, setPostId] = useState("");
  const [postElem, setPostElem] = useState();

  return (
    <div className="carousel">
      <Carousel className="carousel-elem">
        {carouselContext.posts
          .filter((post) => post.location === "carousel")
          .map((post) => (
            <Carousel.Item
              key={post.id}
              onMouseOver={() => setHideButtons(false)}
              onMouseLeave={() => setHideButtons(true)}
            >
              {hideButtons === false && (
                <>
                  <Button
                    className="deleteCarousel"
                    variant="danger"
                    style={{ padding: 0 }}
                    onMouseOver={() => {
                      setPostId(post.id);
                      setPostElem(post);
                    }}
                    onClick={() => {
                      setHideOverlay(!hideOverlay);
                    }}
                  >
                    <img
                      src="https://icons-for-free.com/iconfiles/png/512/trash+bin+icon-1320086460670911435.png"
                      alt=""
                    />
                  </Button>
                  <Button
                    className="editCarousel"
                    variant="success"
                    style={{ padding: 0 }}
                    onMouseOver={() => {
                      setPostId(post.id);
                      setPostElem(post);
                    }}
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
              <img
                src={post.image}
                className="d-block w-100"
                alt=""
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?size=626&ext=jpg&ga=GA1.2.1353596932.1641772800";
                }}
              />
              <Carousel.Caption className="carousel-captions">
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <p>{post.date}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
      {hideOverlay === false && (
        <Overlay
          toggleOverlay={() => setHideOverlay(!hideOverlay)}
          elem={carouselContext}
          elemId={postId}
          action="delete"
        />
      )}
      {hideEdit === false && (
        <Overlay
          toggleOverlay={() => setHideEdit(!hideEdit)}
          elem={postElem}
          elemId={postId}
          action="edit"
        />
      )}
    </div>
  );
}

export default ComponentCarousel;
