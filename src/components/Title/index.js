import React from "react";
import { STitulo } from "./styles";

// import { Container } from './styles';

export default function Title({ title }) {
  return <STitulo className="titleContainer">{title}</STitulo>;
}
