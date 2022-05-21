import React from "react";
import Categories from "../componenets/Categories/Categories";
import Headphone from "../componenets/Headphones/Headphone";
import Navbar from "../componenets/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Headphone />
      <Categories />
    </>
  );
};

export default Home;
