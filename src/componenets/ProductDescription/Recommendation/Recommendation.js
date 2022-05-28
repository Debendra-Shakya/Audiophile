import React from "react";
import { Container, Section } from "../../../globalStyles";
import {
  CategoriesButton,
  FeatureColumn,
  Heading,
  Image,
  Title,
  Wrapper,
} from "./RecommendationStyles";
import { RecommendationData } from "../../../data/RecommendationData";
const Recommendation = () => {
  return (
    <Section inverse="a" padding="70px 0 0 0">
      <Container>
        <Heading>YOU MAY ALSO LIKE</Heading>

        <Wrapper>
          {RecommendationData.map((el, index) => (
            <FeatureColumn key={index}>
              <Image src={el.img} alt={el.title} />

              <Title>{el.title}</Title>
              <CategoriesButton>SEE PRODUCT</CategoriesButton>
            </FeatureColumn>
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Recommendation;
