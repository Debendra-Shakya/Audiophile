import { createSlice, current } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const initialState = {
  cartItems: [],
  amount: 0, //quantity
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
      //  state.cartItems.push(tempProduct)
      console.log(tempProduct)
       state.cartItems= [...state.cartItems, tempProduct]
       console.log(current (state))
     }
    },
    // AddToCart: (state, action) => {
    //   const items = action.payload;
    //   const item = items.payload;
    //   console.log(item);
    //   const isItemExist = state.cartItems.map(
    //     (item) => item.id === item.cartItems.id
    //   );
    
      

    //   if (!isItemExist) {
    //     state.cartItems = [
    //       ...state.cartItems,
    //       { ...item.cartItems, quantity: item.quantity },
    //     ];
    //   } else {
    //     state.cartItems = state.cartItems.map((i) => {
    //       if (i.id === item.cartItems.id) {
    //         return { ...i, quantity: item.quantity + state.cartItems.quantity };
    //       } else {
    //         return i;
    //       }
    //     });
    //   }
    // },
 
  },
});

export const { AddToCart, RmvCart, RmvOne } = cartSlice.actions;
export default cartSlice.reducer;
