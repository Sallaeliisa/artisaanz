import React from "react";
import "./SearchBox.css";
import Form from "react-bootstrap/Form";

const SearchBoxDropdown = ({ search }) => {
  return (
    <>
      <div className="mr-sm-2">
        <Form.Control
          as="select"
          custom
          onChange={search}
          className="secondSearchBox"
        >
          <option>Valitse kategoria</option>
          <option>Pussukat</option>
          <option>Laukut</option>
          <option>Leivonnaiset</option>
          <option>Villasukat</option>
          <option>Korut</option>
          <option>Sisustus</option>
          <option>Kalastus</option>
          <option>Muu</option>
        </Form.Control>
      </div>
    </>
  );
};

export default SearchBoxDropdown;
