import styled from 'styled-components'
import { Button, MainHeading, Row } from '../../../globalStyles'

export const ZX7Section=styled.section`
/* height: 55vh;
width:100%;
background-position: center;
/* background-size: cover; */
/* padding-top:clamp(70px,5vh,220px);
overflow: hidden;
box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);  */
`
export const ImageContainer=styled.div`
/* flex:1; */
`
export const Zx7Row=styled(Row)`
/* justify-content: center;
align-items: center; */
`
export const Zx7Wrapper=styled.span`
position:relative;
margin:0px auto;
object-fit: cover;
max-width: 1300px;
`

export const Zx7Image=styled.img`
width:150vh;
max-width: 100%;
height:100%;
/* display:block; */
object-fit:fill;
z-index:-1;
border-radius: 20px;

/* padding:0px 50px; */
@media screen and (max-width: 768px) {

    /* padding:0px 70px; */
    /* overflow:hidden; */
    width:100%;
    display: flex;
		flex-direction: column;
		align-items: center;

    /* margin:0px 0 30px 30px; */
	}


`
export const Zx7Heading=styled(MainHeading)`
/* color:black;
z-index:4;
text-align: left;
margin-top:100px;
font-size: clamp(1.3rem,13vw,3.1rem); */
font-size: clamp(1.3rem,13vw,2.3rem);
color:black;
position: absolute;
top: 100px;
text-align: left;
margin:25px 0;
padding:0px 80px;
letter-spacing: 0px;


@media screen and (max-width: 768px) {

top:75px;
margin:0;
padding: 0;
}
`
export const Zx7Button = styled(Button)`
position: absolute;
top: 200px;
align-items: center;
margin:0px 80px;
border-color:black;
color:black;
background:none;
z-index: 100;

@media screen and (max-width: 768px) {

  top:120px;
  margin:0;
	}
  /* &:before {
		background:none;
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
	} */

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: white;
    background-color:black;
    /* border-color: orange; */
	}

/* padding:0px 80px; */




/* margin-left:650px; */
/* background-color:  transparent;
border-color: black;
color:black;
&:hover{
    color:#fff;
    background-color: black;
} */
`;