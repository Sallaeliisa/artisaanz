import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, nimi, kuva, tekijä, hinta, kategoria }) => {
  return (
    <div className="productCard">
      <Link to={`/tuotteet/${id}`}>
        <p>{nimi}</p>
      </Link>
      <Link to={`/tuotteet/${id}`}>
        <img src={kuva[0].kuva} alt="tuotteen kuva" />
      </Link>
      <p>Artesaani: {tekijä}</p>
      <p>Hinta: {hinta}</p>
      <p>Kategoria: {kategoria}</p>
    </div>
  );
};

export default ProductCard;
