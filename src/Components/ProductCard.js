import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="productCard">
      <Link>
        <p>{props.nimi}</p>
      </Link>
      <Link>
        <img src={props.kuva[0]} alt="tuotteen kuva" />
      </Link>
      <p>Tekijä: {props.tekijä}</p>
      <p>Hinta: {props.hinta}</p>
      <p>Kategoria: {props.kategoria}</p>
    </div>
  );
};

export default ProductCard;
