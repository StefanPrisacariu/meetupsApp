import { Carousel } from "react-bootstrap";
import { useContext } from "react/cjs/react.development";
import PostsContext from "../../store/PostsContext";
import "./Carousel.css";

function ComponentCarousel() {
  const carouselContext = useContext(PostsContext);

  return (
    <div className="carousel">
      <Carousel className="carousel-elem">
        {carouselContext.posts.filter(post => post.location === 'carousel').map((post) => (
          <Carousel.Item
          key={post.id}>
            <img
              src={post.image}
              className="d-block w-100"
              alt=""
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png";
              }}
            />
            <Carousel.Caption className="carousel-captions">
              <h3>{post.title}</h3>
              <p>{post.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ComponentCarousel;
