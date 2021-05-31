import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Components/ProductSingle.css";

const ProductSingle = () => {
  const [tuotteet, setTuotteet] = useState();
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!tuotteet) {
      axios
        .get("http://localhost:3001/tuotteet/" + id)
        .then((res) => setTuotteet(res.data));
    }
  });

  let tuoteData = undefined;

  if (tuotteet) {
    tuoteData = (
      <div className="singleProduct">
        {tuotteet.kuva
          .filter((item) => item.id === 1)
          .map((item, i) => {
            return <img src={item.kuva} alt="tuotteen kuva" />;
          })}
        {tuotteet.kuva
          .filter((item) => item.id > 1)
          .map((item, i) => {
            return (
              <ul key={i}>
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
        <p>Hinta: {tuotteet.hinta}</p>
        <p>Kategoria: {tuotteet.kategoria}</p>
        <button className="backbtn" onClick={() => history.goBack()}>
          Takaisin
        </button>
      </div>
    );
  }
  return <main>{tuoteData}</main>;
};

export default ProductSingle;
