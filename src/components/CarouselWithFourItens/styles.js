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
            /* transform: perspective(200px) translateZ(10px); */
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
    }
  }
`;
