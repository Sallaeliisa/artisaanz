import React, { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import SearchBox from "../Components/SearchBox";
import ProductSingle from "./ProductSingle";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "../Components/Products.css";

const Products = () => {
  const [tuotteet, setTuotteet] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const productFilter = tuotteet.filter((tuote) => {
    return (
      tuote.nimi.toLowerCase().includes(searchInput.toLowerCase()) ||
      tuote.tekijä.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/tuotteet")
      .then((resp) => setTuotteet(resp.data));
  }, []);

  const searchValueHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredProducts = productFilter.map((tuote) => {
    return (
      <div key={tuote.id}>
        <ProductCard
          id={tuote.id}
          key={tuote.id}
          kuva={tuote.kuva}
          nimi={tuote.nimi}
          tekijä={tuote.tekijä}
          hinta={tuote.hinta}
          kategoria={tuote.kategoria}
        />
      </div>
    );
  });

  return (
    <section id="products">
      <Switch>
        <Route path="/tuotteet/:id">
          <ProductSingle />
        </Route>
        <Route path="/tuotteet" exact>
          <SearchBox search={searchValueHandler} />
          <div className="filteredProducts">{filteredProducts}</div>
        </Route>
      </Switch>
    </section>
  );
};

export default Products;
