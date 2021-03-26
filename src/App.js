import React from "react";
import {BrowserRouter as Router,Redirect, Route, Switch} from "react-router-dom"

import NavBar from "./components/navbar/Nav"
import Products from "./components/products/Products"
import Details from "./components/details/Details"
import Cart from "./components/cart/Cart"

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
        <Route path="/" exact>
          <Products />              
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Redirect to="/" />
        </Switch>
      </Router>
  );
}

export default App;
