import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Makers = () => {
  const [maker, setMaker] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState("");

  useEffect(() => {
    axios
      .get("https://artisaanz.herokuapp.com/seller/all/")
      .then((response) => setMaker(response.data));
    setLoading(false);
  }, []);

  if (maker.id === 3) {
    setProducts("Tuotteet: kassit, pussukat, käsilaukut");
  }
  if (maker.id === 2) {
    setProducts("Tuotteet: villasukat");
  }
  if (maker.id === 1) {
    setProducts("Tuotteet: leivonnaiset");
  }

  const makers = maker.map((maker) => {
    if (maker.id === 3) {
      return (
        <Card className="makersCard" key={maker.id}>
          {loading === true && (
            <Spinner
              className="productSpinner"
              animation="border"
              variant="secondary"
            />
          )}
          <Card.Body>
            <Card.Title>{maker.nimi}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Tuotteet: kassit, pussukat, käsilaukut
            </Card.Subtitle>
            <Card.Text>{maker.esittely}</Card.Text>
            <Link
              to={{
                pathname: "/tuotteet",
                state: { seller: maker.nimi },
              }}
            >
              Artesaanin tuotteet
            </Link>
            <Card.Link href="https://pussukat.wordpress.com/" target="_blank">
              Pussukat kotisivu
            </Card.Link>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <Card className="makersCard" key={maker.id}>
          {loading === true && (
            <Spinner
              className="productSpinner"
              animation="border"
              variant="secondary"
            />
          )}
          <Card.Body>
            <Card.Title>{maker.nimi}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Tuotteet: {maker.tuotteet}
            </Card.Subtitle>
            <Card.Text>{maker.esittely}</Card.Text>
            <Link
              to={{
                pathname: "/tuotteet",
                state: { seller: maker.nimi },
              }}
            >
              Artesaanin tuotteet
            </Link>
          </Card.Body>
        </Card>
      );
    }
  });

  return <main className="makers">{makers}</main>;
};

export default Makers;
