import React from "react";
import CarouselWithFourItens from "../../components/CarouselWithFourItens";
import CarouselMovies from "../../components/CarouselMovies";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import { Container } from "./styles";
import HorizontalCircleList from "../../components/HorizontalCircleList";
import SeeAllContainer from "../../components/SeeAllContainer";
import HorizontalRoundedList from "../../components/HorizontalRoundedList";

// import { Container } from './styles';

function Discover() {
  return (
    <Container>
      <NavBar />
      <section>
        <Title title="Descobrir" />
        <CarouselMovies title="Adicionados recentemente" hasInfo />
      </section>
      <section className="m-60">
        <SeeAllContainer title="Atores mais vistos" />
        <HorizontalCircleList />
      </section>
      <section className="m-60">
        <SeeAllContainer title="Gêneros" />
        <HorizontalRoundedList />
      </section>
      <section>
        <Title title="Próximos lançamentos" />
        <CarouselMovies title="Novembro/2020" />
        <CarouselMovies title="Dezembro/2020" />
      </section>
    </Container>
  );
}

export default Discover;
