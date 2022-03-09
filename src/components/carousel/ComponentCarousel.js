import { Carousel } from "react-bootstrap";
import "./Carousel.css";


function ComponentCarousel() {
  const DUMMYCarouselData = [
    {
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      title: "Cool Dragon Thingy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, similique ad magni odio blanditiis in neque repellat quae sunt ipsum, omnis obcaecati nihil sequi commodi laudantium earum, nulla totam ullam?",
    },
    {
      image:
        "https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
      title: "Retro",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, similique ad magni odio blanditiis in neque repellat quae sunt ipsum, omnis obcaecati nihil sequi commodi laudantium earum, nulla totam ullam?",
    },
    {
      image:
        "https://my4kwallpapers.com/wp-content/uploads/2021/07/Window-11-Wallpaper.png",
      title: "Windows 11 WP",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, similique ad magni odio blanditiis in neque repellat quae sunt ipsum, omnis obcaecati nihil sequi commodi laudantium earum, nulla totam ullam?",
    },
    {
      image:
        "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png",
      title: "Testare 1:1 Image",
      text: "Rezultatul final ar trebui sa fie o imagine 16:9 pentru a pastra aspectul Caruselului.",
    },
  ];

  return (
    <div className="carousel">
      <Carousel className="carousel-elem">
        <Carousel.Item>
          <img
            src={DUMMYCarouselData[0].image}
            className="d-block w-100"
            alt=""
          />
          <Carousel.Caption className="carousel-captions">
            <h3>{DUMMYCarouselData[0].title}</h3>
            <p>{DUMMYCarouselData[0].text}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={DUMMYCarouselData[1].image}
            className="d-block w-100"
            alt=""
          />
          <Carousel.Caption className="carousel-captions">
            <h3>{DUMMYCarouselData[1].title}</h3>
            <p>{DUMMYCarouselData[1].text}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={DUMMYCarouselData[2].image}
            className="d-block w-100"
            alt=""
          />
          <Carousel.Caption className="carousel-captions">
            <h3>{DUMMYCarouselData[2].title}</h3>
            <p>{DUMMYCarouselData[2].text}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={DUMMYCarouselData[3].image}
            className="d-block w-100"
            alt=""
          />
          <Carousel.Caption className="carousel-captions">
            <h3>{DUMMYCarouselData[3].title}</h3>
            <p>{DUMMYCarouselData[3].text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ComponentCarousel;
