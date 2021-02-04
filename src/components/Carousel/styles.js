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

    .containerCarousel {
      z-index: 90;
      margin: 0 60px;
      padding-bottom: 30px;
      .carousel-slider {
        margin-top: 30px;
        border-radius: 15px;
        overflow: visible;
      }

      .slider {
        height: 600px;
      }

      .control-arrow {
        height: 50px;
        width: 50px;
        color: red;
        font-size: 23px;
        border-radius: 5px;
        border: none;
        background-color: #fff;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
      }

      .control-prev {
        position: absolute;
        left: -25px;
        top: 50%;
        float: left;
        background: url("../../assets/home/iconRight.svg") -48px 8px no-repeat;
      }

      .control-next {
        position: absolute;
        right: -25px;
        top: 50%;
        float: right;
        z-index: 900;
        background: url("../../assets/home/iconLeft.svg") -48px 8px no-repeat;
      }

      .movieBackdrop {
        position: absolute;
        bottom: 0px;
        background-image: linear-gradient(to top, #000000, #ffffff00);
        width: 100%;
        height: 50%;
        margin: 0;
        .movieDescription {
          position: absolute;
          bottom: 40px;
          left: 60px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
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
      margin-top: 50px;
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

  @media (max-width: 599px) {
    .container {
      height: 100vh;

      .title {
        font-size: 27px;
      }
      .subtitle {
        font-size: 15px;
      }

      .containerCarousel {
        .control-next {
          bottom: 0;
          right: 0;
        }
        .control-prev {
          bottom: 0;
          left: 0;
        }
        .carousel .control-dots {
          display: none;
        }
        .slider {
          height: 100%;
        }
        .slide {
          background: transparent;
          img {
            height: 400px;
            border-radius: 15px;
            object-fit: cover;
          }
          .movieBackdrop {
            position: inherit;
            margin-top: 10px;
            background-image: none;
            .movieDescription {
              position: inherit;
              .title {
                font-size: 17px;
                font-weight: 600;
              }
              .description {
                font-size: 14px;
                font-weight: 400;
              }
            }
          }
        }
      }
    }
    .container .background {
      filter: blur(0px);

      img {
        filter: brightness(20%);
        object-fit: cover;
      }
    }

    .container .containerCarousel {
      margin: 0 15px;
    }
  }
`;
