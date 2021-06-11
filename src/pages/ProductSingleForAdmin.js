import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Modal from "react-bootstrap/Modal";
import "../Components/ProductSingle.css";
import Button from "react-bootstrap/Button";

const ProductSingleForAdmin = () => {
  const [tuotteet, setTuotteet] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [popupImg, setPopupImg] = useState();
  const [showPopOver, setShowPopOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

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
        <button className="adminbtn" onClick={() => history.goadmin()}>
          Takaisin
        </button>
        <button className="adminbtn">
          <Link to={`/muokkaa/${tuotteet.id}`} className="modify">
            Muokkaa
          </Link>
        </button>
        <button className="adminbtn" ref={target} onClick={handleShowModal}>
          Poista tuote
        </button>
        <Overlay target={target.current} placement="bottom" show={showPopOver}>
          {popover}
        </Overlay>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Vahvista poisto</Modal.Title>
          </Modal.Header>
          <Modal.Body>Haluatko varmasti poistaa tämän tuotteen?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Takaisin
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                removeProduct();
                handleCloseModal();
              }}
            >
              Poista
            </Button>
          </Modal.Footer>
        </Modal>
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
