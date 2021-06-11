import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Makers = () => {
  const [maker, setMaker] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://artisaanz.herokuapp.com/seller/all/")
      .then((response) => setMaker(response.data));
    setLoading(false);
  }, []);

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
