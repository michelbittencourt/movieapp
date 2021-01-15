import styled from "styled-components";

export const CarouselComponent = styled.div`
  display: inline;
  height: 400px;
  .container {
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    .background {
      position: absolute;
      width: 120%;
      height: 1300px;
      filter: blur(10px);
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        margin-top: -20px;
        filter: brightness(50%);
      }
    }
    .carousel {
      flex: 1 !important;
      z-index: 100;
      margin: 10px 60px;
      margin-bottom: 30px;
    }

    .slide .carousel__inner-slide img {
      border-radius: 5px;
      width: 98%;
      margin: 0 auto;
    }

    .button {
      height: 50px;
      width: 50px;
      color: red;
      font-size: 23px;
      border-radius: 5px;
      border: none;
      box-shadow: none;
    }

    .button-prev {
      position: absolute;
      left: 30px;
      top: 55%;
      float: left;
    }

    .button-next {
      position: absolute;
      right: 30px;
      top: 55%;
      float: right;
    }
  }
`;
