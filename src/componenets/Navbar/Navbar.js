import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";

import { IconContext } from "react-icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  Menu,
  Table,
  Amount,
  AmountContainer,
  TotalAmount,
} from "./NavbarStyles.js";
import { data } from "../../data/NavbarData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { RmvCart } from "../../store/cartSlice.js";

const Navbar = () => {
  const dispatch =useDispatch();
  const [show, setShow] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const [price,setPrice] = useState(0);


//   const open = Boolean(anchorEl);
//   const getdata = useSelector((state)=> state.cart.carts);

//   const cartHandleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const cartHandleClose=()=>{
//     setAnchorEl(null)
//   }

//   const dlt = (id)=>{
//     dispatch(RmvCart(id))
// }

// const total=()=>{
//   let price =0;
//   getdata.map((ele,k)=>{
//     price=ele.price * ele.qnty + price
//   })
//   setPrice(price);

// }
// useEffect(()=>{
//   total();
// },[total])





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




  const amount=useSelector((store)=>store.cart.amount)

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">audiophile</NavLogo>

          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuLeft />}
          </MobileIcon>

          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                  {/* <NavLinks> */}
                  {el.text}
                </NavLinks>
                {/* <NavCart>{el.icon}</NavCart> */}
              </NavItem>
            ))}
          </NavMenu>

          <NavCart to="/cart">
            <FaCartPlus />
            <AmountContainer>
              <TotalAmount>{amount}</TotalAmount>
            </AmountContainer>
          </NavCart>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
