import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const AddSeller = () => {
  const [data, setData] = useState({
    nimi: "",
    esittely: "",
    tuotteet: [],
    // tuotteita: "",
    username: "",
    password: "",
  });

  const [showPopOver, setShowPopOver] = useState(false);
  const [popOverTitle, setPopOverTitle] = useState();
  const [popOverMessage, setPopOverMessage] = useState();
  const target = useRef(null);

  const [tuotteet, setTuotteet] = useState([]);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    //console.log(data);
  };
  const changeTuotteetData = (e) => {
    setTuotteet([e.target.value]);
    console.log(tuotteet);
    setData({ ...data, tuotteet });
    console.log(data);
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("https://artisaanz.herokuapp.com/seller/add", data)
      .then(setPopOverTitle("Artesaani lisätty"))
      .then(setPopOverMessage("Voit nyt lisätä tuotteita myytäväksi."))
      .catch((error) => {
        setPopOverTitle("Virhe");
        setPopOverMessage("Rekisteröinti ei onnistunut.");
        console.log(error.response.data);
      });
    setShowPopOver(true);
    e.target.reset();
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{popOverTitle}</Popover.Title>
      <Popover.Content>{popOverMessage}</Popover.Content>
    </Popover>
  );

  return (
    <div>
      <Form onSubmit={submitData} className="form">
        <Form.Group>
          <h2>Rekisteröidy artesaaniksi</h2>
          <Form.Label>Nimi:</Form.Label>
          <Form.Control
            type="text"
            width="10px"
            name="nimi"
            required
            onChange={changeData}
          />
        </Form.Group>
        {/* 
        <Form.Group multiple={true}>
          <Form.Label>Tuotteet:</Form.Label>
          <Form.Check label="Pussukat" value="Pussukat" />
          <Form.Check value="Laukut" label="Laukut" />
          <Form.Check type="checkbox" value="Leivokset" label="Leivonnaiset" />
          <Form.Check type="checkbox" value="Villasukat" label="Villasukat" />
          <Form.Check type="checkbox" value="Korut" label="Korut" />
          <Form.Check type="checkbox" value="Sisustus" label="Sisustus" />
          <Form.Check type="checkbox" value="Kalastus" label="Kalastus" />
          <Form.Check type="checkbox" value="Muu" label="Muu" />

          <Form.Check
            type="checkbox"
            label="second radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
          <Form.Check
            value="pussukat"
            type="checkbox"
            label="third radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
          />
        </Form.Group> */}
        <Form.Group>
          <Form.Label>Tuoteryhmät</Form.Label>
          <Row>
            <select
              multiple={true}
              name="tuotteet"
              onChange={changeTuotteetData}
              required
            >
              <option value="Pussukat">Pussukat</option>
              <option value="Laukut">Laukut</option>
              <option value="Leivonnaiset">Leivonnaiset</option>
              <option value="Villasukat">Villasukat</option>
              <option value="Korut">Korut</option>
              <option value="Sisustus">Sisustus</option>
              <option value="Kalastus">Kalastus</option>
              <option value="Muu">Muu</option>
            </select>
          </Row>
        </Form.Group>

        <Form.Group>
          <Form.Label>Käyttäjätunnus:</Form.Label>
          <Form.Control
            type="text"
            width="10px"
            name="username"
            required
            onChange={changeData}
          />
          <Form.Label>Salasana:</Form.Label>
          <Form.Control
            type="text"
            width="10px"
            name="password"
            required
            onChange={changeData}
          />
          {/* <Form.Label>Salasana uudelleen:</Form.Label>
          <Form.Control
            type="text"
            width="10px"
            name="passwordCheck"
            required
            onChange={changeData}
          /> */}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Esittelyteksti:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="esittely"
            required
            onChange={changeData}
          />
        </Form.Group>
        <Button type="submit" className="addbtn" value="Send data" ref={target}>
          Lähetä
        </Button>
        <Overlay target={target.current} placement="left" show={showPopOver}>
          {popover}
        </Overlay>
      </Form>
    </div>
  );
};

export default AddSeller;
