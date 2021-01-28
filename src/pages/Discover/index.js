import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br"; // without this line it didn't work

import CarouselMovies from "../../components/CarouselMovies";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import { Container } from "./styles";
import HorizontalCircleList from "../../components/HorizontalCircleList";
import SeeAllContainer from "../../components/SeeAllContainer";
import HorizontalRoundedList from "../../components/HorizontalRoundedList";

// import { Container } from './styles';
import { api } from "./../../services/api";
import { useHistory } from "react-router-dom";

moment.locale("pt-br");

function Discover() {
  const history = useHistory();
  const [dataRecentlyAdded, setDataRecentlyAdded] = useState([]);
  const [dataActors, setDataActors] = useState([]);
  const [dataGenres, setDataGenres] = useState([]);
  const [dataUpcoming, setDataUpcoming] = useState([]);

  useEffect(() => {
    const getLatestMovies = () => {
      api.get(`movie/upcoming`).then((response) => {
        let movies = response.data.results;

        const highlights = movies.slice(0, 12);
        setDataRecentlyAdded(highlights);
      });
    };

    getLatestMovies();
  }, []);

  useEffect(() => {
    const getPopularPeople = () => {
      api.get(`person/popular`).then((response) => {
        const movies = response.data.results;
        setDataActors(movies);
      });
    };

    getPopularPeople();
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
        <Title title="Descobrir" />
        <CarouselMovies
          title="Adicionados recentemente"
          hasInfo
          data={dataRecentlyAdded}
          onClick={(id) => history.push(`/movie/details/${id}`)}
        />
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
          onClick={(id) => history.push(`/movie/details/${id}`)}
        />
      </section>
    </Container>
  );
}

export default Discover;
