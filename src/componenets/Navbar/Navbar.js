import React from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
import {FaCartPlus} from "react-icons/fa"

import { IconContext } from "react-icons";
import { useLocation,useNavigate} from 'react-router-dom';
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

  // let history = useHistory();
  let location = useLocation();
  let navigate = useNavigate();


  const handleClick = () => {
    setShow(!show);
  };

//   const scrollTo = (id) => {
//     const element = document.getElementById(id);

//     element.scrollIntoView({
//         behavior: 'smooth',
//     });
// };

const closeMobileMenu = (to, id) => {
    // if (id && location.pathname === '/') {
    //     scrollTo(id);
    // }

    navigate(to);
    setShow(false);
};

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        
     
        <NavbarContainer>
          <NavLogo to="/">audiophile</NavLogo>

          <MobileIcon onClick={handleClick}>{show ? <FaTimes /> : <CgMenuLeft />}</MobileIcon>

          <NavMenu show={show}>

            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={()=>closeMobileMenu(el.to,el.id)}>
                {/* <NavLinks> */}
                  {el.text}

                </NavLinks>
                {/* <NavCart>{el.icon}</NavCart> */}
      
              </NavItem>
              
            ))}
  
          </NavMenu>
                  <NavCart show={show}>
                    <FaCartPlus />
                  </NavCart>
       

        </NavbarContainer>
    
       
      </Nav>
    
  
    </IconContext.Provider>
  );
};


export default Navbar;