import React from "react";

import { categoriesData } from "../../data/CategoriesData";
import { Container, Section } from "../../globalStyles";

import { FeatureColumn,Image, Info, Title,CategoriesButton,CateItemContainer, Wrapper } from './CategoriesStyles'


const Categories = () => {
  return (
  <Section smPadding="50px 10px" inverse="about" postition="relative">
    <Container>
<Wrapper>
{categoriesData.map((el,index)=>(
  <FeatureColumn key={index}>
<Image src={el.img}/>


<Title>{el.title}</Title>
        <CategoriesButton>SHOP  
           <span style={{color:"red"}}>
           {'  >'} 
           </span>
          
            
            
            </CategoriesButton>

  </FeatureColumn>
))}

</Wrapper>

    </Container>


  </Section>
  );
};

export default Categories;
