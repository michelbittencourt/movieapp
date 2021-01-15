import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Container } from "./styles";

export default function SeeAllCategorieContainer({ title, onClick }) {
  return (
    <Container>
      <h2 className="title">{title}</h2>
      <button className="button-clear" onClick={onClick}>
        Ver todos <ArrowRightIcon className="icon" />
      </button>
    </Container>
  );
}
