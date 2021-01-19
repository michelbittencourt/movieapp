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
import SeeAllCategorieContainer from "../SeeAllCategorieContainer";

// import { Container } from './styles';

function CarouselWithFourItens({ title }) {
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
          <SeeAllCategorieContainer title={title} />
          <Slider
            style={{
              margin: "0 auto",
              marginTop: 30,
              borderRadius: 15,
            }}
          >
            <Slide index={0} className="slide">
              <Image src="https://i1.wp.com/geekantenado.com/wp-content/uploads/2019/04/avengersendgame-blogroll-2-1555518573008_1280w.jpg?fit=1280%2C720&ssl=1" />
            </Slide>
            <Slide index={1} className="slide">
              <Image src="https://static.toiimg.com/photo/72975551.cms" />
            </Slide>
            <Slide index={2} className="slide">
              <Image src="https://static.toiimg.com/photo/72975551.cms" />
            </Slide>
            <Slide index={3} className="slide">
              <Image src="https://i1.wp.com/geekantenado.com/wp-content/uploads/2019/04/avengersendgame-blogroll-2-1555518573008_1280w.jpg?fit=1280%2C720&ssl=1" />
            </Slide>
            <Slide index={4}>
              <Image src="https://static.toiimg.com/photo/72975551.cms" />
            </Slide>
            <Slide index={5}>
              <Image src="https://static.toiimg.com/photo/72975551.cms" />
            </Slide>
            <Slide index={6}>
              <Image src="https://i1.wp.com/geekantenado.com/wp-content/uploads/2019/04/avengersendgame-blogroll-2-1555518573008_1280w.jpg?fit=1280%2C720&ssl=1" />
            </Slide>
            <Slide index={7}>
              <Image src="https://static.toiimg.com/photo/72975551.cms" />
            </Slide>
            <Slide index={8}>
              <Image src="https://static.toiimg.com/photo/72975551.cms" />
            </Slide>
            <Slide index={9}>
              <Image src="https://i1.wp.com/geekantenado.com/wp-content/uploads/2019/04/avengersendgame-blogroll-2-1555518573008_1280w.jpg?fit=1280%2C720&ssl=1" />
            </Slide>
            <Slide index={10}>
              <Image src="https://static.toiimg.com/photo/72975551.cms" />
            </Slide>
            <Slide index={11}>
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

export default CarouselWithFourItens;
