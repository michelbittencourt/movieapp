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

import { CarouselComponent, ContainerInfo } from "./styles";
import SeeAllContainer from "../SeeAllContainer";
import { baseURLImages } from "../../services/api";

// import { Container } from './styles';

function CarouselWithFourItens({ title, data, hasInfo }) {
  return (
    <CarouselComponent>
      <div className="container">
        <CarouselProvider
          visibleSlides={6}
          totalSlides={data?.length || 12}
          step={1}
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
            {data?.map((movie, index) => (
              <Slide index={index} className="slide">
                <Image src={`${baseURLImages}${movie.poster_path}`} />
                {hasInfo && (
                  <ContainerInfo>
                    <h6>{movie?.title}</h6>
                    <span>Tags</span>
                  </ContainerInfo>
                )}
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
