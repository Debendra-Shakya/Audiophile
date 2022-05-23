import React from "react";
import { Container, Section } from "../../globalStyles";
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
    <Section inverse="a">
    <Container>
      <Zx9Wrapper>
      <ContentRow>
      <ContentColumn>
          <ImgWrapper>
            <Img src="./assests/SPEAKER.png"
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />
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
            <ContentButton>
            SEE PRODUCT
            </ContentButton>
          </TextWrapper>
        </ContentColumn>
       
      </ContentRow>
      </Zx9Wrapper>
    </Container>
  </Section>
  );
};

export default ZX9t;
