import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderedProducts: [],
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderItems(state, { payload }) {
      state.orderedProducts = payload
    }
  }
})

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
