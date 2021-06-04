import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./SearchBox.css";

const SearchBox = ({ search }) => {
  const [seller, setSeller] = useState();

  const history = useHistory();

  useEffect(() => {
    if (history.location.state) {
      setSeller(history.location.state.seller);
    }
  });

  let searchText = "Hae tuotteen tai artesaanin nimellä";
  if (seller) {
    searchText = "Etsi...";
  }

  return (
    <div className="searchBox">
      <Form inline>
        <Form.Control
          type="text"
          placeholder={searchText}
          className="mr-sm-2"
          onChange={search}
        />
      </Form>
    </div>
  );
};

export default SearchBox;
