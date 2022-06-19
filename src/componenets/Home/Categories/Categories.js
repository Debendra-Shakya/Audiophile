import React from "react";
import { Link } from "react-router-dom";

import { categoriesData } from "../../../data/CategoriesData";
import { Container, Section } from "../../../globalStyles";

import { FeatureColumn,Image, Info, Title,CategoriesButton,CateItemContainer, Wrapper } from './CategoriesStyles'


const Categories = () => {
  return (
  <Section smPadding="50px 10px" inverse="about" postition="relative">
   
<Wrapper>
{categoriesData.map((el,index)=>(
  <FeatureColumn key={index}>
<Image src={el.img} alt={el.title}/>


<Title>{el.title}</Title>
        <Link to={`/${el.title.toLowerCase()}`}>
        
        <CategoriesButton>SHOP  
           <span style={{color:"red"}}>
           {'  >'} 
           </span>
          
            
            
            </CategoriesButton>
        </Link>

  </FeatureColumn>
))}

</Wrapper>



  </Section>
  );
};

export default Categories;
