import React from "react";
import Card from "react-bootstrap/Card";

const Makers = () => {
  return (
    <main>
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
    </main>
  );
};

export default Makers;
