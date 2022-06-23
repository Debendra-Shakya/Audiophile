import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 2rem 4rem;
`;
export const TitleContaier = styled.div`
  margin: 2rem 0 1rem 0;
  display: grid;
  align-items: center;
  grid-template-columns: 2.5fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
   /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */

`;
export const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const CartItems=styled.div`
display: grid;
  align-items: center;
  grid-template-columns: 30fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
   /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */

`
export const CartIteam=styled.div`
 border-top: 1px solid rgb(187, 187, 187);
  padding: 1rem 0;
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
   /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */

`
export const CartProduct=styled.div`
display: flex;
   box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);

`

export const Img=styled.img`
  width: 100px;
  max-width: 100%;
  margin-right: 1rem;
`

export const Button=styled.button`
  border: none;
  outline: none;
  margin-top: 0.7rem;
  cursor: pointer;
  background: none;
  color: gray;
`
export const CartProductQuantity=styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 130px;
  max-width: 100%;
  border: 0.5px solid rgb(177, 177, 177);
  border-radius: 5px;
`

export const ButtonQuantity=styled.button`
 border: none;
  outline: none;
  background: none;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
`
export const Count=styled.div`
  padding: 0.7rem 0;
`
export const CartProductTotalPrice= styled.div`
  padding-right: 0.5rem;
  justify-self: right;
  font-weight: 700;
`
export const CartProductPrice=styled.div`
  padding-left: 1rem;

`

export const CartSummary=styled.div`
display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid rgb(187, 187, 187);
  padding-top: 2rem;
`
export const CartCheckout=styled.div`
width: 270px;
  max-width: 100%;
`

export const SubTotal=styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`

export const ContinueShopping=styled.div`
  margin-top: 1rem;
`