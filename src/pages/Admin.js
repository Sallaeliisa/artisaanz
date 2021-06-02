import React from "react";
import AddProductForAdmin from "./AddProductForAdmin";
import ProductsForAdmin from "./ProductsForAdmin";

const Admin = () => {
  return (
    <div>
      <ProductsForAdmin />
      <AddProductForAdmin />
    </div>
  );
};

export default Admin;
