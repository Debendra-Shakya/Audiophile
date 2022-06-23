import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const initialState = {
  cartItems: [],
  amount: 0, //quantity
  total: 0,
};

export const addItemstoCart = (el, quantity) => async (dispatch) => {
  // dispatch(AddToCart(el,quantity))
  dispatch(
    AddToCart({
      payload: {
        cartItems: el,
        quantity,
      },
    })
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // AddToCart: (state, action) => {
    //  const itemIndex= state.cartItems.findIndex((item)=> item.id ===action.payload.id)
    //  if(itemIndex >= 0){
    //   state.cartItems[itemIndex].cartQuantity += 1
    //  }else{

    //    const tempProduct={...action.payload,cartQuantity:1}
    //    state.cartItems.push(tempProduct)
    //  }
    // },
    AddToCart: (state, action) => {
      const items = action.payload;
      const item = items.payload;
      console.log(item);
      const isItemExist = state.cartItems.map(
        (item) => item.id === item.cartItems.id
      );
    
      

      if (!isItemExist) {
        state.cartItems = [
          ...state.cartItems,
          { ...item.cartItems, quantity: item.quantity },
        ];
      } else {
        state.cartItems = state.cartItems.map((i) => {
          if (i.id === item.cartItems.id) {
            return { ...i, quantity: item.quantity + state.cartItems.quantity };
          } else {
            return i;
          }
        });
      }
    },
 
  },
});

export const { AddToCart, RmvCart, RmvOne } = cartSlice.actions;
export default cartSlice.reducer;
