import styled from "styled-components";
import { Button } from "../../../globalStyles";
export const Heading = styled.h2`
  font-size: clamp(1.3rem, 12vw, 2rem);
  font-weight: 700;
  color: #000;
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};
`;
export const FeatureColumn = styled.div`
  display: flex;
  flex-flow: column;
  /* justify-content: left; */
  align-items: center;
  /* background-color: #f1f1f1; */
  padding: 10px;
  /* box-shadow: 0 0 32px 8px #d0d0d0; */
  border-radius: 20px;
`;
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 25vh;

  z-index: 2;

  /* margin-top: -100px;  */
  /* margin-bottom: 500px; */
  /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    max-height:100%;
    /* flex-basis: 100%; */
    /* justify-content: center; */
    /* align-items: center; */
}
`;

export const Title = styled.p`
  margin-top: 20px;
  font-weight: 900;
  font-size: 24px;
`;

export const CategoriesButton = styled(Button)`
  margin-top: 15px;
  background: #d87c49;
  border: none;
  color: black;
  opacity: 0.9;
  font-weight: 900;

  &::before {
    background: #fff;
  }
  ${Button}
`;
export const Wrapper = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3rem;
  grid-gap: 5rem;
  /* background-color: #f1f1f1; */
  border-radius: 10px;
  /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */

  @media screen and (max-width: 1100px) {
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
