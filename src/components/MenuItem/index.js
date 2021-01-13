import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function MenuItem({ title, route, active }) {
  return (
    <li className={`menu-item ${active ? "active" : ""}`}>
      <Link to={route}>{title}</Link>
    </li>
  );
}

export default MenuItem;
