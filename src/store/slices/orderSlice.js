import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderedProducts: [],
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderItems(state, { payload }) {
      state.orderedProducts = payload
    }
  }
})

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
