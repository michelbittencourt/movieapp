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
          centerMode
          centerSlidePercentage={30}
          emulateTouch
          swipeable
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
        {/* <CarouselProvider
          visibleSlides={4}
          totalSlides={12}
          step={4}
          naturalSlideWidth={800}
          naturalSlideHeight={300}
          hasMasterSpinner
          infinite
        >
          <SeeAllContainer title={title} />
          <Slider
            style={{
              margin: "0 auto",
              marginTop: 30,
              borderRadius: 15,
            }}
          >
            {data?.map((item, index) => (
              <Slide
                index={index}
                className="slide"
                onClick={() => onClick(item?.id)}
              >
                <Image src={`${baseURLImages}${item.poster_path}`} />
              </Slide>
            ))}
          </Slider>
          <ButtonBack className="button button-prev">{`<`}</ButtonBack>
          <ButtonNext className="button button-next">{`>`}</ButtonNext>
        </CarouselProvider> */}
      </div>
    </CarouselComponent>
  );
}

export default CarouselWithFourItens;
