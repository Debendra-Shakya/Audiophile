import styled from "styled-components";
import { Button, MainHeading } from "../../../globalStyles";

export const HeadphoneSection = styled.section`
height: 75vh;
background-position: center;
background-size: cover;
padding-top:clamp(70px,25vh,220px);
/* position:relative; */
/* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */
`;
export const HeadphoneImage = styled.img`
object-fit: fill;
width: 100%;
height: 75%;
background:linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1));
top:0;
position:absolute;
z-index: -1;

//testing
`;
export const HeadphoneText = styled.p`
font-size: clamp(0.9rem, 2vw, 1.7rem);
	margin-bottom: 1rem;
	color: #fff;
	width: 100%;
	letter-spacing: 5px;
	text-align: left;
    opacity: 0.3;

	@media screen and (max-width: 960px) {
		text-align: center;
	}

`;
export const HeadphoneTextOne = styled.div`

font-size: clamp(0.9rem, 1.5vw, 5rem);
	margin-bottom: 1rem;
	color: #fff;
	width: 50%;
	text-align: left;
    opacity: 0.3;

	@media screen and (max-width: 960px) {
		text-align: center;
		margin:0 25%;
	}

`;
export const TextWrapper=styled.span`
display: block;
justify-content: center;
text-align: center;
`

export const ButtonWrapper = styled.div`
margin-top: 2rem;
width:100%;
display: flex;
justify-content: left;
flex-flow: wrap;
gap:0.5rem;
@media screen and (max-width: 960px) {
	justify-content: center;
	}
`;
export const HeadphoneButton = styled(Button)`
background-color:  #d87c49;
`;
export const HeadphoneMainHeading=styled(MainHeading)`
/* text-align: left;
margin-left: -80px;
padding-right: 60vh; */
width:75%;

text-align: left;


@media screen and (max-width: 960px) {
		text-align: right;
	}

`
export const Wrapper=styled.span`
padding-top: 50px;
`

