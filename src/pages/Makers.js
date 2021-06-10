import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Makers = () => {
  const [maker, setMaker] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [tuotteet, setTuote] = useState([]);

  useEffect(() => {
    axios
      .get("https://artisaanz.herokuapp.com/seller/all/:splat 200!")
      .then((response) => setMaker(response.data));
    setLoading(false);
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://artisaanz.herokuapp.com/product/all/")
  //     .then((response) => setTuote(response.data));
  // }, []);

  // const haeKategoriat = (nimi) => {
  //   let kategoriat = tuotteet.map((tuote) => {
  //     if (tuote.includes(nimi)) {
  //       return tuote.kategoria;
  //     }
  //   });
  //   return kategoriat[0];
  // };

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
            {/* <Card.Subtitle className="mb-2 text-muted">
              Tuotteet: kassit, pussukat, käsilaukut
            </Card.Subtitle> */}
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
            {/* <Card.Subtitle className="mb-2 text-muted">
              Tuotteryhmät tulee näkymään tässä
            </Card.Subtitle> */}
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

  return (
    <main className="makers">
      {makers}
      <p>Muutos!</p>
    </main>
  );
};

export default Makers;
