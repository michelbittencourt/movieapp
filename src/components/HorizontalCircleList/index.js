import React from "react";
import { Avatar, makeStyles, Tooltip } from "@material-ui/core";
import { Container } from "./styles";

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

function HorizontalCircleList() {
  const classes = useStyles();

  return (
    <Container>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
        <Tooltip title="Ator" arrow classes={classes}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={`avatar ${index > 0 ? "m-10" : ""}`}
          />
        </Tooltip>
      ))}
    </Container>
  );
}

export default HorizontalCircleList;
