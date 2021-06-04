import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Makers = () => {
  
  return (
    <main className="makers">
      <Card className="makersCard" style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>Riitta Järventie</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Tuotteet: kassit, pussukat, käsilaukut
          </Card.Subtitle>
          <Card.Text>
            Olen aina pitänyt käsitöiden tekemisestä ja nyt eläkeläisenä minulla
            on runsaasti aikaa tehdä erilaisia tuotteita. Ohessa olevasta
            linkistä löydät lisää tuotoksiani.
          </Card.Text>
          <Link
            to={{ pathname: "/tuotteet", state: { seller: "Riitta Järventie" } }}
          >
            Artesaanin tuotteet
          </Link>
          <Card.Link href="https://pussukat.wordpress.com/" target="_blank">
            Pussukat kotisivu
          </Card.Link>
        </Card.Body>
      </Card>

      <Card className="makersCard" style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>Akseli Miettinen</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Tuotteet: Leivonnaiset
          </Card.Subtitle>
          <Card.Text>
            Hapanjuureni täytti juuri vuoden. Tästä ikiomasta juuresta leivotut
            näyttävät ja maukkaat leivät ovat intohimoni. Kehittelen jatkuvasti
            uusia reseptejä ja makuvivahteita.
          </Card.Text>
          <Link
            to={{ pathname: "/tuotteet", state: { seller: "Akseli Miettinen" } }}
          >
            Artesaanin tuotteet
          </Link>
        </Card.Body>
      </Card>

      <Card className="makersCard" style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>Salla Vuorikko</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Tuotteet: Villasukat
          </Card.Subtitle>
          <Card.Text>
            Neulominen rentouttaa ja on mukavaa puuhaa. Sukkia on syntynyt sitä
            tahtia että tutut ja sukulaiset ovat omansa jo saaneet. Nyt
            lopuillekin sukkapareille toivottavasti löytyy tätä kautta oma koti.{" "}
          </Card.Text>
          <Link
            to={{ pathname: "/tuotteet", state: { seller: "Salla Vuorikko" } }}
          >
            Artesaanin tuotteet
          </Link>
        </Card.Body>
      </Card>
    </main>
  );
};

export default Makers;
