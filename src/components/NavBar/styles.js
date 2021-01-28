import styled from "styled-components";
import { Cores } from "./../../styles/colors";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  z-index: 1000;
  background-color: ${Cores.background};
`;

export const Navigation = styled.nav`
  .menu {
    padding: 0px;
    margin: 0;
    list-style: none;
    .menu-item {
      display: inline;
    }
    .menu-item a {
      display: inline-grid;
      padding: 2px 15px;
      text-decoration: none;
      font-weight: 600;
      color: #ccc;
    }
    .active a {
      color: #000 !important;
    }

    .menu-item a:hover {
      color: #000 !important;
      transition: all 0.3s ease-in-out;

      &:after {
        content: "";
        background-color: ${Cores.accent};
        height: 5px;
        width: 30px;
        display: inline;
        margin: 0 auto;
        margin-top: 5px;
        border-radius: 100px;
      }
    }

    .active a:after {
      content: "";
      background-color: ${Cores.accent};
      height: 5px;
      width: 30px;
      display: inline;
      margin: 0 auto;
      margin-top: 5px;
      border-radius: 100px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
