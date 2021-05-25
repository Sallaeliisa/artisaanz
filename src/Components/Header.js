import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" exact>
        <h2>Logo</h2>
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
