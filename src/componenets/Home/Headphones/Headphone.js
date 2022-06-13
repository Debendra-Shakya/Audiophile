import React from "react";
import { Button, Container, Section, MainHeading } from "../../../globalStyles";
import {
  HeadphoneImage,
  HeadphoneSection,
  HeadphoneText,
  ButtonWrapper,
  HeadphoneButton,
  HeadphoneMainHeading,
  HeadphoneTextOne,
  Wrapper,
  TextWrapper,
} from "./HeadphoneStyles";

import { useEffect, useState } from "react";
const Headphone = () => {
  const desktopImage =
    process.env.PUBLIC_URL + "/assests/home/desktop/image-hero.jpg";
  const tabletImage =
    process.env.PUBLIC_URL + "/assests/home/tablet/image-header.jpg";

  // const ImageUrl = window.innerWidth >= 943 ? desktopImage : tabletImage;

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }
  const ImageUrl = windowSize.innerWidth > 960 ? desktopImage : tabletImage;

  return (
    <HeadphoneSection>
      {/* <HeadphoneImage src="https://debz1.github.io/Audiophile/assests/image-hero.jpg" alt="hero"/> */}
      <HeadphoneImage src={ImageUrl} alt="hero" />

      <Container>

      <hr
        style={{
          background: "white",
          color: "white",
          borderColor: "white",
          height: "1px",
          width: "100%",

          marginBottom: "60px",
          marginTop: "-130px",
          opacity: "0.3",
        }}
      />
        <TextWrapper>
        <HeadphoneText>NEW PRODUCT</HeadphoneText>
        <HeadphoneMainHeading>XX99 MARK II HEADPHONES</HeadphoneMainHeading>
        <HeadphoneTextOne>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </HeadphoneTextOne>
        </TextWrapper>
        <ButtonWrapper>
          {/* <Button>get started</Button> */}
          <HeadphoneButton>SEE PRODUCT</HeadphoneButton>
        </ButtonWrapper>
      </Container>
    </HeadphoneSection>
  );
};

export default Headphone;
