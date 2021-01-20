import React, { useState } from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Image,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselComponent } from "./styles";
import { baseURLImages } from "../../services/api";

// import { Container } from './styles';

function Carousel({ data }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleBackButtonPressed = () => {
    if (selectedImageIndex === 0) {
      setSelectedImageIndex(data.length - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };
  const handleNextButtonPressed = () => {
    if (selectedImageIndex === data.length - 1) {
      setSelectedImageIndex(0);
    } else {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <CarouselComponent>
      <div className="container">
        <div className="background">
          <img
            alt="fundo"
            src={`${baseURLImages}${data[selectedImageIndex]?.backdrop_path}`}
          />
        </div>

        <CarouselProvider
          visibleSlides={1}
          totalSlides={3}
          naturalSlideWidth={800}
          naturalSlideHeight={300}
          hasMasterSpinner
          infinite
        >
          <h2 className="title">O cinema nas suas mãos</h2>
          <span className="subtitle">
            Filmes adicionados e selecionados exclusivamente para você
          </span>
          <Slider
            style={{
              margin: "0 auto",
              marginTop: 30,
              borderRadius: 15,
            }}
          >
            {data.map((movie, index) => (
              <Slide index={index}>
                <Image src={`${baseURLImages}/${movie.backdrop_path}`} />
                <div className="movieBackdrop">
                  <div className="movieDescription">
                    <h6 className="title">{movie.title}</h6>
                    <span className="description">Ação, Aventura</span>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
          <ButtonBack
            className="button button-prev"
            onClick={handleBackButtonPressed}
          >{`<`}</ButtonBack>
          <ButtonNext
            className="button button-next"
            onClick={handleNextButtonPressed}
          >{`>`}</ButtonNext>
        </CarouselProvider>
      </div>
    </CarouselComponent>
  );
}

export default Carousel;
