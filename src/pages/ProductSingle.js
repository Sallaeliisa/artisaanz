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
         <h1>Popup</h1>
        </div>
    );
  };

  const popupHandler = (e) => {
    setShowPopup(true);
    e.preventDefault();
    console.log(showPopup);
  };
  

  if (tuotteet) {
    tuoteData = (
      <div className="singleProduct">
        {tuotteet.kuva
          .filter((item) => item.id === 1)
          .map((item) => {
            return <img src={item.kuva} alt="tuotteen kuva" key={item.id} />;
          })}
        {tuotteet.kuva
          .filter((item) => item.id > 1)
          .map((item) => {
            return (
              <ul key={item.id}>
                <img src={item.kuva} alt="tuotteen kuva" />
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
        <button onClick={popupHandler}>show popup</button>
        <button className="backbtn" onClick={() => history.goBack()}>
          Takaisin
        </button>
      </div>
    );
  }

  // const Popup = () => {

  //   console.log(tuotteet.kuva);
  //   return (
  //       <div className="popup">
  //         Popup
  //       </div>
  //   );
  // };


  return<main>
    <Popup />
    {tuoteData}
    </main>;
};

export default ProductSingle;
