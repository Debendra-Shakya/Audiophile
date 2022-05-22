import styled from "styled-components"
import { Button,Container} from '../../globalStyles'

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
  
  ${Container}
`;

export const Image=styled.img`
width:100%;
object-fit: cover;
height: 100%;
position: relative;
z-index: 2;

margin-top: -100px; 
/* margin-bottom: 500px; */
/* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */
`

export const Info=styled.div`
margin-top: -30px;
display: flex;
flex-direction: column;
text-align: center;
`

export const Title=styled.p`
font-weight: 900;
font-size: 24px;
`

export const Wrapper=styled.span`
/* display: flex; */
/* display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem; */
  margin-top: 150px;
  padding-top: -150px;
  height:25vh;
   background-color: #f1f1f1;
   border-radius: 10px;
   /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */


/* margin-top: 200px;
height: 100%;
width: 100%;
padding-top: 180px;
z-index: -1;
/* background-color: #f1f1f1;
background-color: red;

box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */ 
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