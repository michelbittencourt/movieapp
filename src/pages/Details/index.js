import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br"; // without this line it didn't work

import CarouselMovies from "../../components/CarouselMovies";
import NavBar from "../../components/NavBar";
import { CardOverview, Container } from "./styles";

// import { Container } from './styles';
import { api } from "./../../services/api";
import { useParams } from "react-router-dom";
import VideoBanner from "../../components/VideoBanner";
import MovieDetails from "./components/movieDetails/index";
import { Box, Tab, Tabs } from "@material-ui/core";

moment.locale("pt-br");

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function Details() {
  const { id } = useParams();

  const [dataVideos, setDataVideos] = useState([]);
  const [dataDetails, setDataDetails] = useState([]);
  const [dataSimilar, setDataSimilar] = useState([]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getLatestMovies = () => {
      api.get(`movie/${id}/videos`).then((response) => {
        let movies = response.data.results;

        const highlights = movies.slice(0, 12);
        setDataVideos(highlights);
      });
    };

    getLatestMovies();
  }, [id]);

  useEffect(() => {
    const getMovieDetails = () => {
      api.get(`movie/${id}`).then((response) => {
        const details = response.data;
        setDataDetails(details);
      });
    };

    getMovieDetails();
  }, [id]);

  useEffect(() => {
    const getSimilar = () => {
      api.get(`movie/${id}/similar`).then((response) => {
        let movies = response.data.results;

        const highlights = movies;
        setDataSimilar(highlights);
      });
    };

    getSimilar();
  }, [id]);

  return (
    <Container>
      <NavBar />
      <section>
        <VideoBanner data={dataVideos[0]} />
      </section>
      <section>
        <MovieDetails data={dataDetails} />
      </section>
      <section style={{ margin: "0 60px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Info" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
          <Tab label="Trailers" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <CardOverview className="containerInfo">
            <div className="left">
              <div className="card">
                <div className="card-header">
                  <span>{dataDetails?.runtime} min</span>
                  <span>14</span>
                  <span>
                    {moment(dataDetails?.release_date).format("YYYY")}
                  </span>
                </div>
                <div className="card-body">{dataDetails?.overview}</div>
              </div>
            </div>
            <div className="right">
              <div className="card">
                <div className="card-header">
                  <span>Elenco</span>
                </div>
                <div className="card-body">A B C D</div>
              </div>
              <div className="card">
                <div className="card-header">
                  <span>Detalhes</span>
                </div>
                <div className="card-body">
                  <span>
                    Titulo Original: <b>{dataDetails?.title}</b>
                  </span>
                  <span>
                    Estréia no Brasil:{" "}
                    <b>
                      {moment(dataDetails?.release_date).format("DD/MM/YYYY")}
                    </b>
                  </span>
                  <span>
                    Produção:{" "}
                    <b>
                      {dataDetails?.production_companies
                        ?.map((p) => p.name)
                        .join(", ")}
                    </b>
                  </span>
                  <span>
                    Local:{" "}
                    <b>
                      {dataDetails?.production_countries
                        ?.map((p) => p.name)
                        .join(", ")}
                    </b>
                  </span>
                  {/* <span>
                    Direção: <b>Deadpool</b>
                  </span> */}
                </div>
              </div>
            </div>
          </CardOverview>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Em breve
        </TabPanel>
        <TabPanel value={value} index={2}>
          Em breve
        </TabPanel>
      </section>
      <section>
        <CarouselMovies title="Filmes relacionados" data={dataSimilar} />
      </section>
    </Container>
  );
}

export default Details;
