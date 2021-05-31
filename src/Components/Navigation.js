import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/kotisivu"> Kotisivu </Link>
        </li>
        <li>
          <Link to="/tuotteet"> Tuotteet </Link>
        </li>
        <li>
          <Link to="/artesaanit"> Artesaanit </Link>
        </li>
        <li>
          <Link to="/meistä"> Meistä </Link>
        </li>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
            Myyjälle
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/myyjälle">Riitta Järventie</Dropdown.Item>
            <Dropdown.Item href="/myyjälle">Akseli Miettinen</Dropdown.Item>
            <Dropdown.Item href="/myyjälle">Salla Vuorikko</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </nav>
  );
};

export default Navigation;
