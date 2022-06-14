import React from "react";
import { Container, Section } from "../../../globalStyles";
import { FeatureBox } from "../../../data/ProductsData";
import {
  ContentColumn,
  ContentRow,
  CountText,
  FeatureHeading,
  FeatureRow,
  FeatureText,
  Title,
} from "./FeaturesStyles";

const Features = () => {
  return (
    <Section padding="0" inverse="a">
     
        <ContentRow>
          <ContentColumn>
            <FeatureHeading>FEATURES</FeatureHeading>
         
          </ContentColumn>
          <ContentColumn>
            <FeatureHeading>IN THE BOX</FeatureHeading>


   


          </ContentColumn>
        </ContentRow>
        <ContentRow>
          <ContentColumn>
               <FeatureText>
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls desgined for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
              <br />
              <br />
              The advanced Active Noise Cancellation with build-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace but quickly interact with your
              sourroundings when you need to. Combined with Bluetooth 5.0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound cutting-edge technology and a
              modern design aesthetic.
            </FeatureText>
          </ContentColumn>
          <ContentColumn>
         {FeatureBox.map((el,index)=>(
  <FeatureRow key={index}>
      <CountText>

{el.count}
      </CountText>

<Title>{el.title}</Title>

  </FeatureRow>
))}
          </ContentColumn>
        </ContentRow>

    </Section>
  );
};

export default Features;
