import React from "react";
import Navbar from "../componenets/Navbar/Navbar";
import Footer from "../componenets/Footer/Footer"
import { NavbarWrapper } from "../componenets/Navbar/NavbarStyles";
import Description from "../componenets/ProductDescription/Description/Description";
import Features from "../componenets/ProductDescription/Features/Features";

const Products = () => {
  return<>
  <NavbarWrapper>
  <Navbar/>
  </NavbarWrapper>
 <Description />
 <Features/>

{/* <Footer/> */}

  </> 
  
  
};

export default Products;
