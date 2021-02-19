import React from "react";
// import {
//   ButtonBack,
//   ButtonNext,
//   CarouselProvider,
//   Image,
//   Slide,
//   Slider,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CarouselComponent } from "./styles";
import SeeAllContainer from "../SeeAllContainer";
import { baseURLImages } from "../../services/api";

// import { Container } from './styles';

function CarouselWithFourItens({ data, title, onClick }) {
  return (
    <CarouselComponent>
      <div className="container">
        <SeeAllContainer title={title} />
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          centerMode
          centerSlidePercentage={25}
          onChange={(ev) => console.log(ev)}
          onClickItem={(ev) => onClick(data[ev].id)}
          onClickThumb={(ev) => console.log(ev)}
        >
          {data.map((movie, index) => (
            <div>
              <img alt="cover" src={`${baseURLImages}${movie.backdrop_path}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </CarouselComponent>
  );
}

export default CarouselWithFourItens;
