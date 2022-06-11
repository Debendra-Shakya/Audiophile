import React from "react";
import Categories from "../componenets/Home/Categories/Categories";
import Description from "../componenets/Home/Description/Description";
import Headphone from "../componenets/Home/Headphones/Headphone";
import Navbar from "../componenets/Navbar/Navbar";
import Yx1 from "../componenets/Home/yx1/Yx1";
import Zx7 from "../componenets/Home/zx7/Zx7";
import Zx9 from "../componenets/Home/zx9/Zx9";
import Footer from "../componenets/Footer/Footer";
import { Container } from "../globalStyles";


const Home = () => {
  return (
    <>
      <Navbar inverse="transpa"/>
      <Headphone/>
      <Container>
      <Categories />
      <Zx9 />
      <Zx7 />
      <Yx1 />
      <Description/>
    </Container>
      <Footer/>
    </>
  );
};

export default Home;
