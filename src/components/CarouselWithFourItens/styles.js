import styled from "styled-components";

export const CarouselComponent = styled.div`
  display: inline;
  height: 400px;
  .container {
    display: flex;
    justify-content: center;
    position: relative;
    flex-direction: column;
    margin: 15px 60px;
    overflow: visible;
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

    .carousel-slider {
      margin-top: 30px;
      border-radius: 5px;
      overflow: visible;
    }

    .carousel .slider-wrapper {
      overflow: visible;
    }

    .slider {
      height: 300px;
    }

    .slide {
      background: transparent;
      margin: 0 10px;
      width: 200px;
      img {
        height: 300px;
        border-radius: 5px;
        object-fit: cover;
      }
    }

    .slide:hover {
      perspective: 300px;
      perspective-origin: center;
      z-index: 100;
      div {
        transform: translateZ(70px) perspective(300px);
        transform-style: preserve-3d;
        transition: all 300ms ease-in-out;
      }
    }

    .control-arrow {
      height: 50px;
      width: 50px;
      color: red;
      font-size: 23px;
      border-radius: 5px;
      border: none;
      background-color: #fff;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      opacity: 1;
    }

    .control-prev {
      position: absolute;
      left: -25px;
      top: 50%;
      float: left;
      background-color: #fff;
      background: url("../../assets/home/iconRight.svg") -48px 8px no-repeat #f44336;
    }

    .control-next {
      position: absolute;
      right: -25px;
      top: 50%;
      float: right;
      z-index: 900;
      background-color: #fff;
      background: url("../../assets/home/iconLeft.svg") -48px 8px no-repeat #f44336;
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

    /* .carousel {
      flex: 1 !important;
      z-index: 100;
      margin: 10px 60px;
      margin-bottom: 30px;

      li {
        height: 230px;
        div {
          height: 300px;
        }
      }

      li:hover {
        cursor: pointer;
        transform: perspective(200px) translateZ(10px);
        div {
          transform: perspective(200px) translateZ(10px);
          img {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
          }
        }
      }
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
      background-color: #fff;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    .button-prev {
      position: absolute;
      left: 35px;
      top: 50%;
      float: left;
    }

    .button-next {
      position: absolute;
      right: 35px;
      top: 50%;
      float: right;
    } */
  }
`;
