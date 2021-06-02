import React from "react";

import "./SearchBox.css";

const SearchBoxDropdown = ({ search }) => {
  return (
    <>
      <div className="mr-sm-2">
        <input
          className="secondSearchBox"
          class="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Etsi kategorialla..."
          onChange={search}
        />
        <datalist id="datalistOptions">
          <option value="Pussukat" />
          <option value="Laukut" />
          <option value="Leivonnaiset" />
          <option value="Villasukat" />
          <option value="Korut" />
          <option value="Sisustus" />
        </datalist>
      </div>
    </>
  );
};

export default SearchBoxDropdown;
