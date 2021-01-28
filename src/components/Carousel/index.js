import React from "react";
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

// import { Container } from './styles';

function Carousel() {
  return (
    <CarouselComponent>
      <div className="container">
        <div className="background">
          <img
            alt="fundo"
            src="https://i1.wp.com/geekantenado.com/wp-content/uploads/2019/04/avengersendgame-blogroll-2-1555518573008_1280w.jpg?fit=1280%2C720&ssl=1"
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
            <Slide index={0}>
              <Image src="https://i1.wp.com/geekantenado.com/wp-content/uploads/2019/04/avengersendgame-blogroll-2-1555518573008_1280w.jpg?fit=1280%2C720&ssl=1" />
              <div className="movieBackdrop">
                <div className="movieDescription">
                  <h6 className="title">Avengers: Endgame</h6>
                  <span className="description">Ação, Aventura</span>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <Image src="https://static.toiimg.com/photo/72975551.cms" />
            </Slide>
            <Slide index={2}>
              <Image src="https://static.toiimg.com/photo/72975551.cms" />
            </Slide>
          </Slider>
          <ButtonBack className="button button-prev">{`<`}</ButtonBack>
          <ButtonNext className="button button-next">{`>`}</ButtonNext>
        </CarouselProvider>
      </div>
    </CarouselComponent>
  );
}

export default Carousel;
