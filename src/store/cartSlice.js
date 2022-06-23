import { createSlice, current } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const initialState = {
  cartItems: [],
  count: 0, //quantity
  total: 0,
};

export const addItemstoCart = (el,quantity) => async (dispatch) => {
  // dispatch(AddToCart(el,quantity))
  dispatch(
    AddToCart({
        cartItems: el,
        quantity:quantity
    
    })
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      console.log(current (state))
      console.log(action.payload)
      // console.log(action.payload.payload.cartItems.id)
     const itemIndex= state.cartItems.findIndex((item)=> item.id===action.payload.cartItems.id)

     console.log(itemIndex)

     //itemIndex is working fine
     if(itemIndex >= 0){
      state.cartItems[itemIndex].cartQuantity += action.payload.quantity
      console.log(current(state.cartItems))
     }else{

       const tempProduct={...action.payload.cartItems,cartQuantity:action.payload.quantity}
       console.log(tempProduct)
       state.cartItems.push(tempProduct)
      //  state.cartItems= [...state.cartItems, tempProduct]
       console.log(current (state))
       state.count=state.cartItems.length
     }
    },
    RmvCart:(state,action)=>{
      console.log(action.payload)
     state.cartItems=state.cartItems.filter((item)=>item.id !== action.payload)
    }
 
 
  },
});

export const { AddToCart, RmvCart, RmvOne } = cartSlice.actions;
export default cartSlice.reducer;
