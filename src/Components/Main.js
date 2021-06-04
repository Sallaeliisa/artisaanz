import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Products from "../pages/Products";
import Makers from "../pages/Makers";
import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import Admin from "../pages/Admin";
import ProductsForAdmin from "./ProductsForAdmin";
import EditProduct from "../pages/EditProduct";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/kotisivu" component={Landing} />
        <Route path="/tuotteet" component={Products} />
        <Route path="/munTuotteet" component={ProductsForAdmin} />
        <Route path="/artesaanit" component={Makers} />
        <Route path="/meistä" component={About} />
        <Route path="/myyjälle" component={Admin} />
        <Route path="/muokkaa/:id" component={EditProduct} />
      </Switch>
    </main>
  );
};

export default Main;
