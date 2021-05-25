import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductSingle = () => {
  const [tuotteet, setTuotteet] = useState();
  let { id } = useParams();

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
        <h2>{tuotteet.nimi}</h2>
      </div>
    );
  }
  return <div>{tuoteData}</div>;
};

export default ProductSingle;
