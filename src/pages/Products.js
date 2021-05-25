import React, { Component } from "react";
import ProductCard from "../Components/ProductCard";
import SearchBox from "../Components/SearchBox";
import "../Components/Products.css";

class Products extends Component {
  state = {
    tuote: [],
    searchInput: "",
  };

  componentDidMount() {
    fetch("http://localhost:3001/tuotteet")
      .then((resp) => resp.json())
      .then((data) => this.setState({ tuote: data }));
  }

  searchValueHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };


  render() {
    const productFilter = this.state.tuote.filter((tuote) => {
      return tuote.nimi
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    const filteredProducts = productFilter.map((tuote) => {
      return (
        <ProductCard
            key={tuote.id}
            kuva={tuote.kuva}
            nimi={tuote.nimi}
            tekijä={tuote.tekijä}
            hinta={tuote.hinta}
            kategoria={tuote.kategoria}
        />
      );
    });


    return (
      <section id="products">
        <SearchBox search={this.searchValueHandler} />
        <div className="filteredProducts">{filteredProducts}</div>
      </section>
    );
  }
}

export default Products;