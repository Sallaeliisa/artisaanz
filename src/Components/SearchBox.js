import React from "react";
import Form from "react-bootstrap/Form";

import "./SearchBox.css";

const SearchBox = ({ search }) => {

  return (
    <div className="searchBox">
      <Form inline>
        <Form.Control
          type="text"

          placeholder="Hae tuotteen tai artesaanin nimellä"
          className="mr-sm-2"
          onChange={search}
        />
      </Form>
    </div>
  );
};

export default SearchBox;
