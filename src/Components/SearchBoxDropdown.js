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
        </Form.Control>
      </div>
      {/* 
      <div className="mr-sm-2">
        <input
          className="secondSearchBox"
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Etsi kategorialla..."
          onChange={search}
          type="select"
        />

        <datalist id="datalistOptions">
          <option value="Pussukat" />
          <option value="Laukut" />
          <option value="Leivonnaiset" />
          <option value="Villasukat" />
          <option value="Korut" />
          <option value="Sisustus" />
        </datalist>
      </div> */}
    </>
  );
};

export default SearchBoxDropdown;
