import React from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

// import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    borderRadius: 50,
    border: "1px solid #ccc",
    boxShadow: "none",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 7,
  },
}));

function SearchBarInput() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton
        className={classes.iconButton}
        aria-label="Buscar"
        type="submit"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Busque por filmes, gêneros ou atores"
        inputProps={{ "aria-label": "Busque por filmes, gêneros ou atores" }}
      />
    </Paper>
  );
}

export default SearchBarInput;
