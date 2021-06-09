import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import "../App.css";
import "../Components/Products.css";

const AddSeller = () => {
  const [data, setData] = useState({
    nimi: "",
    esittely: "",
    // tuotteet: [],
    // tuotteita: "",
    username: "",
    password: "",
    passwordCheck: "",
  });

  const [passwordCheck, setPasswordCheck] = useState({
    passwordCheck: "",
  });

  const [showPopOver, setShowPopOver] = useState(false);
  const [popOverTitle, setPopOverTitle] = useState();
  const [popOverMessage, setPopOverMessage] = useState();
  const target = useRef(null);

  // const [tuotteet, setTuotteet] = useState([]);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const changeTuotteetData = (e) => {
  //   setTuotteet([e.target.value]);
  //   console.log(tuotteet);
  //   setData({ ...data, tuotteet });
  //   console.log(data);
  // };

  const changePassWordCheck = (e) => {
    setPasswordCheck({ ...passwordCheck, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(passwordCheck);
    if (passwordCheck.passwordCheck === data.password) {
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
    } else {
      setShowPopOver(true);
      setPopOverTitle("Virhe");
      setPopOverMessage(
        "Tarkista, että kirjoitit saman salasanan kumpaankin kenttään."
      );
    }
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

        {/* <Form.Group>
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
        </Form.Group> */}

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
            type="password"
            width="10px"
            name="password"
            required
            onChange={changeData}
          />
          <Form.Label>Salasana uudelleen:</Form.Label>
          <Form.Control
            type="password"
            width="10px"
            name="passwordCheck"
            required
            onChange={changePassWordCheck}
          />
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
        <Overlay target={target.current} placement="right" show={showPopOver}>
          {popover}
        </Overlay>
      </Form>
    </div>
  );
};

export default AddSeller;
