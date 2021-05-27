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

  let productData = undefined;
  let mainImage = undefined;
  let moreImages = undefined;

  if (tuotteet) {
    
    productData = (

      <div className="singleProduct">
        <h1>{tuotteet.nimi}</h1>
        <p>{tuotteet.kuvaus}</p>
        <p>Artisaani: {tuotteet.tekijä}</p>
        <p>Hinta: {tuotteet.hinta}</p>
        <p>Kategoria: {tuotteet.kategoria}</p>
      </div>
    );

    mainImage = (
      <div className="mainImage">
        <img src={tuotteet.kuva[0].kuva} alt="tuotteen kuva" />
      </div>
    );

    moreImages = (
      <div className="moreImages">
        <ul>
          {tuotteet.kuva.map((item, i) => {
            return (
              <ul key={i}>
                <button><img src={item.kuva} alt="tuotteen kuva" /></button>
              </ul>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {mainImage}
      {moreImages}
      {productData}
      <button onClick={() => history.goBack()}>Takaisin</button>
    </div>
  );
};

export default ProductSingle;
