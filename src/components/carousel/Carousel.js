import { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

import "./Carousel.css";

export const DUMMYCarouselData = [
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
      "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg",
    title: "Windows 11 WP",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, similique ad magni odio blanditiis in neque repellat quae sunt ipsum, omnis obcaecati nihil sequi commodi laudantium earum, nulla totam ullam?",
  },
];

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="carousel-box">
        <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
        {DUMMYCarouselData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div className="current-elements">
                  <img src={slide.image} alt="img" />
                  <div>
                    <h1>{slide.title}</h1>
                    <p>{slide.text}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Carousel;