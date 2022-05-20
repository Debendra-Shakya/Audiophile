import React from "react";
import { Button, Container} from "../../globalStyles";
import {
  HeadphoneImage,
  HeadphoneSection,
  HeadphoneText,
  ButtonWrapper,
  HeadphoneButton,
  HeadphoneMainHeading,
  HeadphoneTextOne
} from "./HeadphoneStyles";

const Headphone = () => {
  return (
    <HeadphoneSection>
      <HeadphoneImage src="./assests/image-hero.jpg" />
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
