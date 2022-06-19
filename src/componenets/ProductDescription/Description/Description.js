import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Section, Container } from "../../../globalStyles";
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
} from "./DescriptionStyles";

import {ProductDetails} from '../../../data/ProductsData'
const Description = () => {
  const {prodtitle}=useParams();
  console.log(prodtitle)

  const element = ProductDetails.find((el)=>el.title===prodtitle)
  console.log(element)
//   const [product,setProduct]=useState([]);
//   useEffect(()=>{
// const detail=ProdData.map((pdata)=>{
//   if(pdata.title==title){

//   }
  
// })
//   })
  return (
    <Section padding="50px 0 0 0" inverse="a">
      
        <ButtonWrapper>
          <Link to='/'>
          <Button>Go Back</Button>
          </Link>
        </ButtonWrapper>
    

      <Section inverse="a" padding="0 0 100px 0" smPadding="0">
        
          <ContentRow>
            <ContentColumn>
              <ImgWrapper>
                <ProductImage src={element.image} alt={element.title}/>
              </ImgWrapper>
            </ContentColumn>
            <ContentColumn>
              <ProductText>{element.new}</ProductText>
              <ProductMainHeading>{element.title}</ProductMainHeading>
              <ProductTextOne>
                {element.description}
              </ProductTextOne>
              <ProductMainHeading>${element.price}</ProductMainHeading>

              <Wrapper>
                <FeatureColumn>
                <OneWrapper>
                    <Button>-</Button>
                    <Text>1</Text>
                    <Button>+</Button>
                  </OneWrapper>
                
                </FeatureColumn>
                <FeatureColumn>

                <CartButton>Add to cart</CartButton>
                </FeatureColumn>
              </Wrapper>
            </ContentColumn>
          </ContentRow>
    
      </Section>
    </Section>
  );
};

export default Description;
