import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Container } from "./styles";

function SeeAllContainer({ title, onClick }) {
  return (
    <Container>
      <h3 className="title">{title}</h3>
      <button className="button-clear" onClick={onClick}>
        Ver todos <ArrowRightIcon className="icon" />
      </button>
    </Container>
  );
}
export default SeeAllContainer;
