import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import ProductsForAdmin from "../Components/ProductsForAdmin";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "../App.css";
import Products from "./Products";

const EditProduct = () => {
  const [data, setData] = useState({
    //kuva: [],
    nimi: "",
    kuvaus: "",
    hinta: "",
    artesaani: "",
    kategoria: "",
  });
  const [tuotteet, setTuotteet] = useState();
  const [showPopOver, setShowPopOver] = useState(false);
  const [popOverTitle, setPopOverTitle] = useState("Tuote päivitetty");
  const [popOverMessage, setPopOverMessage] = useState(
    "Tekemäsi muutokset tallennettiin onnistuneesti."
  );
  let { id } = useParams();
  const history = useHistory();
  const target = useRef(null);
  console.log("product id: " + id);

  useEffect(() => {
    if (!tuotteet) {
      axios
        .get("https://artisaanz.herokuapp.com/product/find/" + id)
        .then((res) => setTuotteet(res.data));
    }
  });
  let tuoteData = undefined;

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  /*************kuvien lisäys********/
  // const [kuvat, setKuvat] = useState([{ id: 1 }]);

  // const changeKuvaData = (e, i) => {
  //   const { name, value } = e.target;
  //   const list = [...kuvat];
  //   list[i][name] = value;
  //   setKuvat(list);
  //   setData({ ...data, kuva: kuvat });
  // };

  // const addMore = (e, i) => {
  //   e.preventDefault();
  //   const newKuva = { id: kuvat.length + 1 };
  //   setKuvat((prevState) => [...prevState, newKuva]);
  // };
  /******kuvien lisäyshommelit loppuu*****/

  const editData = (e) => {
    e.preventDefault();
    console.log("Let's edit...");
    if (data.nimi !== "") {
      axios
        .post(
          "https://artisaanz.herokuapp.com/product/editnimi/" +
            id +
            "/" +
            data.nimi
        )
        .then(setShowPopOver(true))
        .catch((error) => {
          setPopOverTitle("Virhe");
          setPopOverMessage("Muutoksia ei voitu tallentaa.");
        });
    }
    if (data.kuvaus !== "") {
      axios
        .post(
          "https://artisaanz.herokuapp.com/product/editkuvaus/" +
            id +
            "/" +
            data.kuvaus
        )
        .then(setShowPopOver(true))
        .catch((error) => {
          setPopOverTitle("Virhe");
          setPopOverMessage("Muutoksia ei voitu tallentaa.");
        });
    }
    if (data.hinta !== "") {
      axios
        .post(
          "https://artisaanz.herokuapp.com/product/edithinta/" +
            id +
            "/" +
            data.hinta
        )
        .then(setShowPopOver(true))
        .catch((error) => {
          setPopOverTitle("Virhe");
          setPopOverMessage("Muutoksia ei voitu tallentaa.");
        });
    }
    if (data.artesaani !== "") {
      axios
        .post(
          "https://artisaanz.herokuapp.com/product/editartesaani/" +
            id +
            "/" +
            data.artesaani
        )
        .then(setShowPopOver(true))
        .catch((error) => {
          setPopOverTitle("Virhe");
          setPopOverMessage("Muutoksia ei voitu tallentaa.");
        });
    }
    if (data.kategoria !== "") {
      axios.post(
        "https://artisaanz.herokuapp.com/product/editkategoria/" +
          id +
          "/" +
          data.kategoria
      );
    }
    if (
      data.nimi === "" &&
      data.kuvaus === "" &&
      data.hinta === "" &&
      data.kategoria === "" &&
      data.artesaani === ""
    )
      console.log("Done!");
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{popOverTitle}</Popover.Title>
      <Popover.Content>{popOverMessage}</Popover.Content>
    </Popover>
  );

  if (tuotteet) {
    tuoteData = (
      <div className="singleProduct">
        <h3>{tuotteet.nimi}</h3>
        <Form onSubmit={editData} className="form">
          <Form.Group>
            <Form.Label htmlFor="">Tuotteen nimi:</Form.Label>
            <Form.Control
              type="text"
              width="10px"
              name="nimi"
              maxlength="20"
              placeholder={tuotteet.nimi}
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
              maxlength="255"
              rows={3}
              type="text"
              name="kuvaus"
              placeholder={tuotteet.kuvaus}
              onChange={changeData}
            />
          </Form.Group>
          {/* {kuvat.map((_, i) => {
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
          <Button className="addbtn" onClick={addMore}>
            Lisää kuva
          </Button> */}
          <div>
            <h1> </h1>
          </div>
          <Form.Group>
            <Form.Label htmlFor="">Hinta:</Form.Label>
            <Form.Control
              type="number"
              name="hinta"
              min="1"
              max="999"
              placeholder={tuotteet.hinta}
              onChange={changeData}
            />
          </Form.Group>
          <button
            type="submit"
            className="addbtn"
            value="Send data"
            ref={target}
          >
            Päivitä tuote
          </button>
          <Overlay target={target.current} placement="left" show={showPopOver}>
            {popover}
          </Overlay>
          <button className="backbtn" onClick={() => history.goBack()}>
            Takaisin
          </button>
        </Form>
      </div>
    );
  }

  return <Container>{tuoteData}</Container>;
};

export default EditProduct;
