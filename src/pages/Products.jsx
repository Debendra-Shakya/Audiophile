import React from "react";
import Navbar from "../componenets/Navbar/Navbar";
import Footer from "../componenets/Footer/Footer"
import { NavbarWrapper } from "../componenets/Navbar/NavbarStyles";
import Description from "../componenets/ProductDescription/Description/Description";
import Features from "../componenets/ProductDescription/Features/Features";
import Categories from "../componenets/Home/Categories/Categories"
import HomeDescription from "../componenets/Home/Description/Description"
import FeaturePic from "../componenets/ProductDescription/FeaturesPic/FeaturePic";

const Products = () => {
  return<>
  <NavbarWrapper>
  <Navbar/>
  </NavbarWrapper>
 <Description />
 <Features/>
 <FeaturePic/>
 {/* <Categories />
 <HomeDescription/>
 <Footer/> */}

{/* <Footer/> */}

  </> 
  
  
};

export default Products;
