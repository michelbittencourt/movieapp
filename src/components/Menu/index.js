import React from "react";
import MenuItem from "../MenuItem";

// import { Container } from './styles';

export default function Menu() {
  return (
    <ul className="menu">
      <MenuItem title="Início" route="/" active={true} />
      <MenuItem title="Descobrir" route="/descobrir" />
      <MenuItem title="Favoritos" route="/" />
    </ul>
  );
}
