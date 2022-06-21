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
} from "./NavbarStyles.js";
import { data } from "../../data/NavbarData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { RmvCart } from "../../store/cartSlice.js";

const Navbar = () => {
  const dispatch =useDispatch();
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [price,setPrice] = useState(0);


  const open = Boolean(anchorEl);
  const getdata = useSelector((state)=> state.cart.carts);

  const cartHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const cartHandleClose=()=>{
    setAnchorEl(null)
  }

  const dlt = (id)=>{
    dispatch(RmvCart(id))
}

const total=()=>{
  let price =0;
  getdata.map((ele,k)=>{
    price=ele.price * ele.qnty + price
  })
  setPrice(price);

}
useEffect(()=>{
  total();
},[total])





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

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={cartHandleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {getdata.length ? (
                <div style={{ width: "24rem", padding: 10 }}>
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Restaurant Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink
                                  to={`/cart/${e.id}`}
                                  onClick={cartHandleClose}
                                >
                                  <img
                                    src={e.imgdata}
                                    style={{ width: "5rem", height: "5rem" }}
                                    alt=""
                                  />
                                </NavLink>
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Price : ₹{e.price}</p>
                                <p>Quantity : {e.qnty}</p>
                                <p
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                  onClick={() => dlt(e.id)}
                                >
                                  <i className="fas fa-trash smalltrash"></i>
                                </p>
                              </td>

                              <td
                                className="mt-5"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(e.id)}
                              >
                                <i className="fas fa-trash largetrash"></i>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                      <p className="text-center">Total :₹ {price}</p>
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div
                  className="card_details d-flex justify-content-center align-items-center"
                  style={{ width: "24rem", padding: 10, position: "relative" }}
                >
                  <i
                    className="fas fa-close smallclose"
                    onClick={cartHandleClose}
                    style={{
                      position: "absolute",
                      top: 2,
                      right: 20,
                      fontSize: 23,
                      cursor: "pointer",
                    }}
                  ></i>
                  <p style={{ fontSize: 22 }}>Your carts is empty</p>
                  <img
                    src="./cart.gif"
                    alt=""
                    className="emptycart_img"
                    style={{ width: "5rem", padding: 10 }}
                  />
                </div>
              )}
            </Menu>
          </NavCart>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
