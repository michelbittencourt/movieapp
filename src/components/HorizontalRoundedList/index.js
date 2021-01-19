import React from "react";
import { Avatar, makeStyles, Tooltip } from "@material-ui/core";
import { CardGenero, Container } from "./styles";

// import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: 13,
  },
}));

function HorizontalRoundedList() {
  const classes = useStyles();

  return (
    <Container>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
        <CardGenero>
          <img
            alt="gender"
            className="genderBackground"
            src="https://i1.wp.com/geekantenado.com/wp-content/uploads/2019/04/avengersendgame-blogroll-2-1555518573008_1280w.jpg?fit=1280%2C720&ssl=1"
          />
          <h6>item</h6>
        </CardGenero>
      ))}
    </Container>
  );
}

export default HorizontalRoundedList;
