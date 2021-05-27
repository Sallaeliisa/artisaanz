import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ProductCard = ({ id, nimi, kuva, tekijä, hinta, kategoria }) => {
  return (
    <div className="productCard">
      <Card style={{ width: "20rem" }}>
        <Card.Title>
          {" "}
          <Link to={`/tuotteet/${id}`}>
            <p>{nimi}</p>
          </Link>
        </Card.Title>
        <Link to={`/tuotteet/${id}`}>
          <img src={kuva[0].kuva} alt="tuotteen kuva" />
        </Link>
        <Card.Body>
          <Card.Subtitle>Artisaani: {tekijä}</Card.Subtitle>
          <Card.Text>Hinta: {hinta}</Card.Text>
          <Card.Text>Kategoria: {kategoria}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
