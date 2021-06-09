import React, { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import SearchBoxDropdown from "../Components/SearchBoxDropdown";
import SearchBox from "../Components/SearchBox";
import ProductSingle from "./ProductSingle";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../Components/Products.css";
import Spinner from "react-bootstrap/Spinner";

const Products = () => {
  const [tuote, setTuote] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [seller, setSeller] = useState();

  const history = useHistory();
  let dropdownShow = "";

  useEffect(() => {
    if (history.location.state) {
      setSeller(history.location.state.seller);
    }
  });

  const productFilter = tuote.reverse().filter((tuote) => {
    if (seller) {
      return (
        tuote.artesaani.toLowerCase().includes(seller.toLowerCase()) &&
        tuote.nimi.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else {
      return (
        tuote.nimi.toLowerCase().includes(searchInput.toLowerCase()) ||
        tuote.artesaani.toLowerCase().includes(searchInput.toLowerCase()) ||
        tuote.kategoria.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  });

  useEffect(() => {
    axios
      .get("https://artisaanz.herokuapp.com/product/all")
      .then(setLoading(true))
      .then((resp) => setTuote(resp.data));
    setLoading(true);
  }, []);

  const searchValueHandler = (e) => {
    if (e.target.value === "Valitse kategoria") {
      setSearchInput("");
    } else {
      setSearchInput(e.target.value);
    }
    console.log(searchInput);
  };

  const removeSeller = () => {
    history.location.state = "";
    setSeller(false);
  };

  const filteredProducts = productFilter.map((tuote) => {
    return (
      <div key={tuote.id}>
        <ProductCard
          id={tuote.id}
          key={tuote.id}
          kuva={tuote.kuva}
          nimi={tuote.nimi}
          artesaani={tuote.artesaani}
          hinta={tuote.hinta}
          kategoria={tuote.kategoria}
        />
      </div>
    );
  });
  if (!seller) {
    dropdownShow = <SearchBoxDropdown search={searchValueHandler} />;
  }

  return (
    <main id="products">
      <>{dropdownShow}</>
      <Switch>
        <Route path="/tuotteet/:id">
          <ProductSingle />
        </Route>
        <Route path="/tuotteet" exact>
          <SearchBox search={searchValueHandler} />
          <div className="filteredProducts">{filteredProducts}</div>
          {seller && (
            <div>
              <button className="backbtn" onClick={() => history.goBack()}>
                Takaisin
              </button>
              <button className="backbtn" onClick={() => removeSeller()}>
                Kaikkien artesaanien tuotteet
              </button>
            </div>
          )}
          {loading === false && (
            <Spinner
              className="productSpinner"
              animation="border"
              variant="secondary"
            />
          )}
        </Route>
      </Switch>
    </main>
  );
};

export default Products;
