import React from "react";
import { Container, MainHeading } from "../../globalStyles";
import {  HeadphoneButton } from "../Headphones/HeadphoneStyles";
import { Zx9Section, Zx9Image, Zx9Heading, Zx9Text, Zx9Button,ButtonWrapper } from "./Zx9Styles";

const Zx9 = () => {
  return (
    <>
      <Zx9Section>
        <Zx9Image src="./assests/SPEAKER.png" />
        <Container>
          <Zx9Heading>
            ZX9
            <br />
            SPEAKER
          </Zx9Heading>
          <Zx9Text>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Zx9Text>
          <ButtonWrapper>
          {/* <Button>get started</Button> */}
          <Zx9Button>SEE PRODUCT</Zx9Button>
        </ButtonWrapper>
        </Container>
      </Zx9Section>
    </>
  );
};

export default Zx9;
