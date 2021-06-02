import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Navigation = () => {
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  // function Select() {
  //   const [value, setValue] = useState("");
  //   const handleSelect = (e) => {
  //     console.log(e);
  //     setValue(e);
  //   };
  // }
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
              id="admin select"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="Riitta Järventie">
                Riitta Järventie
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="Akseli Miettinen"
                //href="/myyjälle"
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
    </nav>
  );
};

export default Navigation;
