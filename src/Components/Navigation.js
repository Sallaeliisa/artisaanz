import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
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
        <li>
          <Dropdown>
            <DropdownButton alignRight title="Valitse myyjä">
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/myyjälle",
                    state: { seller: "Riitta Järventie" },
                  }}
                >
                  Riitta Järventie
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/myyjälle",
                    state: { seller: "Akseli Miettinen" },
                  }}
                >
                  Akseli Miettinen
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/myyjälle",
                    state: { seller: "Salla Vuorikko" },
                  }}
                >
                  Salla Vuorikko
                </Link>
              </Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
