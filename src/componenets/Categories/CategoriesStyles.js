import styled from "styled-components"
import { Button,Container} from '../../globalStyles'

export const CateItemContainer=styled.div`
flex:1;

height: 30vh;

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
object-fit: contain;
height: 100%;
position: fill;
z-index: 2;
margin-top: -300px;
margin-bottom: 500px;
`

export const Info=styled.div`
margin-top: -570px;
display: flex;
flex-direction: column;
text-align: center;
`

export const Title=styled.p`
font-weight: 900;
font-size: 24px;
`

export const Wrapper=styled.span`
margin-top: 200px;
padding-top: 180px;
background-color: #f1f1f1;
z-index: -1;
border-radius: 10px;
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