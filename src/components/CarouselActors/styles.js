import styled from "styled-components";

export const CarouselComponent = styled.div`
  display: inline;
  height: 100px;

  .avatar {
    display: inline-flex;
    height: 70px;
    width: 70px;
    margin: 0 10px;
    border-radius: 100%;
  }

  .avatar:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .container {
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    .carousel {
      flex: 1 !important;
      z-index: 100;
      margin: 0 60px;

      li {
        height: 70px;
        width: 70px !important;
        margin: 0 10px;
        border-radius: 100%;
        div {
          border-radius: 100%;
          img {
            border-radius: 100%;
          }
        }
      }
      li:hover {
        cursor: pointer;
      }
    }

    .slide .carousel__inner-slide img {
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
      border: 1px solid #ccc;
    }

    .button-prev {
      position: absolute;
      left: 0;
      top: 15px;
      float: left;
    }

    .button-next {
      position: absolute;
      right: 0;
      top: 15px;
      float: right;
    }
  }
`;

export const ContainerInfo = styled.caption`
  position: absolute;
  bottom: 0;
  background-color: #fffffff1;
  width: 100%;
  text-align: start;
  padding: 5px 10px;
  h6 {
    margin: 0;
    font-size: 17px;
    font-weight: 600;
  }
  span {
  }
`;
