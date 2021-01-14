import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselComponent } from "./styles";

// import { Container } from './styles';

function Carousel() {
  return (
    <CarouselComponent>
      <div className="container">
        <img
          className="background"
          alt="fundo"
          src="https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2007a.jpg"
          width={800}
          height={300}
        />
        <CarouselProvider
          visibleSlides={1}
          totalSlides={3}
          naturalSlideWidth={800}
          naturalSlideHeight={300}
          hasMasterSpinner
          infinite
        >
          <Slider style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Slide index={0}>
              <ImageWithZoom src="https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2007a.jpg" />
            </Slide>
            <Slide index={1}>
              <ImageWithZoom src="https://static.toiimg.com/photo/72975551.cms" />
            </Slide>
            <Slide index={2}>
              <ImageWithZoom src="https://static.toiimg.com/photo/72975551.cms" />
            </Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    </CarouselComponent>
  );
}

export default Carousel;
