import React from "react";
import Form from "react-bootstrap/Form";

import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div className="searchBox">
      <Form inline>
        <Form.Control
          type="text"
          placeholder="Hae tuotteen tai tekijän nimellä"
          className="mr-sm-2"
          onChange={props.search}
        />
      </Form>
    </div>
  );
};

export default SearchBox;
