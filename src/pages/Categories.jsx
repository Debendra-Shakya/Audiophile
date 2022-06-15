import React from 'react'
import Navbar from '../componenets/Navbar/Navbar'
import { NavbarWrapper, NavbarWrapperCategories } from '../componenets/Navbar/NavbarStyles'
import Heading from "../componenets/Categories/Heading/Heading"
import Headphones from '../componenets/Categories/products/Headphones'
import SmallCategories from "../componenets/Home/Categories/Categories"
import { Container } from '../globalStyles'
import Description from '../componenets/Home/Description/Description'
import Footer from "../componenets/Footer/Footer"

const Categories = () => {
  return (<>
    <NavbarWrapper>
    <Navbar />
  </NavbarWrapper>
    <Heading/>
    <Container>
    <Headphones/>
    <SmallCategories/>
    <Description/>
    </Container>
    <Footer/>
  </>
  )
}

export default Categories