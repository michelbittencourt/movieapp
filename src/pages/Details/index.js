import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br"; // without this line it didn't work

import CarouselWithFourItens from "../../components/CarouselWithFourItens";
import CarouselMovies from "../../components/CarouselMovies";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import { Container } from "./styles";
import HorizontalCircleList from "../../components/HorizontalCircleList";
import SeeAllContainer from "../../components/SeeAllContainer";
import HorizontalRoundedList from "../../components/HorizontalRoundedList";

// import { Container } from './styles';
import { api } from "./../../services/api";
import { useParams } from "react-router-dom";
import VideoBanner from "../../components/VideoBanner";
import MovieDetails from "./components/movieDetails/index";

moment.locale("pt-br");

function Details() {
  const { id } = useParams();

  const [dataVideos, setDataVideos] = useState([]);
  const [dataDetails, setDataDetails] = useState([]);
  const [dataActors, setDataActors] = useState([]);
  const [dataGenres, setDataGenres] = useState([]);
  const [dataUpcoming, setDataUpcoming] = useState([]);

  useEffect(() => {
    const getLatestMovies = () => {
      api.get(`movie/${id}/videos`).then((response) => {
        let movies = response.data.results;

        const highlights = movies.slice(0, 12);
        setDataVideos(highlights);
      });
    };

    getLatestMovies();
  }, []);

  useEffect(() => {
    const getMovieDetails = () => {
      api.get(`movie/${id}`).then((response) => {
        const details = response.data;
        setDataDetails(details);
      });
    };

    getMovieDetails();
  }, []);

  useEffect(() => {
    const getGenres = () => {
      api.get(`genre/movie/list`).then((response) => {
        let genres = response.data.genres;

        const shorten = genres.slice(0, 12);

        setDataGenres(shorten);
      });
    };

    getGenres();
  }, []);

  useEffect(() => {
    const getGenres = () => {
      api.get(`movie/upcoming`).then((response) => {
        let movies = response.data;

        const highlights = movies;
        setDataUpcoming(highlights);
      });
    };

    getGenres();
  }, []);

  return (
    <Container>
      <NavBar />
      <section>
        <VideoBanner data={dataVideos[0]} />
      </section>
      <section>
        <MovieDetails data={dataDetails} />
      </section>
      <section className="m-60">
        <SeeAllContainer title="Atores mais vistos" />
        <HorizontalCircleList data={dataActors} />
      </section>
      <section className="m-60">
        <SeeAllContainer title="Gêneros" />
        <HorizontalRoundedList data={dataGenres} />
      </section>
      <section>
        <Title title="Próximos lançamentos" />
        <CarouselMovies
          title={`${moment(dataUpcoming?.dates?.minimum).format(
            "MMMM/YYYY"
          )} - ${moment(dataUpcoming?.dates?.maximum).format("MMMM/YYYY")} (${
            dataUpcoming?.total_results
          })`}
          data={dataUpcoming?.results}
        />
      </section>
    </Container>
  );
}

export default Details;
