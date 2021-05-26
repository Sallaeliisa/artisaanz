import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" exact>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
