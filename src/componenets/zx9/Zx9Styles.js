import styled from "styled-components"
import { Button, MainHeading } from "../../globalStyles"

export const Zx9Section= styled.section`
height: 75vh;
background-position: center;
background-size: cover;
padding-top:clamp(70px,25vh,220px);


margin: auto;

margin-top: 380px;
width:75%;
box-shadow: inset 0 0 0 1000px rgba(216,124,73,0.8);
border-radius: 10px;
z-index: -5;
`

export const Zx9Image= styled.img`
height: 100%;
padding-left: 150px;
`
export const Zx9Heading=styled(MainHeading)`
text-align: left;
z-index: 2;
margin-left:650px;
margin-top: -500px;
color:#fff;
${MainHeading}
`

export const Zx9Text = styled.p`

font-size: clamp(0.9rem,1.5vw,1.3rem);
line-height: 24px;
text-align: left;
color:#fff;
opacity: 0.3;
margin-left:650px;
padding-right: 20vh;
margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
width:100%;
display: flex;
justify-content: left;
flex-flow: wrap;
gap:0.5rem;
/* margin-left: -80px; */
`;
export const Zx9Button = styled(Button)`
margin-left:650px;
background-color:  black;
&:hover{
    color:black;
    background-color: white;
}
${Button}
`;