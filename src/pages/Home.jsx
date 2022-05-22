import React from "react";
import Categories from "../componenets/Categories/Categories";
import Headphone from "../componenets/Headphones/Headphone";
import Navbar from "../componenets/Navbar/Navbar";
import Zx9 from "../componenets/zx9/Zx9";

const Home = () => {
  return (
    <>
      <Navbar />
      <Headphone />
      <Categories />
      <Zx9 />
    </>
  );
};

export default Home;
