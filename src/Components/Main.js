import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Products from "../pages/Products";
import Makers from "../pages/Makers";
import About from "../pages/About";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/tuotteet" exact component={Products} />
        <Route path="/tekijät" exact component={Makers} />
        <Route path="/meistä" component={About} />
      </Switch>
    </main>
  );
};

export default Main;
