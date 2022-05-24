import React from "react";
import Categories from "../componenets/Categories/Categories";
import Description from "../componenets/Description/Description";
import Headphone from "../componenets/Headphones/Headphone";
import Navbar from "../componenets/Navbar/Navbar";
import Yx1 from "../componenets/yx1/Yx1";
import Zx7 from "../componenets/zx7/Zx7";
import Zx9 from "../componenets/zx9/Zx9";
import Footer from "../componenets/Footer/Footer";


const Home = () => {
  return (
    <>
      <Navbar />

      <Headphone/>
      <Categories />
      <Zx9 />
      <Zx7 />
      <Yx1 />
      <Description/>
      <Footer/>
    </>
  );
};

export default Home;
