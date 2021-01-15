import React from "react";
import Carousel from "../../components/Carousel";
import CarouselWithFourItens from "../../components/CarouselWithFourItens";
import NavBar from "../../components/NavBar";

// import { Container } from './styles';

function Home() {
  return (
    <>
      <NavBar />
      <Carousel />
      <section>
        <CarouselWithFourItens title="Os mais amados" />
      </section>
      <section>
        <CarouselWithFourItens title="Os melhores avaliados" />
      </section>
    </>
  );
}

export default Home;
