import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import "../Components/ProductSingle.css";
import Button from "react-bootstrap/Button";
import EditProduct from "./EditProduct";
import { Switch, Route } from "react-router-dom";

const ProductSingleForAdmin = () => {
  const [tuotteet, setTuotteet] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [popupImg, setPopupImg] = useState();
  const [showPopOver, setShowPopOver] = useState(false);
  let { id } = useParams();
  const history = useHistory();
  const target = useRef(null);
  const [popOverTitle, setPopOverTitle] = useState();
  const [popOverMessage, setPopOverMessage] = useState();

  useEffect(() => {
    if (!tuotteet) {
      axios
        .get("https://artisaanz.herokuapp.com/product/find/" + id)
        .then((res) => setTuotteet(res.data));
    }
  });

  let tuoteData = undefined;

  const Popup = () => {
    return (
      <div className="popup">
        <img src={popupImg} alt="iso tuotekuva" onClick={close} />
      </div>
    );
  };
  const removeProduct = () => {
    axios
      .delete("https://artisaanz.herokuapp.com/product/remove/" + id)
      .then(setPopOverTitle("Tuote poistettu"))
      .then(setPopOverMessage("Tämä tuote poistettiin onnistuneesti."))
      .catch((error) => {
        setPopOverTitle("Virhe");
        setPopOverMessage("Tuotetta ei voitu poistaa.");
      });
    setShowPopOver(true);
    console.log("product removed from database");
  };

  const popupHandler = () => {
    setShowPopup(true);
  };

  const close = () => {
    setShowPopup(false);
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
        <div className="mainImage">
          {tuotteet.kuva
            .filter((item) => item.id === 1)
            .map((item) => {
              return (
                <button
                  onClick={() => {
                    setPopupImg(item.kuva);
                    popupHandler();
                  }}
                >
                  <img src={item.kuva} alt="tuotteen kuva" key={item.id} />
                </button>
              );
            })}
        </div>
        {tuotteet.kuva
          .filter((item) => item.id > 1)
          .map((item) => {
            return (
              <ul key={item.id}>
                <button
                  onClick={() => {
                    setPopupImg(item.kuva);
                    popupHandler();
                  }}
                >
                  <img src={item.kuva} alt="tuotteen kuva" key={item.id} />
                </button>
              </ul>
            );
          })}
        <h1>{tuotteet.nimi}</h1>
        <p>{tuotteet.kuvaus}</p>
        <p>
          <Link to={`/artesaanit/${tuotteet.artesaani}`}>
            Artesaani: {tuotteet.artesaani}
          </Link>
        </p>
        <p>Hinta: {tuotteet.hinta} €</p>
        <p>Kategoria: {tuotteet.kategoria}</p>
        <button className="backbtn" onClick={() => history.goBack()}>
          Takaisin
        </button>
        <button className="backbtn">
          <Link to={`/muokkaa/${tuotteet.id}`}>Muokkaa</Link>
        </button>
        <button className="backbtn" ref={target} onClick={removeProduct}>
          Poista tämä tuote
        </button>
        <Overlay target={target.current} placement="bottom" show={showPopOver}>
          {popover}
        </Overlay>
      </div>
    );
  }

  return (
    <main>
      {showPopup && <Popup />}
      {tuoteData}
    </main>
  );
};

export default ProductSingleForAdmin;
