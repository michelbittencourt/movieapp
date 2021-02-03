import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CarouselWithFourItens from "../../components/CarouselWithFourItens";
import NavBar from "../../components/NavBar";
import { api } from "../../services/api";
import { Container } from "./styles";

// import { Container } from './styles';
import CarouselHeader from "./../../components/Carousel/index";

function Home() {
  const history = useHistory();

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
      <CarouselHeader
        data={dataNowPlaying}
        onClick={(id) => history.push(`/movie/details/${id}`)}
      />
      <section>
        <CarouselWithFourItens
          title="Os mais amados"
          data={dataPopular}
          onClick={(id) => history.push(`/movie/details/${id}`)}
        />
      </section>
      <section>
        <CarouselWithFourItens
          title="Os melhores avaliados"
          data={dataTopRated}
          onClick={(id) => history.push(`/movie/details/${id}`)}
        />
      </section>
    </Container>
  );
}

export default Home;
