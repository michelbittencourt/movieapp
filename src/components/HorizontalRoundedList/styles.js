import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;

  .m-10 {
    margin: 0 10px;
  }
`;

export const CardGenero = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  margin-right: 10px;
  border-radius: 10px;
  background-image: linear-gradient(to top, #ff0844 0%, #ff084499 100%);
  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transform: translateY(-3px);
  }
  .genderBackground {
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
  h6 {
    color: white;
    position: absolute;
    font-size: 17px;
  }
`;
