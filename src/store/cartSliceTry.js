// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   carts: [],
// };

// export const cartReducer = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     AddCart: (state, action) => {
//       const IteamIndex = state.carts.findIndex(
//         (iteam) => iteam.id === action.payload.id
//       );
//       if (IteamIndex >= 0) {
//         state.carts[IteamIndex].qnty += 1;
//         return {
//           carts: [...state.carts],
//         };
//       } else {
//         const temp = { ...action.payload, qnty: 1 };
//         return {
//           carts: [...state.carts, temp],
//         };
//       }
//     },
//     RmvCart: (state, action) => {
//       const data = state.carts.filter((el) => el.id !== action.payload);
//       return {
//         carts: data,
//       };
//     },
//     RmvOne: (state, action) => {
//       const IteamIndex_dec = state.carts.findIndex(
//         (iteam) => iteam.id === action.payload.id
//       );

//       if (state.carts[IteamIndex_dec].qnty >= 1) {
//         const dltiteams = (state.carts[IteamIndex_dec].qnty -= 1);
//         return {
//           carts: [...state.carts],
//         };
//       } else if (state.carts[IteamIndex_dec].qnty === 1) {
//         const data = state.carts.filter((el) => el.id !== action.payload);
//         return {
//           carts: data,
//         };
//       }
//     },
//   },
// });

// export const {AddCart,RmvCart,RmvOne} =cartReducer.actions;
// export default cartReducer.reducer;