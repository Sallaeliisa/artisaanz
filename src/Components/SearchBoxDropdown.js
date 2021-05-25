import React from "react";

const SearchBoxDropdown = ({ search }) => {
  return (
    <div>
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
      </datalist>
    </div>
  );
};

export default SearchBoxDropdown;
