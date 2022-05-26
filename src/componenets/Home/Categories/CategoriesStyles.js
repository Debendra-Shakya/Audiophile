import styled from "styled-components"
import { Button,Container} from '../../../globalStyles'

export const CateItemContainer=styled.div`
flex:1;
z-index: -3;
height: 30vh;
background-size: contain;

/* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */

`
export const CategoriesContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
  height: 80px;
  position: relative;
  
  ${Container}
`;

export const Image=styled.img`
width:100%;
object-fit: contain;
height: 25vh;

z-index: 2;

margin-top: -100px; 
/* margin-bottom: 500px; */
/* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */
`


export const Title=styled.p`
/* margin-top: -20px; */
font-weight: 900;
font-size: 24px;
`

export const Wrapper=styled.span`
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


`

export const CategoriesButton=styled(Button)`
border:none;
color:black;
opacity: .4;
font-weight: 900;

&::before{
    background: #d87c49;
}
${Button}
`

// export const SPAN =styled.div`
// color: red;
// `

export const FeatureColumn = styled.div`
	display: flex;
	flex-flow: column;
	/* justify-content: left; */
	align-items: center;
	background-color: #f1f1f1;
	padding: 10px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	border-radius: 20px;
`;