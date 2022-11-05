import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartId: 0,
  cartProducts: [],
  productNumber: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItems(state, { payload }) {
      state.cartItems = payload
    },
    cartId(state, { payload }) {
      console.log('PAYLOAD', payload)
      state.cartId = payload;
    },
    cartProducts(state, { payload }) {
      state.cartProducts = payload
    },
    productNumber(state, { payload }) {
      state.productNumber = payload;
    }
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;