import styled from "styled-components";
import { Button, MainHeading } from "../../../globalStyles";

export const Zx9Wrapper = styled.div`
  /* height: 75vh;
  width: 75%;
  margin: auto;
  background: rgba(216, 124, 73, 0.8);
  border-radius: 20px; */
  /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */

  background: rgba(216, 124, 73, 0.8);
  border-radius: 20px;
  overflow: hidden;
  /* @media screen and (max-width: 960px) {
	display: flex;
	justify-content: center;
		text-align: center;
		align-items: center;
	} */
`;

export const ContentRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-around;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ContentColumn = styled.div`
  margin-bottom: 10px;
  margin-top: 100px;
  padding-right: 15px;
  padding-left: 75px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  /* @media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	} */
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    > h1,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > img {
    width: 300px;
    margin-left: -3px;
  }
`;

export const ImgWrapper = styled.div`
  max-height: 700px;
  position: relative;
`;

export const TopLine = styled.div`
  font-size: 0.9rem;
  line-height: 16px;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
  color: #979797;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  max-height: 700px;
  z-index: 1;
  @media screen and (max-width: 960px) {
    max-height: 300px;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  padding-right: 100px;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ inverse }) => (inverse ? "#0c4577" : "white")};

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 0;
    width: 75%;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  color: #fff;
  opacity: 0.6;
  padding-right: 100px;
  @media screen and (max-width: 960px) {
    width: 75%;
    padding: 0;
  }
`;

export const ContentButton = styled.button`
  height: 3rem;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: black;
  color: ${({ inverse }) => (inverse ? "#0c4577" : "white")};

  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid ${({ inverse }) => (inverse ? "#0c4577" : "white")};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;

  &:before {
    background: ${({ inverse }) => (inverse ? "#0c4577" : "white")};
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: black;
    background: white;
  }
`;
