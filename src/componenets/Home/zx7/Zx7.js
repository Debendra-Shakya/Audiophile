import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Section } from "../../../globalStyles";
import {
  ContentRow,
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
    <Section inverse="a" padding="50px 0 0 0" smPadding="0">
        <Zx7Wrapper>


         
          <Zx7Image src="./assests/image-speaker-zx7.jpg" />
            <Zx7Heading>ZX7 SPEAKER</Zx7Heading>
            <Link to='/products/ZX7 SPEAKER'>
            <Zx7Button>SEE PRODUCT</Zx7Button>
            </Link>
        </Zx7Wrapper>
    </Section>
  );
};

export default Zx7;
