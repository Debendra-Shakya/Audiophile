import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import CartsDetails from './CartsDetails'


const Cart = () => {
const [price,setPrice]=useState()
const cartItems= useSelector((store)=>store.cart.cartItems)
const count =useSelector((store)=>store.cart.count)
const total =useSelector((store)=>store.cart.total)


if(count <1){
      return(
        <>
        <div>cart is empty</div>
        </>
      )
}

  return (
<>
<Navbar/>
    <div>Cart</div>
    <div>
      {cartItems.map((item)=>{
        return <CartsDetails key={item.id} {...item}/>
      })}
    </div>
    <div>
      total  {total}
    </div>
</>
    
  )
}

export default Cart