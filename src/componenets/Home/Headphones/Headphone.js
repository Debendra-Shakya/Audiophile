import React from "react";
import { Button, Container, Section,MainHeading} from "../../../globalStyles";
import {
  HeadphoneImage,
  HeadphoneSection,
  HeadphoneText,
  ButtonWrapper,
  HeadphoneButton,
  HeadphoneMainHeading,
  HeadphoneTextOne,
  Wrapper,
} from "./HeadphoneStyles";


const Headphone = () => {

  const desktopImage = process.env.PUBLIC_URL+ "/assests/home/desktop/image-hero.jpg";
  const tabletImage = process.env.PUBLIC_URL + "/assests/home/tablet/image-header.jpg";

  const ImageUrl = window.innerWidth >= 943 ? desktopImage : tabletImage;
  console.log(window.innerWidth)
  return (
    <HeadphoneSection >
          {/* <HeadphoneImage src="https://debz1.github.io/Audiophile/assests/image-hero.jpg" alt="hero"/> */}
          <HeadphoneImage src={ImageUrl} alt="hero"/>
    
 
      <hr style={{
          background: "white",
          color: 'white',
          borderColor: 'white',
          height: '1px',
          width: '100%',
          
          marginBottom:'60px',
          marginTop:'-130px',
          opacity: "0.3",
  
        
      }}
          />



   <Container>
        <HeadphoneText>NEW PRODUCT</HeadphoneText>
        <HeadphoneMainHeading>XX99 MARK II HEADPHONES</HeadphoneMainHeading>
        <HeadphoneTextOne>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</HeadphoneTextOne>
        <ButtonWrapper>
          {/* <Button>get started</Button> */}
          <HeadphoneButton>SEE PRODUCT</HeadphoneButton>
        </ButtonWrapper>
        </Container>
    </HeadphoneSection>
  );
};

export default Headphone;
