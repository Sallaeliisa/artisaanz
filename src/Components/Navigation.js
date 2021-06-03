import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Navigation = () => {
  const [admin, setAdmin] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setAdmin(e);
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
            <DropdownButton
              alignRight
              title="Valitse myyjä"
              id="admin select"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="Riitta Järventie">
                Riitta Järventie
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="Akseli Miettinen"
                href="/myyjälle/Akseli"
              >
                Akseli Miettinen
              </Dropdown.Item>
              <Dropdown.Item eventKey="Salla Vuorikko" href="/myyjälle">
                Salla Vuorikko
              </Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </li>
      </ul>
      <h3> {admin}</h3>
    </nav>
  );
};

export default Navigation;
