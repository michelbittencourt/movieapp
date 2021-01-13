import React from "react";
import Menu from "../Menu";
import Profile from "../Profile";
import SearchBarInput from "../SearchBarInput";
import { Container, Header, Navigation } from "./styles";

// import { Container } from './styles';

function NavBar() {
  return (
    <Header>
      <Navigation>
        <Menu />
      </Navigation>
      <Container>
        <SearchBarInput />
        <Profile />
      </Container>
    </Header>
  );
}

export default NavBar;
