import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { RmvCart } from '../../store/cartSlice'
import { Button, ButtonQuantity, CartCheckout, CartContainer, CartIteam, CartItem, CartItems, CartProduct, CartProductPrice, CartProductQuantity, CartProductTotalPrice, CartSummary, ContinueShopping, Count, Img, ProductImage, ProductPrice, ProductTitle, RmvButton, SubTotal, Title, TitleContaier } from './CartStyles'
import {Link} from "react-router-dom"
const CartsDetails = ({id,title,price,image,description,cartQuantity}) => {

  const dispatch =useDispatch()
const [quantity,setQuantity]=useState(cartQuantity);
const increaseQuantity = () => {
    
  const qty = quantity + 1;
  setQuantity(qty);
};

const decreaseQuantity = () => {
  if (1 >= quantity) return;

  const qty = quantity - 1;
  setQuantity(qty);
};

const  handleClearCart=()=>{

}
const handleRemoveFromCart=()=>{

}

  return (
    <CartContainer>
    <TitleContaier>
      <Title >Product</Title>
      <Title>Price</Title>
      <Title >Quantity</Title>
      <Title >Total</Title>
    </TitleContaier>
    <CartItems>
    
          <CartIteam className="cart-item" key={id}>
            <CartProduct>
              <Img src={image} alt={title} />
              <div>
                <h3>{title}</h3>
                {/* <p>{description}</p> */}
                <Button onClick={() => handleRemoveFromCart()}>
                  Remove
                </Button>
              </div>
            </CartProduct>
            <CartProductPrice className="cart-product-price">${price}</CartProductPrice>
            <CartProductQuantity>
              <ButtonQuantity onClick={decreaseQuantity}>
                -
              </ButtonQuantity>
              <Count>{quantity}</Count>
              <ButtonQuantity onClick={increaseQuantity}>+</ButtonQuantity>
            </CartProductQuantity>
            <CartProductTotalPrice>
              ${price * cartQuantity}
            </CartProductTotalPrice>
          </CartIteam>
       
    </CartItems>
    <CartSummary>
      <Button onClick={() => handleClearCart()}>
        Clear Cart
      </Button>
      <CartCheckout>
        <SubTotal className="subtotal">
          <span>Subtotal</span>
          {/* <span className="amount">${cart.cartTotalAmount}</span> */}
        </SubTotal>
        <p>Taxes and shipping calculated at checkout</p>
        <button>Check out</button>
        <ContinueShopping >
          <Link to="/">
           Continue Shopping
          </Link>
        </ContinueShopping>
      </CartCheckout>
    </CartSummary>
    </CartContainer>
)}


export default CartsDetails