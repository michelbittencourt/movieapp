import React from "react";
import ReactPlayer from "react-player";
import { Container } from "./styles";

function VideoBanner({ data }) {
  return (
    <Container>
      <ReactPlayer
        controls
        url={`https://www.youtube.com/watch?v=${data?.key}-U`}
        className="react-player"
      />
    </Container>
  );
}

export default VideoBanner;
