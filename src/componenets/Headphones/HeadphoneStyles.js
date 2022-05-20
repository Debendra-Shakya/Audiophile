import styled from "styled-components";
import { Button, MainHeading } from "../../globalStyles";

export const HeadphoneSection = styled.section`
height: 75vh;
background-position: center;
background-size: cover;
padding-top:clamp(70px,25vh,220px);
box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);
`;
export const HeadphoneImage = styled.img`
object-fit: fill;
width: 100%;
height: 75%;
background:linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1));
top:0;
position:absolute;
z-index: -1;
`;
export const HeadphoneText = styled.p`

font-size: clamp(0.9rem,1.5vw,1.3rem);
line-height: 24px;
text-align: left;
letter-spacing: 5px;
color:#fff;
opacity: 0.3;
margin-left: -80px;
`;
export const HeadphoneTextOne = styled.p`

font-size: clamp(0.9rem,1.5vw,1.3rem);
line-height: 24px;
text-align: left;
color:#fff;
opacity: 0.3;
margin-left: -80px;
padding-right: 78vh;
margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
width:100%;
display: flex;
justify-content: left;
flex-flow: wrap;
gap:0.5rem;
margin-left: -80px;
`;
export const HeadphoneButton = styled(Button)`
background-color:  #d87c49;
`;
export const HeadphoneMainHeading=styled(MainHeading)`
text-align: left;
margin-left: -80px;
padding-right: 60vh;
`
