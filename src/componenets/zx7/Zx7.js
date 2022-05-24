import React from "react";
import { Container, Row, Section } from "../../globalStyles";
import {
  ImageContainer,
  Zx7Button,
  Zx7Heading,
  Zx7Image,
  Zx7Row,
  ZX7Section,
  Zx7Wrapper,
} from "./Zx7Styles";

const Zx7 = () => {
  return (
    <Section inverse="a" padding="50px 0 0 0">
      <Zx7Row>
        <Zx7Wrapper>
          <Zx7Image src="./assests/image-speaker-zx7.jpg" />

          <Container>
            <Zx7Heading>ZX7 SPEAKER</Zx7Heading>
            <Zx7Button>SEE PRODUCT</Zx7Button>
          </Container>
        </Zx7Wrapper>
      </Zx7Row>
    </Section>
  );
};

export default Zx7;
