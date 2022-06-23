import React from 'react'
import Navbar from '../componenets/Navbar/Navbar'
import { NavbarWrapper } from '../componenets/Navbar/NavbarStyles'
import Carts from '../componenets/Cart/Cart'

const Cart = () => {
  return (
    <>
    <NavbarWrapper>
    <Navbar />
  </NavbarWrapper>
  <Carts/>
 
    </>
  )
}

export default Cart