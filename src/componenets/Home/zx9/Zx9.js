import React from "react";
import { Link } from "react-router-dom";
import { Container, Section } from "../../../globalStyles";
import {
  ContentButton,
  ContentColumn,
  ContentRow,
  Heading,
  Img,
  ImgWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  Zx9Button,
  Zx9Heading,
  Zx9Image,
  Zx9Text,
  Zx9Wrapper,
} from "./Zx9Styles";

const ZX9t = () => {
  return (
    <Section inverse="a" smPadding="0 0 50px 0">

      <Zx9Wrapper>
      <ContentRow>
      <ContentColumn>
          <ImgWrapper>
            <Img src="./assests/SPEAKER.png" alt="Zx9"/>
          </ImgWrapper>
        </ContentColumn>
        <ContentColumn>
          <TextWrapper>
            {/* <TopLine>
         This is top line
            </TopLine> */}
            <Heading>
            ZX9 SPEAKER
            </Heading>
            <Subtitle>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </Subtitle>
            <Link to='/products/ZX9 SPEAKER'>
            <ContentButton>
            SEE PRODUCT
            </ContentButton>
            
            </Link>
          </TextWrapper>
        </ContentColumn>
       
      </ContentRow>
      </Zx9Wrapper>
  </Section>
  );
};

export default ZX9t;
