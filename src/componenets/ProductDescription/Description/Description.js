import React from "react";
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
const Description = () => {
  return (
    <Section padding="50px 0 0 0" inverse="a">
      
        <ButtonWrapper>
          {/* <Button>get started</Button> */}
          <Button>Go Back</Button>
        </ButtonWrapper>
    

      <Section inverse="a" padding="0 0 100px 0" smPadding="0">
        
          <ContentRow>
            <ContentColumn>
              <ImgWrapper>
                <ProductImage src="./assests/product-xx99-mark-two-headphones/desktop/image-product.jpg" />
              </ImgWrapper>
            </ContentColumn>
            <ContentColumn>
              <ProductText>NEW PRODUCT</ProductText>
              <ProductMainHeading>XX99 MARK II HEADPHONES</ProductMainHeading>
              <ProductTextOne>
                The new xx99 mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </ProductTextOne>
              <ProductMainHeading>$2900</ProductMainHeading>

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
