import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 60px;

  .basicInfo {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    flex-basis: 75%;
    flex: 1;

    .title {
      display: flex;

      h6 {
        font-size: 32px;
        margin: 0;
      }

      .like {
        display: flex;
        align-items: center;
        margin-left: 60px;
        font-size: 15px;
        font-weight: 600;
        color: #333;
        svg {
          color: red;
          width: 15px;
          margin: 0;
          padding: 0;
          padding-right: 5px;
        }
      }
      .rate {
        display: flex;
        align-items: center;
        margin-left: 10px;
        font-size: 15px;
        font-weight: 600;
        color: #333;
        svg {
          color: orange;
          width: 15px;
          margin: 0;
          padding: 0;
          padding-right: 5px;
        }
      }
    }
  }

  .buttonWatch {
    width: 300px;
    height: 50px;
    border-radius: 10px;
  }
`;
