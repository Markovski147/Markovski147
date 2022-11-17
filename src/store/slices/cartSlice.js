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
    setCartItems(state, { payload }) {
      state.cartItems = payload
    },
    setCartId(state, { payload }) {
      console.log('PAYLOAD', payload)
      state.cartId = payload;
    },
    setCartProducts(state, { payload }) {
      state.cartProducts = payload
    },
    setProductNumber(state, { payload }) {
      state.productNumber = payload;
    }
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;