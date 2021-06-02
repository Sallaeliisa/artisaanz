import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Navigation = () => {
  const handleSelect = () => {
    console.log("selected Riitta!");
  };
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
        <li>
          <Dropdown>
            {/* <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
            Myyjälle
          </Dropdown.Toggle> */}
            <DropdownButton
              alignRight
              title="Valitse myyjä"
              id="dropdown-menu-align-right"
            >
              <Dropdown.Item
                onSelect={handleSelect}
                id="Riitta Järventie"
                title="Riitta Järventie"
                href="/myyjälle"
              >
                Riitta Järventie
              </Dropdown.Item>
              <Dropdown.Item href="/myyjälle">Akseli Miettinen</Dropdown.Item>
              <Dropdown.Item href="/myyjälle">Salla Vuorikko</Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
