import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

const AddSeller = () => {
  const [data, setData] = useState({
    nimi: "",
    esittely: "",
    // tuotteet: [],
    // tuotteita: "",
    username: "",
    password: "",
  });

  const [showPopOver, setShowPopOver] = useState(false);
  const [popOverTitle, setPopOverTitle] = useState();
  const [popOverMessage, setPopOverMessage] = useState();
  const target = useRef(null);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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
          {/* <Form.Label>tuotteet:</Form.Label>
          <Form.Control
            type="text"
            width="10px"
            name="tuotteet"
            onChange={changeData}
          />
          <Form.Label>tuotteita:</Form.Label>
          <Form.Control
            type="number"
            width="10px"
            name="tuotteita"
            required
            onChange={changeData}
          /> */}
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
        <button type="submit" value="Send data">
          Lähetä
        </button>
        <Overlay target={target.current} placement="left" show={showPopOver}>
          {popover}
        </Overlay>
      </Form>
    </div>
  );
};

export default AddSeller;
