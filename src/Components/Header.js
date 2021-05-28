import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Link to="/" exact>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Navigation />
      </Navbar>
    </header>
  );
};

export default Header;
