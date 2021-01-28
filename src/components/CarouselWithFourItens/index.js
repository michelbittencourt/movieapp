import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { CarouselComponent } from "./styles";
import SeeAllContainer from "../SeeAllContainer";
import { baseURLImages } from "../../services/api";

// import { Container } from './styles';

function CarouselWithFourItens({ data, title }) {
  return (
    <CarouselComponent>
      <div className="container">
        <CarouselProvider
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
              <Slide index={index} className="slide">
                <Image src={`${baseURLImages}${item.poster_path}`} />
              </Slide>
            ))}
          </Slider>
          <ButtonBack className="button button-prev">{`<`}</ButtonBack>
          <ButtonNext className="button button-next">{`>`}</ButtonNext>
        </CarouselProvider>
      </div>
    </CarouselComponent>
  );
}

export default CarouselWithFourItens;
