import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="productCard">
       <Link to={`/tuotteet/${props.id}`}>
        <p>{props.nimi}</p>
      </Link>
      <Link to={`/tuotteet/${props.id}`}>
        <img src={props.kuva[0]} alt="tuotteen kuva" />
      </Link>
      <p>Tekijä: {props.tekijä}</p>
      <p>Hinta: {props.hinta}</p>
      <p>Kategoria: {props.kategoria}</p>
    </div>
  );
};

export default ProductCard;
