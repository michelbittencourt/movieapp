import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { CarouselComponent } from "./styles";
import { baseURLImages } from "../../services/api";

// import { Container } from './styles';
import { Tooltip } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: 13,
  },
}));

function CarouselActor({ title, data, onClick }) {
  const classes = useStyles();
  return (
    <CarouselComponent>
      <div className="container">
        <CarouselProvider
          visibleSlides={6}
          totalSlides={data?.length || 12}
          step={4}
          naturalSlideWidth={800}
          naturalSlideHeight={300}
          infinite
        >
          <Slider
            style={{
              margin: "0 auto",
              borderRadius: 15,
            }}
          >
            {data?.map((item, index) => (
              <Slide index={index} className="slide">
                <Tooltip title={item?.original_name} arrow classes={classes}>
                  <Avatar
                    alt={item?.name}
                    src={`${baseURLImages}${item?.profile_path}`}
                    className={`avatar ${index > 0 ? "m-10" : ""}`}
                  />
                </Tooltip>
              </Slide>
            ))}
          </Slider>
          <ButtonBack className="button button-prev">{`<`}</ButtonBack>
          <ButtonNext className="button button-next">{`>`}</ButtonNext>
        </CarouselProvider>
      </div>
    </CarouselComponent>
  );
}

export default CarouselActor;
