import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import CarouselWithFourItens from "../../components/CarouselWithFourItens";
import NavBar from "../../components/NavBar";
import { api } from "../../services/api";
import { Container } from "./styles";

// import { Container } from './styles';

function Home() {
  const [dataNowPlaying, setDataNowPlaying] = useState([]);
  const [dataTopRated, setDataTopRated] = useState([]);
  const [dataPopular, setDataPopular] = useState([]);

  useEffect(() => {
    const getNowPlayingMovies = () => {
      api.get(`movie/now_playing`).then((response) => {
        let movies = response.data.results;

        const highlights = movies.slice(0, 3);
        setDataNowPlaying(highlights);
      });
    };

    getNowPlayingMovies();
  }, []);

  useEffect(() => {
    const getTopRatedMovies = () => {
      api.get(`movie/top_rated`).then((response) => {
        let movies = response.data.results;

        const highlights = movies.slice(0, 12);
        setDataTopRated(highlights);
      });
    };

    getTopRatedMovies();
  }, []);

  useEffect(() => {
    const getPopularMovies = () => {
      api.get(`movie/popular`).then((response) => {
        let movies = response.data.results;

        const highlights = movies.slice(0, 12);
        setDataPopular(highlights);
      });
    };

    getPopularMovies();
  }, []);

  return (
    <Container>
      <NavBar />
      <Carousel data={dataNowPlaying} />
      <section>
        <CarouselWithFourItens title="Os mais amados" data={dataPopular} />
      </section>
      <section>
        <CarouselWithFourItens
          title="Os melhores avaliados"
          data={dataTopRated}
        />
      </section>
    </Container>
  );
}

export default Home;
