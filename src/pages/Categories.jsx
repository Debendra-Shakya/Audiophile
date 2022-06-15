import React from 'react'
import Navbar from '../componenets/Navbar/Navbar'
import { NavbarWrapper, NavbarWrapperCategories } from '../componenets/Navbar/NavbarStyles'
import Heading from "../componenets/Categories/Heading/Heading"

const Categories = () => {
  return (<>
    <NavbarWrapper>
    <Navbar />
  </NavbarWrapper>
    <Heading/>
  </>
  )
}

export default Categories