import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Products from "../pages/Products";
import Makers from "../pages/Makers";
import About from "../pages/About";
import AddProduct from "../pages/AddProduct";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/kotisivu" component={Landing} />
        <Route path="/tuotteet" component={Products} />
        <Route path="/artesaanit" component={Makers} />
        <Route path="/meistä" component={About} />
        <Route path="/LisääTuote" component={AddProduct} />
      </Switch>
    </main>
  );
};

export default Main;
