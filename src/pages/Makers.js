import React from "react";
import Card from "react-bootstrap/Card";

const Makers = () => {
  return (
    <main className="makers">
      <Card style={{ width: "50rem" }}>
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
          <Card.Link href="https://pussukat.wordpress.com/">
            Pussukat kotisivu
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "50rem" }}>
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
        </Card.Body>
      </Card>

      <Card style={{ width: "50rem" }}>
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
        </Card.Body>
      </Card>
    </main>
  );
};

export default Makers;
