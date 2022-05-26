import React from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useLocation, useHistory } from 'react-router-dom';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavCart,
 
} from "./NavbarStyles.js";
import { data } from "../../data/NavbarData";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);

//   let history = useHistory();
//   let location = useLocation();


  const handleClick = () => {
    setShow(!show);
  };

//   const scrollTo = (id) => {
//     const element = document.getElementById(id);

//     element.scrollIntoView({
//         behavior: 'smooth',
//     });
// };

// const closeMobileMenu = (to, id) => {
//     if (id && location.pathname === '/') {
//         scrollTo(id);
//     }

//     history.push(to);
//     // navigate(to);
//     setShow(false);
// };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        
     
        <NavbarContainer>
          <NavLogo to="/">audiophile</NavLogo>

          <MobileIcon onClick={handleClick}>{show ? <FaTimes /> : <CgMenuRight />}</MobileIcon>

          <NavMenu show={show}>

            {data.map((el, index) => (
              <NavItem key={index}>
                {/* <NavLinks onClick={()=>closeMobileMenu(e1.to,e1.id)}></NavLinks> */}
                <NavLinks>
                  {el.text}
                  {el.icon}
                
                </NavLinks>
                {/* <NavCart>{el.icon}</NavCart> */}
      
              </NavItem>
              
            ))}
  
          </NavMenu>
       

        </NavbarContainer>
    
       
      </Nav>
    
  
    </IconContext.Provider>
  );
};


export default Navbar;