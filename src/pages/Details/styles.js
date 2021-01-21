import styled from "styled-components";

export const Container = styled.div`
  .titleContainer {
    margin-left: 60px;
  }

  section {
    margin-top: 30px !important;
  }

  .m-60 {
    margin: 0 60px;
  }
`;

export const CardOverview = styled.div`
  display: flex;
  .left {
    flex-basis: 50%;
    .card {
      height: 300px;
      background-color: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      border-radius: 10px;
      padding: 20px 30px;
      margin-right: 5px;
      .card-header {
        margin: 10px 0;

        span {
          margin: 0 5px;
          font-size: 17px;
          font-weight: 700;
        }

        span:nth-child(1) {
          margin: 0;
        }
      }
      .card-body {
        font-size: 17px;
        line-height: 1.5;
      }
    }
  }
  .right {
    flex-basis: 50%;
    .card:nth-child(1) {
      margin-bottom: 5px;
    }
    .card:nth-child(2) {
      margin-top: 5px;
    }
    .card {
      height: 128px;
      background-color: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      border-radius: 10px;
      padding: 20px 30px;
      margin-left: 5px;
      .card-header {
        margin: 10px 0;

        span {
          margin: 0 5px;
          font-size: 17px;
          font-weight: 700;
        }

        span:nth-child(1) {
          margin: 0;
        }
      }
      .card-body {
        font-size: 17px;
        line-height: 1.5;
        span {
          margin-right: 20px;
          font-size: 15px;
        }
      }
    }
  }
`;
