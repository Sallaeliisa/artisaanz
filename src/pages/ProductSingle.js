import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Components/ProductSingle.css";

const ProductSingle = () => {
  const [tuotteet, setTuotteet] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [popupImg, setPopupImg] = useState();
  const [popupImgId, setPopupImgId] = useState();
  let { id } = useParams();
  const history = useHistory();

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
        <button onClick={close}>Sulje</button>
        <img src={popupImg} alt="iso tuotekuva" />
        <button onClick={() => {
          console.log("clicked")
          tuotteet.kuva
            .filter((item) => popupImgId === item.id+1)
            .map((item) => {
              console.log(popupImgId);
              setPopupImg(item.kuva);
              return <img src={popupImg} alt="iso tuotekuva" />
            })
        }}>Next</button>
      </div>
    );
  };

  const popupHandler = () => {
    setShowPopup(true);
  };

  const close = () => {
    setShowPopup(false);
  }

  if (tuotteet) {
    tuoteData = (
      <div className="singleProduct">
        <div className="mainImage">
          {tuotteet.kuva
            .filter((item) => item.id === 1)
            .map((item) => {
              return (
                <button onClick={() => {
                  setPopupImg(item.kuva);
                  setPopupImgId(item.id);
                  popupHandler()}}>
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
                <button onClick={() => {
                  setPopupImg(item.kuva);
                  setPopupImgId(item.id);
                  popupHandler()}}>
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
      </div>
    );
  }

  return (
    <main>
      {showPopup === true && <Popup />}
      {tuoteData}
    </main>
  );
};

export default ProductSingle;
