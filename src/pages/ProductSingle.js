import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
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
        <ul>
          {tuotteet.kuva.map((item) => {
            return (
              <img
                src={item}
                alt="tuotteen kuva"
                key={tuotteet.kuva.indexOf(item)}
              />
            );
          })}
        </ul>
        <h1>{tuotteet.nimi}</h1>
        <p>{tuotteet.kuvaus}</p>
        <p>Artisaani: {tuotteet.tekijä}</p>
        <p>Hinta: {tuotteet.hinta}</p>
        <p>Kategoria: {tuotteet.kategoria}</p>
      </div>
    );
  }
  return (
    <div>
      {tuoteData}
      <button onClick={() => history.goBack()}>Takaisin</button>
    </div>
  );
};

export default ProductSingle;
