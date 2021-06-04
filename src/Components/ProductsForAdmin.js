import React, { useState, useEffect } from "react";
import ProductCardForAdmin from "./ProductCardForAdmin";
import SearchBox from "../Components/SearchBox";
import ProductSingleForAdmin from "../pages/ProductSingleForAdmin";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "../Components/Products.css";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import { useHistory } from "react-router-dom";

const ProductsForAdmin = () => {
  const [tuote, setTuote] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [seller, setSeller] = useState();

  const history = useHistory();

  useEffect(() => {
    if (history.location.state) {
      setSeller(history.location.state.seller);
    }
  });

  const productFilter = tuote.filter((tuote) => {
    if (seller) {
      return (
        tuote.artesaani.toLowerCase().includes(seller.toLowerCase()) &&
        tuote.nimi.toLowerCase().includes(searchInput.toLowerCase())
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
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  const filteredProducts = productFilter.map((tuote) => {
    return (
      <div key={tuote.id}>
        <ProductCardForAdmin
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

  return (
    <div id="products">
      <Switch>
        <Route path="/munTuotteet/:id">
          <ProductSingleForAdmin />
        </Route>
        <Route path="/:munTuotteet" exact>
          <SearchBox search={searchValueHandler} />
          <div className="filteredProducts">{filteredProducts}</div>
          {loading === false && (
            <Spinner
              className="productSpinner"
              animation="border"
              variant="secondary"
            />
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default ProductsForAdmin;
