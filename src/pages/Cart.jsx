import React from 'react'
import Navbar from '../componenets/Navbar/Navbar'
import { NavbarWrapper } from '../componenets/Navbar/NavbarStyles'
import Carts from '../componenets/Cart/Cart'
import Footer from '../componenets/Footer/Footer'
import { Container } from '../globalStyles'

const Cart = () => {
  return (
    <>
    <NavbarWrapper>
    <Navbar />
  </NavbarWrapper>
  <Container>
  <Carts/>

  </Container>
  <Footer/>
 
    </>
  )
}

export default Cart