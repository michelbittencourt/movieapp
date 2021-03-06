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
      cursor: pointer;
      .movieBackdrop {
        position: absolute;
        bottom: 0px;
        background-image: linear-gradient(to top, #000000, #ffffff00);
        width: 100%;
        height: 50%;
        .movieDescription {
          position: absolute;
          bottom: 40px;
          left: 60px;
          .title {
            font-size: 36px;
            color: white;
            margin: 0px;
          }

          .description {
            font-size: 18px;
            color: white;
            align-self: flex-start;
          }
        }
      }
    }

    .movieBackdrop:hover {
      cursor: pointer;
    }
    .title {
      font-size: 30px;
      color: white;
      margin: 0px;
      margin-top: 30px;
    }

    .subtitle {
      font-size: 18px;
      color: white;
    }

    .button {
      height: 50px;
      width: 50px;
      color: red;
      font-size: 23px;
      border-radius: 5px;
      border: none;
      background-color: #fff;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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
