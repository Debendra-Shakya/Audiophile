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
      const item=items.payload;
      console.log(item);
      state.cartItems.push(item.cartItems);
      state.amount=item.quantity


    //   const itemIndex= state.cartItems.findIndex((i)=> i.id ===item.cartItems.id)
    //  const isItemExist = state.cartItems.find((i) => i.id === items.payload.cartItems.id);

    //   console.log(itemIndex)
    //   console.log(isItemExist)
    //  if(itemIndex >= 0){
    //   state.amount += item.quantity
    //  }else{

    //  }

    //    const tempProduct={...action.payload,cartQuantity:1}
    //    state.cartItems.push(tempProduct)
  
      // const isItemExist = state.cartItems.find((i) => i.id === items.payload.cartItems.id);
      // console.log(isItemExist)
      // if(isItemExist){
      //   return{
      //     cartItems: state.cartItems.map((i) =>
      //       i.id === isItemExist.id ? item : i
      //     ),
      //   }
      // }else{
      //   return{
      //     cartItems:[...state.cartItems,item]
      //   }
      // }

      //  const tempProduct={...action.payload,cartQuantity:1}
      //  state.cartItems.push(tempProduct)
    },
  },
});

export const { AddToCart, RmvCart, RmvOne } = cartSlice.actions;
export default cartSlice.reducer;
