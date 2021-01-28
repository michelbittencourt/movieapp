import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;

  .avatar {
    display: inline-flex;
    height: 70px;
    width: 70px;
    margin: 0 10px;
  }

  .avatar:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .m-10 {
    margin: 0 10px;
  }
`;
