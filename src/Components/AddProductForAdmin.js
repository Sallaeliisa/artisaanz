import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import ProductsForAdmin from "./ProductsForAdmin";
import { useHistory } from "react-router-dom";

import "../App.css";
import Products from "../pages/Products";

const AddProductForAdmin = () => {
  const [seller, setSeller] = useState();
  const history = useHistory();
  const [showPopOver, setShowPopOver] = useState(false);
  const [popOverTitle, setPopOverTitle] = useState("Tuote lisätty");
  const [popOverMessage, setPopOverMessage] = useState("Tuote tallennettiin onnistuneesti.");
  const target = useRef(null);

  useEffect(() => {
    if (history.location.state) {
      setSeller(history.location.state.seller);
    }
  });

  const [data, setData] = useState({
    kuva: [],
    nimi: "",
    kuvaus: "",
    hinta: "",
    artesaani: "",
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
    data.artesaani = seller;
    axios.post("https://artisaanz.herokuapp.com/product/add", data)
    .then(setShowPopOver(true))
        .catch((error) => {
          setPopOverTitle("Virhe")
          setPopOverMessage("Tuotetta ei voitu lisätä.")
        });
        e.target.reset()
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{popOverTitle}</Popover.Title>
      <Popover.Content>{popOverMessage}</Popover.Content>
    </Popover>
  );

  return (
    <>
      <div>
        <Form onSubmit={submitData} className="form">
          <Form.Group>
            <h2>Lisää uusi tuote</h2>
            <Form.Label htmlFor="">Tuote:</Form.Label>
            <Form.Control
              type="text"
              width="10px"
              name="nimi"
              required
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
            <option value="Sisustus">Sisustus</option>
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
              required
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
                      required
                      onChange={(e) => changeKuvaData(e, i)}
                    />
                  </Col>
                </Row>
              </Form.Group>
            );
          })}
          <Button className="addbtn" onClick={addMore}>
            Lisää uusi kuva
          </Button>
          <div>
            <h1> </h1>
          </div>
          <Form.Group>
            <Form.Label htmlFor="">Hinta:</Form.Label>
            <Form.Control
              type="number"
              name="hinta"
              required
              onChange={changeData}
            />
          </Form.Group>
            <Button type="submit" className="addbtn" value="Send data" ref={target}>
              Lisää tuote
            </Button>
            <Overlay target={target.current} placement="left" show={showPopOver}>{popover}</Overlay>
        </Form>
      </div>
    </>
  );
};

export default AddProductForAdmin;