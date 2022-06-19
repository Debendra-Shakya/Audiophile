import { Link } from "react-router-dom";
import styled from "styled-components"
import { MainHeading } from "../../../globalStyles";

export const ButtonWrapper = styled.div`
width:100%;
display: flex;
justify-content: left;
flex-flow: wrap;
gap:0.5rem;
color: black;

`;
export const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: black;
	outline: none;
    border:none;
    opacity: 0.6;
	cursor: pointer;
	overflow: hidden;
	position: relative;
    &:before {
		background: #fff;
		content: '';
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
	}
    `

export const ContentRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
justify-content: space-around;
   /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */


@media screen and (max-width: 768px) {
    flex-direction: column-reverse;
}
`;

export const ContentColumn = styled.div`
margin-bottom: 10px;
margin-top:100px;
/* padding-right: 15px; */
padding-left: 75px;
flex:1;
z-index: 10;
display: flex;
flex-direction: column;
@media screen and (max-width: 768px) {
    max-width: 100% !important;
    /* flex-basis: 100%; */
    /* justify-content: center; */
    /* align-items: center; */
   /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */

}
`;

export const ImgWrapper = styled.div`
	display: flex;
	justify-content: 'flex-end';
	max-height: 700px;
	justify-content: center;
	position: relative;
`;

export const ProductImage=styled.img`
	/* padding-right: 0; */
	/* border: 0; */
	width: 100%;
	/* vertical-align: middle; */
	/* display: inline-block; */
	object-fit: cover;
	/* object-fit: scale-down; */
	height: 100%;
	z-index: 1;
    border-radius: 20px;
	@media screen and (max-width: 768px) {
		/* width: 17rem; */
    /* height: 40vh; */

  }
`
export const ProductText = styled.p`
font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	margin-bottom: 1rem;
	color: #d87c49;
	width: 100%;
	letter-spacing: 5px;
	text-align: left;
    opacity: 0.3;
`;

export const ProductTextOne = styled.p`
font-size: clamp(0.9rem, 1vw, 2rem);
	margin-bottom: 1rem;
	color: #000;
	width: 100%;
	text-align: left;
    opacity: 0.3;
`;
export const ProductMainHeading=styled(MainHeading)`
/* text-align: left;
margin-left: -80px;
padding-right: 60vh; */
width:75%;
font-size:24px;
color:#000;
letter-spacing: 0;

text-align: left;
${MainHeading}


`

export const OneWrapper=styled.span`
display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 3rem;
   background-color: #f1f1f1;
   border-radius: 10px;
   /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */
   @media screen and (max-width: 960px) {
    /* grid-row-gap: 1rem; */
    grid-gap: 1rem;
  }

`;
export const Text=styled.p`
font-weight: 900;
font-size: 24px;
align-items:center;
`

export const CartButton = styled(Link)`
background-color:  #d87c49;

`;

export const Wrapper = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1rem;
  grid-gap: 5rem;
  /* background-color: #f1f1f1; */
  border-radius: 10px;
  /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */

  @media screen and (max-width: 960px) {
    /* grid-row-gap: 1rem; */
    grid-gap: 1rem;
	overflow:hidden;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

