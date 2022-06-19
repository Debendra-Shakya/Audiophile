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
import { Link } from "react-router-dom";
const Recommendation = () => {
  return (
    <Section inverse="a" padding="70px 0 0 0">
     
        <Heading>YOU MAY ALSO LIKE</Heading>

        <Wrapper>
          {RecommendationData.map((el, index) => (
            <FeatureColumn key={index}>
              <Image src={el.img} alt={el.title} />

              <Title>{el.title}</Title>
            <Link to={`/products/${el.routes}`}>
              <CategoriesButton>SEE PRODUCT</CategoriesButton>
              </Link>
            </FeatureColumn>
          ))}
        </Wrapper>
    
    </Section>
  );
};

export default Recommendation;
