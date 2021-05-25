import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="productCard">
      <Link>
        <p>Tuotteen nimi</p>
      </Link>
      <Link>
        <img src="" alt="tuotteen kuva" />
      </Link>
      <p>Tekijä:</p>
      <p></p>
      <p>Hinta:</p>
      <p>Kategoria: </p>
    </div>
  );
};

export default ProductCard;
