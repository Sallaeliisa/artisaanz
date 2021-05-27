import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/tuotteet"> Tuotteet </Link>
        </li>
        <li>
          <Link to="/tekijät"> Tekijät </Link>
        </li>
        <li>
          <Link to="/meistä"> Meistä </Link>
        </li>
        <li>
          <Link to="/LisääTuote"> Lisää tuote </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
