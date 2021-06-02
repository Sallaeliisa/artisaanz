import React from "react";
import AddProductForAdmin from "../Components/AddProductForAdmin";
import ProductsForAdmin from "../Components/ProductsForAdmin";
import Container from "react-bootstrap/Container";

const Admin = () => {
  return (
    <Container fluid>
      <ProductsForAdmin />
      <AddProductForAdmin />
    </Container>
  );
};

export default Admin;
