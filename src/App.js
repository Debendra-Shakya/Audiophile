import React from "react";
import Navbar from "./componenets/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoriesD from './pages/Categories'
import { BrowserRouter as Router,Routes as Switch, Route } from "react-router-dom";
import { categoriesHeadphoneData ,categoriesSpeakerData,categoriesEarphoneData} from "./data/CategoriesData";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/headphones" element={<CategoriesD data={categoriesHeadphoneData}/>} />
        <Route path="/speakers" element={<CategoriesD data={categoriesSpeakerData}/>} />
        <Route path="/earphones" element={<CategoriesD data={categoriesEarphoneData}/>} />
      </Switch>

      {/* <Home /> */}
      {/* <Products /> */}
    </Router>
  );
};

export default App;
