import { Button, withStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Favorite, Star } from "@material-ui/icons";
import React from "react";

import { Container } from "./styles";

const ButtonWatch = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
}))(Button);

function MovieDetails({ data }) {
  return (
    <Container>
      <div className="basicInfo">
        <div className="title">
          <h6>{data?.title}</h6>
          <span className="like">
            <Favorite />
            {data?.vote_count || 0}
          </span>
          <span className="rate">
            <Star />
            {data?.vote_average || 0}/10
          </span>
        </div>
        <span>{data?.genres?.map((g) => g.name).join(", ")}</span>
      </div>
      <div className="watchNow">
        <ButtonWatch
          variant="contained"
          color="primary"
          className="buttonWatch"
          onClick={() => window.open(data.homepage, "_blank")}
        >
          Assistir
        </ButtonWatch>
      </div>
    </Container>
  );
}

export default MovieDetails;
