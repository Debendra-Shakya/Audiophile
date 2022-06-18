import React from "react";
import Navbar from "./componenets/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from './pages/Categories'
import { BrowserRouter as Router,Routes as Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/headphones" element={<Categories/>} />
      </Switch>

      {/* <Home /> */}
      {/* <Products /> */}
    </Router>
  );
};

export default App;
