import React from "react";
import { Container, Section } from "../../globalStyles";
import {
  ContentColumn,
  ContentRow,
  Zx9Button,
  Zx9Heading,
  Zx9Image,
  Zx9Text,
  Zx9Wrapper,
} from "./Zx9Styles";

const ZX9t = () => {
  return (
    <Section smPadding="50px 10px" inverse="about" postition="relative">
      <Zx9Wrapper>
      <Container>
        <Zx9Image src="./assests/SPEAKER.png" />

       
          <Zx9Heading>
            ZX9
            <br />
            SPEAKER
          </Zx9Heading>
          <Zx9Text>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Zx9Text>
          <Zx9Button>SEE PRODUCT</Zx9Button>
        </Container>
      </Zx9Wrapper>
    </Section>
  );
};

export default ZX9t;
