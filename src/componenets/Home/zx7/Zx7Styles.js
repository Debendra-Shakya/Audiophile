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
export const Zx7Wrapper=styled.div`
position:relative;

`

export const Zx7Image=styled.img`
width:150vh;
max-width: 100%;
height:100%;

/* display:block; */
/* object-fit:fill; */
/* z-index:-1; */
border-radius: 20px;

/* padding:0px 50px; */
@media screen and (max-width: 960px) {

    /* padding:0px 70px; */
    /* overflow:hidden; */
    width:100%;
	height:30vh;
    /* display: flex;
		flex-direction: column;
		align-items: center; */

    /* margin:0px 0 30px 30px; */
	}


`
export const Zx7Heading=styled(MainHeading)`

font-size: clamp(1.3rem,13vw,2.3rem);
color:black;
position: absolute;
top: 100px;
left:10%;
text-align: left;
/* margin:25px 0; */
/* padding:0px 80px; */
letter-spacing: 0px;


@media screen and (max-width: 960px) {

top:25%;
left:10%;

}
`
export const Zx7Button = styled(Button)`
position: absolute;
top: 60%;
left:10%;
border-color:black;
color:black;
background:none;
box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);


@media screen and (max-width: 960px) {

  top:50%;
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