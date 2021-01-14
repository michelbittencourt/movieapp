import styled from "styled-components";

export const CarouselComponent = styled.div`
  display: inline;
  align-items: center;
  justify-content: center;
  height: 400px;
  .container {
    display: flex;
    justify-content: center;
    .background {
      position: absolute;
      width: 120%;
      height: 800px;
      filter: blur(8px);
      -webkit-filter: blur(8px);
    }
    .carousel {
      flex: 1 !important;
      z-index: 100;
    }
  }
`;
