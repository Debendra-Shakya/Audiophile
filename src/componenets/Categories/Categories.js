import React from "react";

import { categories } from "../../data/CategoriesData";

import CategoriesItem from "./CategoriesItem";
import { CategoriesContainer, Wrapper } from "./CategoriesStyles";

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((item) => (
   <Wrapper>

     <CategoriesItem item={item} />
   </Wrapper>
        
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
