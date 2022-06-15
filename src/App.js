import React from "react";
import Navbar from "./componenets/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from './pages/Categories'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/categories/" exact component={Categories} />
      </Switch>

      {/* <Home /> */}
      {/* <Products /> */}
    </Router>
  );
};

export default App;
