import React from "react";
import { Link } from "react-router-dom";
import { Section, Container } from "../../../globalStyles";
import Products from "../../../pages/Products";
import {
  ButtonWrapper,
  Button,
  ContentRow,
  ContentColumn,
  ImgWrapper,
  ProductImage,
  ProductText,
  ProductMainHeading,
  ProductTextOne,
  OneWrapper,
  Text,
  CartButton,
  Wrapper,
  FeatureColumn,
} from "./CategoriesDStyles";



const Description = ({data}) => {
  return (
    <Section padding="50px 0 0 0" inverse="a">
        
        {data.map((el, index) => (
          <ContentRow key={index} reverse={el.reverse}>
            <ContentColumn>
              <ImgWrapper>
                <ProductImage src={el.img} />
              </ImgWrapper>
            </ContentColumn>

            <ContentColumn key={index}>
              <ProductText>{el.new}</ProductText>

              {/* {categoriesData.map((el,index)=>(
  <FeatureColumn key={index}>
<Image src={el.img} alt={el.title}/>


<Title>{el.title}</Title>
        <CategoriesButton>SHOP  
           <span style={{color:"red"}}>
           {'  >'} 
           </span>
          
            
            
            </CategoriesButton>

  </FeatureColumn>
))} */}

              <ProductMainHeading>{el.title}</ProductMainHeading>
              <ProductTextOne>{el.description}</ProductTextOne>

              <Wrapper>
                <FeatureColumn>
                  hello
                  <Link to={`/products/${el.title}`}>
                  
                  <CartButton >SEE PRODUCT</CartButton>
                  </Link>
                </FeatureColumn>
              </Wrapper>
            </ContentColumn>
          </ContentRow>
        ))}
     
      </Section>
  );
};

export default Description;
