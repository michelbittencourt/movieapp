import React from "react";
import { CardGenero, Container } from "./styles";

// import { Container } from './styles';

function HorizontalRoundedList({ data }) {
  return (
    <Container>
      {data.map((item, index) => (
        <CardGenero>
          {/* <img
            alt="gender"
            className="genderBackground"
            // src="https://i1.wp.com/geekantenado.com/wp-content/uploads/2019/04/avengersendgame-blogroll-2-1555518573008_1280w.jpg?fit=1280%2C720&ssl=1"
          /> */}
          <h6>{item.name}</h6>
        </CardGenero>
      ))}
    </Container>
  );
}

export default HorizontalRoundedList;
