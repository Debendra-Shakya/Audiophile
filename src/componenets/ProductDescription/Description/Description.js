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

import { useDispatch } from "react-redux";
import { addItemstoCart, AddToCart } from "../../../store/cartSlice";

const Description = () => {
  const {prodtitle}=useParams();

  const element = ProductDetails.find((el)=>el.title===prodtitle)
  const dispatch = useDispatch();
  const [quantity,setQuantity]=useState(1);
  const AddToCartHandler=(product)=>{

    dispatch(addItemstoCart(product,quantity))
    // console.log(product);
    // console.log(quantity)

  }

  
  const increaseQuantity = () => {

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };


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
                    <Button onClick={decreaseQuantity}>-</Button>
                    <Text>{quantity}</Text>
                    <Button onClick={increaseQuantity}>+</Button>
                  </OneWrapper>
                
                </FeatureColumn>
                <FeatureColumn>

                <CartButton onClick={()=>AddToCartHandler(element)}>Add to cart</CartButton>
                </FeatureColumn>
              </Wrapper>
            </ContentColumn>
          </ContentRow>
    
      </Section>
    </Section>
  );
};

export default Description;
