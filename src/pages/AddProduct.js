import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../App.css";

const AddProduct = () => {
  const [data, setData] = useState({
    kuva: [],
    nimi: "",
    kuvaus: "",
    hinta: "",
    tekijä: "",
    recipeCategory: "Pussukka",
  });

  const [kuvat, setKuvat] = useState([{ id: 1 }]);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeKuvaData = (e, i) => {
    const { name, value } = e.target;
    const list = [...kuvat];
    list[i][name] = value;
    setKuvat(list);
    setData({ ...data, kuva: kuvat });
  };

  const addMore = (e, i) => {
    e.preventDefault();
    const newKuva = { id: kuvat.length + 1 };
    setKuvat((prevState) => [...prevState, newKuva]);
  };

  const submitData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/tuotteet", data);
    e.target.reset();
  };

  return (
    <Form onSubmit={submitData} className="form">
      <Form.Group>
        <Form.Label htmlFor="">Tuote:</Form.Label>
        <Form.Control
          type="text"
          width="10px"
          name="nimi"
          onChange={changeData}
        />
      </Form.Group>
      <br></br>
      <select name="kategoria" onChange={changeData} required>
        <option value="noValue">Valitse Kategoria:</option>
        <option value="Pussukat">Pussukat</option>
        <option value="Laukut">Laukut</option>
        <option value="Leivonnaiset">Leivonnaiset</option>
        <option value="Villasukat">Villasukat</option>
        <option value="Korut">Korut</option>
      </select>
      <div>
        <h1> </h1>
      </div>
      <Form.Group>
        <Form.Label htmlFor="">Tuotteen kuvaus:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          name="kuvaus"
          onChange={changeData}
        />
      </Form.Group>
      {kuvat.map((_, i) => {
        return (
          <Form.Group>
            <Row>
              <Col>
                <Form.Label htmlFor="">Kuvat:</Form.Label>
                <Form.Control
                  type="text"
                  name="kuva"
                  onChange={(e) => changeKuvaData(e, i)}
                />
              </Col>
            </Row>
          </Form.Group>
        );
      })}
      <Button variant="secondary" size="m" onClick={addMore}>
        Lisää kuva
      </Button>
      <div>
        <h1> </h1>
      </div>
      <Form.Group>
        <Form.Label htmlFor="">Hinta:</Form.Label>
        <Form.Control type="text" name="hinta" onChange={changeData} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Tekijä:</Form.Label>
        <Form.Control type="text" name="tekijä" onChange={changeData} />
      </Form.Group>

      <Button type="submit" variant="secondary" size="m" value="Send data">
        Lisää tuote
      </Button>
    </Form>
  );
};

export default AddProduct;
