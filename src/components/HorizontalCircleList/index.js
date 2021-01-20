import React from "react";
import { Avatar, makeStyles, Tooltip } from "@material-ui/core";
import { Container } from "./styles";
import { baseURLImages } from "../../services/api";

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

function HorizontalCircleList({ data }) {
  const classes = useStyles();

  return (
    <Container>
      {data?.map((item, index) => (
        <Tooltip title={item?.name} arrow classes={classes}>
          <Avatar
            alt={item?.name}
            src={`${baseURLImages}${item?.profile_path}`}
            className={`avatar ${index > 0 ? "m-10" : ""}`}
          />
        </Tooltip>
      ))}
    </Container>
  );
}

export default HorizontalCircleList;
